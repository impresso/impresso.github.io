## Setting up localhost

In terminal browse to local site directory, then use the following command:

`bundle exec jekyll serve`

Your local site resides here now: [localhost:4000](http://localhost:4000/)

Details on [setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)


## Where are pages stored on Github?

Page type | Github Path
---- | -----------
current home | [index](https://github.com/impresso/impresso.github.io/blob/master/index.html)
new home | [index_](https://github.com/impresso/impresso.github.io/blob/master/index_.html)
pages | [/pages](https://github.com/impresso/impresso.github.io/tree/master/pages)
lab post | [/_labs](https://github.com/impresso/impresso.github.io/tree/master/_labs)
blog posts | [/_posts](https://github.com/impresso/impresso.github.io/tree/master/_posts)

Page files are prefixed by their parent category. e.g.
- `project.design.md`

Pages can be split into multiple _sections_, e.g.

app > usage
- `app.usage.md`
- `app.usage.01.md`
- `app.usage.02.md`
- ...


## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/impresso/impresso/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/impresso/impresso/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
