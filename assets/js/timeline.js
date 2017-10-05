
  var data = {
    start_date: "{{site.data.timeline.start_date}}",
    end_date: "{{site.data.timeline.end_date}}",
    values: [
      {% for value in site.data.timeline.values %}
        {% assign valueid = forloop.index %}
        {
          start_date: "{{value.start_date}}",
          end_date: "{{value.end_date}}",
          type: "{{value.type}}",
          content: "{{value.content}}",
          label: "{{value.label}}",
          items: [
            {% for item in value.items %}
              {
                _id: "{{valueid}}.{{ forloop.index }}",
                type: "{{item.type}}",
                content: "{{item.content}}",
                permalink: "{{item.permalink}}",
                author: "{{item.author}}"
              }
            {% endfor %}
          ]
        },
      {% endfor %}
    ]
  };

  // DOM elements
  var _timeline      = d3.select("#timeline"),
      _browser       = d3.select("#timeline-browser .info"),
      _slides        = d3.select("#timeline .slides"),
      _lines         = d3.select("#timeline .lines"),
      _main          = d3.select("#main"),
      // append pulsing now circle, see stylesheet for infinite pulsations
      _now           = _lines.select('#timeline-now'),


      // append next big event
      _next          = _lines.select('#timeline-next-event'),
      _next_text     = _next.append('label')
                          .text('upcoming event'),
      _next_date     = _next.append('div')
                          .classed('date', true),

      // append line
      _pointer       = _lines.select('#timeline-pointer'),
      _pointer_text  = _pointer.select('span.date'),
      _pointer_item  = _pointer.select('div.item')
                        .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                          _pointer_item.classed('flipInX', false)
                        }),
      // closest item pointer
      _closest       = _lines.select('#timeline-closest'),
                                                   
      // timeline items container
      _values        = _lines.select('div.values');


  console.log('_slides', _slides)
  // d3 scale function and formatters
  var rect           = _lines.node().getBoundingClientRect(),
      now            = new Date(),
      timeScale      = d3.scaleTime()
        .domain([d3.isoParse(data.start_date), d3.isoParse(data.end_date)])
        .range([0, rect.height]),

      timeFormatter  = d3.timeFormat("%d.%m %Y"),

      toggleTimelineBrowserId,
      previousClosestIndex = -1,
      _is_next_index = -1;


  // Transform data
  data._positions = []
  data.values = data.values.map(function(d, k) {
    var sd = d3.isoParse(d.start_date),
        ed = d3.isoParse(d.end_date);

    d._top        = timeScale(sd);
    d._height     = timeScale(ed) - d._top;
    d._start_date = timeFormatter(sd);
    d._end_date   = timeFormatter(ed);

    // add to position array, so that we can quickly get the closest position to a Y coord.
    data._positions.push({
      _index: k,
      _top: d._top
    });

    // check if the datum "is next"
    if(_is_next_index < 0 && now < sd) {
      d._is_next = true;
      _is_next_index = k;
    }

    return d;
  })

  // reorder position based on start_date
  // data._positions.sort(function(a, b) {
  //   return (a._top > b._top) - (a._top < b._top)
  // })

  console.log(data, data._positions)

  // position now
  _now
    .style('transform', 'translate(0px,'+timeScale(now)+'px)');

  d3.select("#timeline-browser .close").on('click', closeTimelineBrowser)

  // position next event
  if(_is_next_index > -1){
    _next
      .classed('active', true)
      .style('transform', 'translate(0px,'+ data.values[_is_next_index]._top +'px)' )

    _next_date.text(data.values[_is_next_index]._start_date);
  }

  function closestDateToPosition(pos) {
    var d = Infinity,
        closest=[]; 
    for(var i =0,l=data._positions.length;i<l;i++) {
      var d1 = Math.abs(data._positions[i]._top - pos)
      if(d1 < d){
        d = d1;
        closest = i;
      }
    }
    return data._positions[closest];
  }

  function changeLog(item) {
    console.log('changeLog', item, item.items);
    _closest
      .classed('active', true)
      .style('transform', 'translate(0px,'+ item._top +'px)' )

    _pointer_item
      .select('label')
        .text(item.label);

    _pointer_item.classed('flipInX', true)

    if(item.type == 'milestone'){
      _pointer_item
        .select('.category')
          .text(item.type);
    } else {
      _pointer_item
        .select('.category')
          .text('')
    }

    _pointer_item
      .select('.date')
        .text(item._start_date != item._end_date? item._start_date + ' → ' + item._end_date: item._start_date);
  }

  function changeItem() {
    var item = data.values[previousClosestIndex];
    _browser
      .select('h1')
        .text(item.label);


    _browser
      .select('.date')
        .text(item._start_date != item._end_date? item._start_date + ' → ' + item._end_date: item._start_date);

    _browser
      .select('blockquote')
        .text(item.content);

    var slidedata = _slides
                      .selectAll('div.slide')
                        .data(item.items, function(d) { return d._id; });

        
    

    var _slideset = slidedata
                      .enter()
                        .append('div')
                          .classed('slide', true)



    _slideset
      .append('blockquote')
        .html(function(d){
          return (d.author.length? '<b>' + d.author + "</b> - ":'') + d.content
        })
    _slideset
      .append('a')
        .classed("permalink", true)
        .attr('href', function(d){
          return d.permalink
        })
        .attr('target', '_blank')
        .text(function(d){
          return d.permalink
        })

    slidedata.exit().remove();

    
  }

  function closeTimelineBrowser() {
    _main
      .classed('put-aside', false);
    _timeline
      .classed('active', false)
    
  }

  function toggleTimelineBrowser() {
    if(toggleTimelineBrowserId)
      clearTimeout(toggleTimelineBrowserId)
    toggleTimelineBrowserId = setTimeout(closeTimelineBrowser, 5000);
  }

  // activate events.
  _timeline
    .on("mouseenter", function() {
      _pointer_text
        .text('');
      clearTimeout(toggleTimelineBrowserId);
    })
    .on("mouseleave", function(){
      _lines
        .classed("active", false);

      toggleTimelineBrowser();
    });

  _lines
    .on("click", function() {
      _main
        .classed('put-aside', true);
      _timeline
        .classed('active', true)
      changeItem();
    })
    .on("mouseenter", function() {
      _pointer
        .classed("active", true)
      
      _closest
        .classed("active", false)
      
      _lines
        .classed("active", true)
    })
    .on("mouseleave", function(){
      _pointer
        .classed("active", false)

      _closest
        .classed("active", false)
      previousClosestIndex = -1
      
    })
    .on("mousemove", function() {
      var pos = d3.mouse(this),
          text = timeScale.invert(pos[1]);

      // debugger 
      _pointer
        .style('transform', 'translate(0px,'+pos[1]+'px)');

      _pointer_text
        .text(timeFormatter(text));

      // calculate closest date to pointer position
      closestIndex = closestDateToPosition(pos[1]);
      if(previousClosestIndex != closestIndex._index) {
        changeLog(data.values[closestIndex._index]);
      }
      previousClosestIndex = closestIndex._index;
    })

  var _enter = _values
                .selectAll("div.group")
                .data(data.values)
                .enter()
                .append('div')
                .classed('group', true)
                .style('transform', function(d){
                  return 'translateY('+ d._top +'px)'
                })

  _enter
    .append('div')
      .attr('class', function(d) {
        var classes = ['line','left'];
        if(d.type == 'milestone')
          classes.push('milestone')
        return classes.join(' ')
      })
  _enter
    .append('div')
      .attr('class', function(d) {
        var classes = ['line','right'];
        if(d.type == 'milestone')
          classes.push('milestone')
        if(d._is_next)
          classes.push('next')
        return classes.join(' ')
      })
      