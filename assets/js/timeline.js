/*
  Draw and manage a timeline for impresso website, mobile ready.

  _menu d3 is required, and declared in default.html
*/
window.ImpressoTimeline = function(options) {
  var data = options.data;
  // const
  const TIMELINE_VERTICAL_PADDING = 200;
  // DOM elements
  var _timeline      = d3.select("#timeline"),
      _browser       = d3.select("#timeline-browser .info"),
      _browser_date  = d3.select("#timeline-browser .date"),
      _browser_close = d3.select("#timeline-browser .close"),
      _slides        = d3.select("#timeline .slides"),
      _lines         = d3.select("#timeline .lines"),
      
      // append pulsing now circle, see stylesheet for infinite pulsations
      _now           = _lines.select('#timeline-now'),


      // append next big event
      _next          = _timeline.select('#timeline-next-event'),
      _next_text     = _next.append('label')
                          .text('upcoming event'),
      _next_date     = _next.append('div')
                          .classed('date', true),

      // append line
      _pointer       = d3.select('#timeline-pointer'),
      _pointer_text  = _pointer.select('span.date'),
      _pointer_item  = _pointer.select('div.item')
                        .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                          _pointer_item.classed('flipInX', false)
                        }),
      // closest item pointer
      _closest       = _lines.select('#timeline-closest'),
                                                   
      // timeline items container
      _values        = _lines.select('div.values');

  // measures Those are normally set in this.render().
  var timelineRect   = _lines.node().getBoundingClientRect();
      timelineHeight = -1;

  // d3 scale function and formatters. Set in init, range updated in this.render();
  var now            = new Date(),
      timeScale      = d3.scaleTime(),
      timeFormatter  = d3.timeFormat("%d.%m %Y");


  // timers
  var timerHideTimelineBrowser,
      timerHidePointer,

      previousClosestIndex = -1,
      
      isPointerItemAboveTheFold   = true,
      _is_next_index = -1;

  var _self = this;
  

  this.isBrowsing = false;

  this.init = function() {
    log('init', [d3.isoParse(data.start_date), d3.isoParse(data.end_date)]);

    // set timescale domain 
    timeScale = timeScale.domain([d3.isoParse(data.start_date), d3.isoParse(data.end_date)]);

    // enable listeners
    _timeline
      .on("mouseleave", this.delayHidePointer)
      

    _lines
      .on("click", this.showTimelineBrowser)
      .on("mouseenter", this.showPointer)
      .on("mousemove", this.movePointer)
      .on("mouseleave", this.delayHidePointer)

    _pointer_item
      .on("click", this.showTimelineBrowser)
      .on("mouseenter", function(){
        // clean timers!!
        console.log('it enters!!!!')
        if(timerHidePointer)
          clearTimeout(timerHidePointer)
      })
//       clearTimeout(timerHidePointer)

//       
//     })

    // close browser when needed
    _browser_close
      .on("click", this.hideTimelineBrowser);

    // call render
    this._render();
  };

  //
  this.hideTimelineBrowser = function() {
    _menu
      .classed('put-aside', false);
    _timeline
      .classed('active', false)    
    _self.isBrowsing = false;
    _self.hidePointer();
  }

  // Activate the event browser
  this.showTimelineBrowser = function(idx) {
    _menu
      .classed('put-aside', true);
    _timeline
      .classed('active', true);
    
    _self.isBrowsing = true;

    // showTimelineBrowser can receive an Event isntead of a NUmber.
    log('showTimelineBrowser at index!!!', idx, typeof idx)
    

    if(typeof idx == 'number'){
      _self.viewItem(idx);
    } else {
      var pos = d3.mouse(this),
          closest = _self.closestDateToPosition(pos[1]);

      _closest
      .style('transform', 'translate(0px,'+closest._top+'px)');
      _self.viewItem(closest._index);
    }
    
    _pointer
      .classed("active", false)

  };

  this.delayHidePointer = function() {
    if(timerHidePointer)
      clearTimeout(timerHidePointer)
    timerHidePointer = setTimeout(_self.hidePointer, 1000);
    log('delayCloseTimelineLines')
  }

  this.hidePointer = function() {
    _pointer
      .classed("active", false)
      
    _closest
      .classed("active", true)
      
    _lines
      .classed("active", false)

    
  };

  this.showPointer = function(idx) {
    if(_self.isBrowsing){
      _self.hideTimelineBrowser();
    }
    if(timerHidePointer)
      clearTimeout(timerHidePointer)

    _pointer
      .classed("active", true)
      
    _closest
      .classed("active", false)
      
    _lines
      .classed("active", true)

    

    _self.movePointer(0);
  };


  this.movePointer = function(idx) {
    if(_self.isBrowsing){
      return;
    }
    // d3.mouse is normally bound to the event handler.
    var pos = typeof idx == 'number'? [0, 0]: d3.mouse(this),
        // get text from y
        date = timeScale.invert(pos[1]);
    
    // move pointer towards mouse Y on _lines
    _pointer
      .style('transform', 'translate(0px,'+pos[1]+'px)');

    // check if mouse y it is after the half of the timeline height.
    if(isPointerItemAboveTheFold && pos[1]/timelineHeight >= 0.55) {
      _pointer_item.classed('below-the-fold', true)
    } else if(!isPointerItemAboveTheFold && pos[1]/timelineHeight < 0.55){
      _pointer_item.classed('below-the-fold', false)
    }
    isPointerItemAboveTheFold = pos[1]/timelineHeight < 0.55;

    // add date to DOM element
    _pointer_text
      .text(timeFormatter(date));

    // calculate closest date to pointer position
    closestIndex = _self.closestDateToPosition(pos[1]);
    if(previousClosestIndex != closestIndex._index) {
      _self.changePreview(data.values[closestIndex._index]);
    }
    previousClosestIndex = closestIndex._index;
  };



  this.viewItem = function(idx) {
    var item = data.values[idx < 0? 0:idx];
    log('viewItem', idx)
    _browser
      .select('h1')
        .text(item.label);


    _browser_date
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
  };

  this.changePreview = function(item) {
    log('changePreview', item.start_date, item.type);
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
  };

  this.closestDateToPosition = function(pos) {
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
  };


  // call this function whenever data need to be updated
  this.updateData = function() {
    // reset data positions values
    data._positions = []
    data._is_next_index = -1;
    // store timeScale in data values
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
      if(data._is_next_index < 0 && now < sd) {
        d._is_next = true;
        data._is_next_index = k;
      }
      return d;
    });

    // reorder positions, if needed.
    data._positions.sort(function(a, b) {
      return (a._top > b._top) - (a._top < b._top)
    })

    log('updateData', '- n. positions:',data._positions.length); 

    var group = _values
                  .selectAll("div.group")
                    .data(data.values);
                
    // EXIT old elements not present in new data.
    group.exit().remove()

    // UPDATE old elements present in new data.
    group
      .style('transform', function(d){
        return 'translateY('+ d._top +'px)'
      })

    // ENTER new elements present in new data.
    var newgroup = group.enter()
                  .append('div')
                    .classed('group', true)
                
    newgroup
      .append('div')
        .attr('class', function(d) {
          var classes = ['line','left'];
          if(d.type == 'milestone')
            classes.push('milestone')
          return classes.join(' ')
        });

    newgroup
      .append('div')
        .attr('class', function(d) {
          var classes = ['line','right'];
          if(d.type == 'milestone')
            classes.push('milestone')
          if(d._is_next)
            classes.push('next')
          return classes.join(' ')
        });

    newgroup
      .style('transform', function(d){
        return 'translateY('+ d._top +'px)'
      })

    // move now indicator
    _now
      .style('transform', 'translate(0px,'+timeScale(now)+'px)');

    // move next event indicator
    if(data._is_next_index > -1){
      _next
        .classed('active', true)
        .style('transform', 'translate(0px,'+ data.values[data._is_next_index]._top +'px)' )

      _next_date.text(data.values[data._is_next_index]._start_date);
    }
  }

  this._render = function() {
    // if render is really necessary
    if(timelineHeight == window.innerHeight - TIMELINE_VERTICAL_PADDING) {
      return;
    }

    timelineHeight = window.innerHeight - TIMELINE_VERTICAL_PADDING;

    // recalculate rectangle
    timelineRect = _lines.node().getBoundingClientRect();

    // set/reset timescale range 
    timeScale = timeScale.range([0, timelineHeight])

    
    // transform options.data (after timeScale!!!)
    _self.updateData();

    // draw/update d3 nodes
    _timeline.style('height', timelineHeight + 'px')

    log('render', '- height:', timelineHeight);
  }

  this.render = debounce(this._render, 500);


  function log() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift("[📺]");
    console.log.apply(console, args);
  }

  function debounce(fn, delay) {

    var timer = null;
    return function () {
      // log('debounce!');
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  this.init();
}









//   d3.select("#timeline-browser .close").on('click', hideTimelineBrowser)






//   



//   // Delay deactivate the event browser
//   function delayhideTimelineBrowser() {
//     if(timerHideTimelineBrowser)
//       clearTimeout(timerHideTimelineBrowser)
//     timerHideTimelineBrowser = setTimeout(hideTimelineBrowser, 1500);
//   }


//   // Deactivate the timeline (lines)
//   function closeTimelineLines() {
//     _pointer
//       .classed("active", false)

//     _closest
//       .classed("active", false)
    
//     previousClosestIndex = -1
//   }

//   // Delay dactivate the event browser
//   function delayCloseTimelineLines() {
//     if(timerHidePointer)
//       clearTimeout(timerHidePointer)
//     timerHidePointer = setTimeout(closeTimelineLines, 500);
//     console.log('delaying closeTimelineLines')
//   }




//   // activate events.
//   _timeline
//     .on("mouseenter", function() {
//       _pointer_text
//         .text('');
//       clearTimeout(timerHideTimelineBrowser);
//     })
//     .on("mouseleave", function(){
//       _lines
//         .classed("active", false);

//       delayhideTimelineBrowser();
//     });

  

//   _lines
//     
//     .on("mouseleave", delayCloseTimelineLines)
//     

//   _pointer
//     .on("click", showTimelineBrowser)
//     .on("mouseenter", function() {
//       clearTimeout(timerHidePointer)
//     })
//     .on("mouseleave", delayCloseTimelineLines)

//   // resize
//   

//   delayRenderTimeline();
//   // d3.select(window)
//   //   .on("resize", function(){ console.log('resized')
//   //     // height has changed?
//   //     // console.log('@resize, render timeline')
        
//   //     // if(timeline_height != window.innerHeight - 200) {
//   //     //   // timer, then render

//   //     //   console.log('@resize, render timeline')
//   //     //   renderTimeline();
//   //     // }
//   //     // timeline_height = window.innerHeight - 200;
     
      
//   //   });


//   