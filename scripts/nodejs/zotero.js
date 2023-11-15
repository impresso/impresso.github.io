const axios = require('axios')
const parseArgs = require('minimist')
const fs = require('fs')
const { version } = require('./package.json')
const { Command } = require('commander')

axios.interceptors.response.use(undefined, (err) => {
  const { config, message } = err
  if (!config?.retry) {
    return Promise.reject(err)
  }
  // retry while Network timeout or Network Error
  if (!(message.includes('timeout') || message.includes('Network Error'))) {
    return Promise.reject(err)
  }
  config.retry -= 1
  const delayRetryRequest = new Promise((resolve) => {
    setTimeout(() => {
      console.log('retry the request', config.url)
      resolve()
    }, config.retryDelay || 1000)
  })
  return delayRetryRequest.then(() => axios(config))
})

const get_zotero_group_items = async (gid, opts = {}) => {
  const params = {
    start: 0,
    limit: 25,
    sort: 'dateAdded',
    include: 'data,csljson',
    retry: 3,
    retryDelay: 3000,
    ...opts,
  }
  console.log('\n get_zotero_group_items')
  console.log(` - gid:${gid}, params: ${JSON.stringify(params)}`)
  const url = `https://api.zotero.org/groups/${gid}/items`
  try {
    const res = await axios.get(url, { params })
    console.log(` - url:${res.config.url}, params: ${JSON.stringify(params)}`)
    return res
  } catch (err) {
    console.error(err)
    throw err
  }
}

const get_zotero_collection_items = async (
  gid,
  cid,
  opts = {},
  headers = {}
) => {
  const params = {
    start: 0,
    limit: 25,
    sort: 'dateAdded',
    include: 'data,csljson',
    ...opts,
  }

  console.log('\n get_zotero_collection_items')
  console.log(` - gid:${gid}, cid: ${cid}`)
  console.log(` - params: ${JSON.stringify(params)}`)
  if (headers.token) {
    console.log(` - token:*** (using token=YES)`)
  }
  const url = `https://api.zotero.org/groups/${gid}/collections/${cid}/items`
  try {
    const res = await axios.get(url, {
      params,
      retry: 3,
      retryDelay: 3000,
      headers,
    })
    console.log(` - url:${res.config.url}, params: ${JSON.stringify(params)}`)
    console.log(' - res.status:', res.status)
    console.log(' - total result:', parseInt(res.headers['total-results'], 10))
    return res
  } catch (err) {
    console.error('Error', err.name)
    console.error(err.message)
    return null
  }
}

async function downloadCollection(gid, cid, output, { token, limit = 25 }) {
  console.log('\n downloadCollection')
  console.log(` gid:${gid}, cid: ${cid}`)
  console.log(` output: ${output}`)
  console.log(` token: ${token ? '***' : 'NO'}`)
  console.log(` limit: ${limit}`)
  const res = await get_zotero_collection_items(
    gid,
    cid,
    {},
    token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : null
  )
  if (!res) {
    return
  }
  const { data: items } = res
  let allItems = [...items]
  let total = parseInt(res.headers['total-results'], 10)
  const loops = Math.ceil(total / limit)

  console.log(' total', total)
  console.log(' limit', limit)
  console.log(' loops', loops)
  console.log(' items.length', items.length)
  for (let i = 1; i < loops; i++) {
    console.log(' loop:', i)
    // get_zotero_collection_items(gid, cid, { start: i * limit, limit })
    const res = await get_zotero_collection_items(
      gid,
      cid,
      { start: i * limit, limit },
      token ? { Authorization: `Bearer ${token}` } : null
    )
    if (!res) {
      console.log(' - res is null! break at loop ', i)
      break
    }
    const { data: nextItems } = res
    console.log(' - nextItems.length', nextItems.length)
    allItems.push(...nextItems)
  }
  console.log(' - allItems.length', allItems.length)
  const json = JSON.stringify(allItems, null, 2)
  // rewrite the file
  fs.writeFileSync(output, json)
}

async function downloadGroup(gid, cid, output, { token }) {
  const res = await get_zotero_group_items(
    gid,
    token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : null
  )
  if (!res) {
    return
  }
  const { data: items, headers } = res
  const total = parseInt(headers['total-results'], 10)
  console.log(' - total result', total)
  console.log(' - items.length', items.length)

  while (items.length < total) {
    const res = await get_zotero_group_items(gid, {
      start: items.length,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!res) {
      break
    }
    const { data: nextItems } = res
    console.log(' - nextItems.length', nextItems.length)
    items.push(...nextItems)
  }

  const json = JSON.stringify(items, null, 2)
  fs.writeFileSync(output, json)
}

const program = new Command()

program
  .name('zotero')
  .description(
    'CLI to download zotero items. Available functions: download-collection'
  )
  .version(version)

program
  .command('download-collection')
  .argument('<gid>', 'zotero group id')
  .argument('<cid>', 'zotero collection id')
  .argument('<output>', 'output file path')
  .option('-t, --token <token>', 'for private collections')
  .action(downloadCollection)

program
  .command('download-group')
  .argument('<gid>', 'zotero group id')
  .argument('<output>', 'output file path')
  .option('-t, --token <token>', 'for private groups')
  .action(downloadGroup)

program.parse()
