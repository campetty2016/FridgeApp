
var chart = new Chartist.Pie('#ct-chart1',
    {
      series: [10, 50 ],
      labels: ['', '']
  }, {
      donut: true,
      donutWidth: 40,
      startAngle: 300,
      total: 200,
        showLabel: false,
        plugins: [
            Chartist.plugins.fillDonut({
                items: [{
                    content: '',
                    position: 'bottom',
                    offsetY : 10,
                    offsetX: -2
                }, {
                    content: '<h5>Fruits</h5><div id="Apple"><h5>15<span class="small">%</span></h5></div>'
                }]
            })
        ],
    });

chart.on('draw', function(data) {
    if(data.type === 'slice' && data.index == 0) {
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1200,
                from: -pathLength + 'px',
                to:  '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            }
        };

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually

        data.element.animate(animationDefinition, true);
    }
});

    var chart = new Chartist.Pie('#ct-chart2',
        {
          series: [15, 50 ],
          labels: ['', '']
      }, {
          donut: true,
          donutWidth: 40,
          startAngle: 300,
          total: 200,
            showLabel: false,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '',
                        position: 'bottom',
                        offsetY : 10,
                        offsetX: -2
                    }, {
                        content: '<div style="display:flex; flex-direction:column;"><h5>Dairy</h5><div id="Milk"><h5>25<span class="small">%</span></h5></div>'
                    }]
                })
            ],
        });

    chart.on('draw', function(data) {
        if(data.type === 'slice' && data.index == 0) {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1200,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    fill: 'freeze'
                }
            };

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually

            data.element.animate(animationDefinition, true);
        }
    });

    var chart = new Chartist.Pie('#ct-chart3',
        {
          series: [8, 50 ],
          labels: ['', '']
      }, {
          donut: true,
          donutWidth: 40,
          startAngle: 300,
          total: 200,
            showLabel: false,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '',
                        position: 'bottom',
                        offsetY : 10,
                        offsetX: -2
                    }, {
                        content: '<div style="display:flex; flex-direction:column;"><h5>Herbs</h5><div id="Herb"><h5>10<span class="small">%</span></h5></div>'
                    }]
                })
            ],
        });

    chart.on('draw', function(data) {
        if(data.type === 'slice' && data.index == 0) {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1200,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    fill: 'freeze'
                }
            };

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually

            data.element.animate(animationDefinition, true);
        }
    });

    var chart = new Chartist.Pie('#ct-chart4',
        {
          series: [8, 50 ],
          labels: ['', '']
      }, {
          donut: true,
          donutWidth: 40,
          startAngle: 300,
          total: 200,
            showLabel: false,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '',
                        position: 'bottom',
                        offsetY : 10,
                        offsetX: -2
                    }, {
                        content: '<div style="display:flex; flex-direction:column;"><h5>Breads</h5><div id="Bread"><h5>10<span class="small">%</span></h5></div>'
                    }]
                })
            ],
        });

    chart.on('draw', function(data) {
        if(data.type === 'slice' && data.index == 0) {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1200,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    fill: 'freeze'
                }
            };

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually

            data.element.animate(animationDefinition, true);
        }
    });

    var chart = new Chartist.Pie('#ct-chart5',
        {
          series: [10, 50 ],
          labels: ['', '']
      }, {
          donut: true,
          donutWidth: 40,
          startAngle: 300,
          total: 200,
            showLabel: false,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '',
                        position: 'bottom',
                        offsetY : 10,
                        offsetX: -2
                    }, {
                        content: '<div style="display:flex; flex-direction:column;"><h5>Vegetables</h5><div id="Apple"><h5>15<span class="small">%</span></h5></div>'
                    }]
                })
            ],
        });

    chart.on('draw', function(data) {
        if(data.type === 'slice' && data.index == 0) {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1200,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    fill: 'freeze'
                }
            };

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually

            data.element.animate(animationDefinition, true);
        }
    });

    var chart = new Chartist.Pie('#ct-chart6',
        {
          series: [10, 50 ],
          labels: ['', '']
      }, {
          donut: true,
          donutWidth: 40,
          startAngle: 300,
          total: 200,
            showLabel: false,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '',
                        position: 'bottom',
                        offsetY : 10,
                        offsetX: -2
                    }, {
                        content: '<div style="display:flex; flex-direction:column;"><h5>Protein</h5><div id="Meat"><h5>15<span class="small">%</span></h5></div>'
                    }]
                })
            ],
        });

    chart.on('draw', function(data) {
        if(data.type === 'slice' && data.index == 0) {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1200,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    fill: 'freeze'
                }
            };

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually

            data.element.animate(animationDefinition, true);
        }
    });
    var chart = new Chartist.Pie('#ct-chart7',
        {
          series: [8, 50 ],
          labels: ['', '']
      }, {
          donut: true,
          donutWidth: 40,
          startAngle: 300,
          total: 200,
            showLabel: false,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '',
                        position: 'bottom',
                        offsetY : 10,
                        offsetX: -2
                    }, {
                        content: '<div style="display:flex; flex-direction:column;"><h5>Condiments</h5><div id="Sauce"><h5>10<span class="small">%</span></h5></div>'
                    }]
                })
            ],
        });

    chart.on('draw', function(data) {
        if(data.type === 'slice' && data.index == 0) {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1200,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    fill: 'freeze'
                }
            };

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually

            data.element.animate(animationDefinition, true);
        }
    });

$("#Icon1").click(function(){

  $("#foods").css("display", "flex");
  $("#foods").html("<h2>Fruits</h2><hr/><ul><li>2 Containers of Strawberries</li><li>2 Pecks of Apples</li><li>1 Watermelon</li><li>4 Oranges</li><li>2 Cucumbers</li></ul>");
  $(".Content").addClass("Content2");
  $("#Icon1").addClass("BigIconSmall");

  $("#Icon2").removeClass("BigIconSmall");
  $("#Icon3").removeClass("BigIconSmall");
  $("#Icon4").removeClass("BigIconSmall");
  $("#Icon5").removeClass("BigIconSmall");
  $("#Icon6").removeClass("BigIconSmall");
  $("#Icon7").removeClass("BigIconSmall");

  $("#Icon2").addClass("IconSmall");
  $("#Icon3").addClass("IconSmall");
  $("#Icon4").addClass("IconSmall");
  $("#Icon5").addClass("IconSmall");
  $("#Icon6").addClass("IconSmall");
  $("#Icon7").addClass("IconSmall");

  var chart = new Chartist.Pie('#ct-chart1',
      {
        series: [10, 50 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 300,
        total: 200,
          showLabel: false,
          plugins: [
              Chartist.plugins.fillDonut({
                  items: [{
                      content: '',
                      position: 'bottom',
                      offsetY : 10,
                      offsetX: -2
                  }, {
                      content: '<h5 style="font-size: 2em;">Fruits</h5><div id="Apple"><h5 style="font-size: 2em;">15<span class="small">%</span></h5></div>'
                  }]
              })
          ],
      });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart2',
          {
            series: [15, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Dairy</h5><div id="Milk"><h5 style="font-size: 1.5em;">25<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart3',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Herbs</h5><div id="Herb"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart4',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Breads</h5><div id="Bread"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart5',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Vegetables</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart6',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Protein</h5><div id="Meat"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });
      var chart = new Chartist.Pie('#ct-chart7',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Condiments</h5><div id="Sauce"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

  $(".Icons-Container").addClass("ChartContainer2");
});

$("#Icon2").click(function(){

    $("#foods").css("display", "flex");
  $("#foods").html("<h2>Dairy</h2><hr/><ul><li>2 Gallons of Milk</li><li>1 Container of Sour Cream</li><li>1 Stick of Butter</li><li>4 Containers of Yogurt</li><li>1 Pound of Cheese</li></ul>");
    $(".Content").addClass("Content2");
    $("#Icon2").addClass("BigIconSmall");

    $("#Icon1").removeClass("BigIconSmall");
    $("#Icon3").removeClass("BigIconSmall");
    $("#Icon4").removeClass("BigIconSmall");
    $("#Icon5").removeClass("BigIconSmall");
    $("#Icon6").removeClass("BigIconSmall");
    $("#Icon7").removeClass("BigIconSmall");

    $("#Icon1").addClass("IconSmall");
    $("#Icon3").addClass("IconSmall");
    $("#Icon4").addClass("IconSmall");
    $("#Icon5").addClass("IconSmall");
    $("#Icon6").addClass("IconSmall");
    $("#Icon7").addClass("IconSmall");

        var chart = new Chartist.Pie('#ct-chart2',
            {
              series: [15, 50 ],
              labels: ['', '']
          }, {
              donut: true,
              donutWidth: 30,
              startAngle: 300,
              total: 200,
                showLabel: false,
                plugins: [
                    Chartist.plugins.fillDonut({
                        items: [{
                            content: '',
                            position: 'bottom',
                            offsetY : 10,
                            offsetX: -2
                        }, {
                            content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 2em;">Dairy</h5><div id="Milk"><h5 style="font-size: 2em;">25<span class="small">%</span></h5></div>'
                        }]
                    })
                ],
            });

        chart.on('draw', function(data) {
            if(data.type === 'slice' && data.index == 0) {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1200,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                };

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });

                // We can't use guided mode as the animations need to rely on setting begin manually

                data.element.animate(animationDefinition, true);
            }
        });

        var chart = new Chartist.Pie('#ct-chart1',
            {
              series: [10, 50 ],
              labels: ['', '']
          }, {
              donut: true,
              donutWidth: 30,
              startAngle: 300,
              total: 200,
                showLabel: false,
                plugins: [
                    Chartist.plugins.fillDonut({
                        items: [{
                            content: '',
                            position: 'bottom',
                            offsetY : 10,
                            offsetX: -2
                        }, {
                            content: '<h5 style="font-size: 1.5em;">Fruits</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                        }]
                    })
                ],
            });

            chart.on('draw', function(data) {
                if(data.type === 'slice' && data.index == 0) {
                    // Get the total path length in order to use for dash array animation
                    var pathLength = data.element._node.getTotalLength();

                    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                    data.element.attr({
                        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                    });

                    // Create animation definition while also assigning an ID to the animation for later sync usage
                    var animationDefinition = {
                        'stroke-dashoffset': {
                            id: 'anim' + data.index,
                            dur: 1200,
                            from: -pathLength + 'px',
                            to:  '0px',
                            easing: Chartist.Svg.Easing.easeOutQuint,
                            fill: 'freeze'
                        }
                    };

                    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                    data.element.attr({
                        'stroke-dashoffset': -pathLength + 'px'
                    });

                    // We can't use guided mode as the animations need to rely on setting begin manually

                    data.element.animate(animationDefinition, true);
                }
            });

            var chart = new Chartist.Pie('#ct-chart3',
                {
                  series: [8, 50 ],
                  labels: ['', '']
              }, {
                  donut: true,
                  donutWidth: 30,
                  startAngle: 300,
                  total: 200,
                    showLabel: false,
                    plugins: [
                        Chartist.plugins.fillDonut({
                            items: [{
                                content: '',
                                position: 'bottom',
                                offsetY : 10,
                                offsetX: -2
                            }, {
                                content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Herbs</h5><div id="Herb"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                            }]
                        })
                    ],
                });

            chart.on('draw', function(data) {
                if(data.type === 'slice' && data.index == 0) {
                    // Get the total path length in order to use for dash array animation
                    var pathLength = data.element._node.getTotalLength();

                    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                    data.element.attr({
                        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                    });

                    // Create animation definition while also assigning an ID to the animation for later sync usage
                    var animationDefinition = {
                        'stroke-dashoffset': {
                            id: 'anim' + data.index,
                            dur: 1200,
                            from: -pathLength + 'px',
                            to:  '0px',
                            easing: Chartist.Svg.Easing.easeOutQuint,
                            fill: 'freeze'
                        }
                    };

                    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                    data.element.attr({
                        'stroke-dashoffset': -pathLength + 'px'
                    });

                    // We can't use guided mode as the animations need to rely on setting begin manually

                    data.element.animate(animationDefinition, true);
                }
            });

            var chart = new Chartist.Pie('#ct-chart4',
                {
                  series: [8, 50 ],
                  labels: ['', '']
              }, {
                  donut: true,
                  donutWidth: 30,
                  startAngle: 300,
                  total: 200,
                    showLabel: false,
                    plugins: [
                        Chartist.plugins.fillDonut({
                            items: [{
                                content: '',
                                position: 'bottom',
                                offsetY : 10,
                                offsetX: -2
                            }, {
                                content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Breads</h5><div id="Bread"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                            }]
                        })
                    ],
                });

            chart.on('draw', function(data) {
                if(data.type === 'slice' && data.index == 0) {
                    // Get the total path length in order to use for dash array animation
                    var pathLength = data.element._node.getTotalLength();

                    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                    data.element.attr({
                        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                    });

                    // Create animation definition while also assigning an ID to the animation for later sync usage
                    var animationDefinition = {
                        'stroke-dashoffset': {
                            id: 'anim' + data.index,
                            dur: 1200,
                            from: -pathLength + 'px',
                            to:  '0px',
                            easing: Chartist.Svg.Easing.easeOutQuint,
                            fill: 'freeze'
                        }
                    };

                    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                    data.element.attr({
                        'stroke-dashoffset': -pathLength + 'px'
                    });

                    // We can't use guided mode as the animations need to rely on setting begin manually

                    data.element.animate(animationDefinition, true);
                }
            });

            var chart = new Chartist.Pie('#ct-chart5',
                {
                  series: [10, 50 ],
                  labels: ['', '']
              }, {
                  donut: true,
                  donutWidth: 30,
                  startAngle: 300,
                  total: 200,
                    showLabel: false,
                    plugins: [
                        Chartist.plugins.fillDonut({
                            items: [{
                                content: '',
                                position: 'bottom',
                                offsetY : 10,
                                offsetX: -2
                            }, {
                                content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Vegetables</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                            }]
                        })
                    ],
                });

            chart.on('draw', function(data) {
                if(data.type === 'slice' && data.index == 0) {
                    // Get the total path length in order to use for dash array animation
                    var pathLength = data.element._node.getTotalLength();

                    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                    data.element.attr({
                        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                    });

                    // Create animation definition while also assigning an ID to the animation for later sync usage
                    var animationDefinition = {
                        'stroke-dashoffset': {
                            id: 'anim' + data.index,
                            dur: 1200,
                            from: -pathLength + 'px',
                            to:  '0px',
                            easing: Chartist.Svg.Easing.easeOutQuint,
                            fill: 'freeze'
                        }
                    };

                    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                    data.element.attr({
                        'stroke-dashoffset': -pathLength + 'px'
                    });

                    // We can't use guided mode as the animations need to rely on setting begin manually

                    data.element.animate(animationDefinition, true);
                }
            });

            var chart = new Chartist.Pie('#ct-chart6',
                {
                  series: [10, 50 ],
                  labels: ['', '']
              }, {
                  donut: true,
                  donutWidth: 30,
                  startAngle: 300,
                  total: 200,
                    showLabel: false,
                    plugins: [
                        Chartist.plugins.fillDonut({
                            items: [{
                                content: '',
                                position: 'bottom',
                                offsetY : 10,
                                offsetX: -2
                            }, {
                                content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Protein</h5><div id="Meat"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                            }]
                        })
                    ],
                });

            chart.on('draw', function(data) {
                if(data.type === 'slice' && data.index == 0) {
                    // Get the total path length in order to use for dash array animation
                    var pathLength = data.element._node.getTotalLength();

                    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                    data.element.attr({
                        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                    });

                    // Create animation definition while also assigning an ID to the animation for later sync usage
                    var animationDefinition = {
                        'stroke-dashoffset': {
                            id: 'anim' + data.index,
                            dur: 1200,
                            from: -pathLength + 'px',
                            to:  '0px',
                            easing: Chartist.Svg.Easing.easeOutQuint,
                            fill: 'freeze'
                        }
                    };

                    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                    data.element.attr({
                        'stroke-dashoffset': -pathLength + 'px'
                    });

                    // We can't use guided mode as the animations need to rely on setting begin manually

                    data.element.animate(animationDefinition, true);
                }
            });
            var chart = new Chartist.Pie('#ct-chart7',
                {
                  series: [8, 50 ],
                  labels: ['', '']
              }, {
                  donut: true,
                  donutWidth: 30,
                  startAngle: 300,
                  total: 200,
                    showLabel: false,
                    plugins: [
                        Chartist.plugins.fillDonut({
                            items: [{
                                content: '',
                                position: 'bottom',
                                offsetY : 10,
                                offsetX: -2
                            }, {
                                content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Condiments</h5><div id="Sauce"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                            }]
                        })
                    ],
                });

            chart.on('draw', function(data) {
                if(data.type === 'slice' && data.index == 0) {
                    // Get the total path length in order to use for dash array animation
                    var pathLength = data.element._node.getTotalLength();

                    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                    data.element.attr({
                        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                    });

                    // Create animation definition while also assigning an ID to the animation for later sync usage
                    var animationDefinition = {
                        'stroke-dashoffset': {
                            id: 'anim' + data.index,
                            dur: 1200,
                            from: -pathLength + 'px',
                            to:  '0px',
                            easing: Chartist.Svg.Easing.easeOutQuint,
                            fill: 'freeze'
                        }
                    };

                    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                    data.element.attr({
                        'stroke-dashoffset': -pathLength + 'px'
                    });

                    // We can't use guided mode as the animations need to rely on setting begin manually

                    data.element.animate(animationDefinition, true);
                }
            });

        $(".Icons-Container").addClass("ChartContainer2");
  });

$("#Icon3").click(function(){

  $("#foods").css("display", "flex");
 $("#foods").html("<h2>Herbs</h2><hr/><ul><li>1 Cup of Cilantro</li><li>1 Cup of Parsley</li><li>1 Cup of Chives</li><li>1 Cup of Sage</li></ul>");
  $(".Content").addClass("Content2");
  $("#Icon3").addClass("BigIconSmall");
  $("#Icon2").addClass("IconSmall");
  $("#Icon3").addClass("IconSmall");
  $("#Icon4").addClass("IconSmall");
  $("#Icon5").addClass("IconSmall");
  $("#Icon6").addClass("IconSmall");
  $("#Icon7").addClass("IconSmall");

  $("#Icon1").removeClass("BigIconSmall");
  $("#Icon2").removeClass("BigIconSmall");
  $("#Icon4").removeClass("BigIconSmall");
  $("#Icon5").removeClass("BigIconSmall");
  $("#Icon6").removeClass("BigIconSmall");
  $("#Icon7").removeClass("BigIconSmall");

  var chart = new Chartist.Pie('#ct-chart1',
      {
        series: [10, 50 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 300,
        total: 200,
          showLabel: false,
          plugins: [
              Chartist.plugins.fillDonut({
                  items: [{
                      content: '',
                      position: 'bottom',
                      offsetY : 10,
                      offsetX: -2
                  }, {
                      content: '<h5 style="font-size: 1.5em;">Fruits</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                  }]
              })
          ],
      });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart2',
          {
            series: [15, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Dairy</h5><div id="Milk"><h5 style="font-size: 1.5em;">25<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart3',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 2em;">Herbs</h5><div id="Herb"><h5 style="font-size: 2em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart4',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Breads</h5><div id="Bread"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart5',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Vegetables</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart6',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Protein</h5><div id="Meat"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });
      var chart = new Chartist.Pie('#ct-chart7',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Condiments</h5><div id="Sauce"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });
  $(".Icons-Container").addClass("ChartContainer2");
});

$("#Icon4").click(function(){

  $("#foods").css("display", "flex");
     $("#foods").html("<h2>Breads</h2><hr/><ul><li>2 Rolls of Biscuit Dough</li><li>1 Pre-baked Pizza Crust</li><li>1 Container of Cookie Dough</li><li>2 Rolls of Crescent Dough</li><li>1 Package of Buns</li></ul>");
  $(".Content").addClass("Content2");
  $("#Icon4").addClass("BigIconSmall");
  $("#Icon2").addClass("IconSmall");
  $("#Icon3").addClass("IconSmall");
  $("#Icon1").addClass("IconSmall");
  $("#Icon5").addClass("IconSmall");
  $("#Icon6").addClass("IconSmall");
  $("#Icon7").addClass("IconSmall");

  $("#Icon1").removeClass("BigIconSmall");
  $("#Icon2").removeClass("BigIconSmall");
  $("#Icon3").removeClass("BigIconSmall");
  $("#Icon5").removeClass("BigIconSmall");
  $("#Icon6").removeClass("BigIconSmall");
  $("#Icon7").removeClass("BigIconSmall");

    var chart = new Chartist.Pie('#ct-chart1',
        {
          series: [10, 50 ],
          labels: ['', '']
      }, {
          donut: true,
          donutWidth: 30,
          startAngle: 300,
          total: 200,
            showLabel: false,
            plugins: [
                Chartist.plugins.fillDonut({
                    items: [{
                        content: '',
                        position: 'bottom',
                        offsetY : 10,
                        offsetX: -2
                    }, {
                        content: '<h5 style="font-size: 1.5em;">Fruits</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                    }]
                })
            ],
        });

        chart.on('draw', function(data) {
            if(data.type === 'slice' && data.index == 0) {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1200,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                };

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });

                // We can't use guided mode as the animations need to rely on setting begin manually

                data.element.animate(animationDefinition, true);
            }
        });

        var chart = new Chartist.Pie('#ct-chart2',
            {
              series: [15, 50 ],
              labels: ['', '']
          }, {
              donut: true,
              donutWidth: 30,
              startAngle: 300,
              total: 200,
                showLabel: false,
                plugins: [
                    Chartist.plugins.fillDonut({
                        items: [{
                            content: '',
                            position: 'bottom',
                            offsetY : 10,
                            offsetX: -2
                        }, {
                            content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Dairy</h5><div id="Milk"><h5 style="font-size: 1.5em;">25<span class="small">%</span></h5></div>'
                        }]
                    })
                ],
            });

        chart.on('draw', function(data) {
            if(data.type === 'slice' && data.index == 0) {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1200,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                };

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });

                // We can't use guided mode as the animations need to rely on setting begin manually

                data.element.animate(animationDefinition, true);
            }
        });

        var chart = new Chartist.Pie('#ct-chart3',
            {
              series: [8, 50 ],
              labels: ['', '']
          }, {
              donut: true,
              donutWidth: 30,
              startAngle: 300,
              total: 200,
                showLabel: false,
                plugins: [
                    Chartist.plugins.fillDonut({
                        items: [{
                            content: '',
                            position: 'bottom',
                            offsetY : 10,
                            offsetX: -2
                        }, {
                            content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Herbs</h5><div id="Herb"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                        }]
                    })
                ],
            });

        chart.on('draw', function(data) {
            if(data.type === 'slice' && data.index == 0) {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1200,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                };

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });

                // We can't use guided mode as the animations need to rely on setting begin manually

                data.element.animate(animationDefinition, true);
            }
        });

        var chart = new Chartist.Pie('#ct-chart4',
            {
              series: [8, 50 ],
              labels: ['', '']
          }, {
              donut: true,
              donutWidth: 30,
              startAngle: 300,
              total: 200,
                showLabel: false,
                plugins: [
                    Chartist.plugins.fillDonut({
                        items: [{
                            content: '',
                            position: 'bottom',
                            offsetY : 10,
                            offsetX: -2
                        }, {
                            content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 2em;">Breads</h5><div id="Bread"><h5 style="font-size: 2em;">10<span class="small">%</span></h5></div>'
                        }]
                    })
                ],
            });

        chart.on('draw', function(data) {
            if(data.type === 'slice' && data.index == 0) {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1200,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                };

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });

                // We can't use guided mode as the animations need to rely on setting begin manually

                data.element.animate(animationDefinition, true);
            }
        });

        var chart = new Chartist.Pie('#ct-chart5',
            {
              series: [10, 50 ],
              labels: ['', '']
          }, {
              donut: true,
              donutWidth: 30,
              startAngle: 300,
              total: 200,
                showLabel: false,
                plugins: [
                    Chartist.plugins.fillDonut({
                        items: [{
                            content: '',
                            position: 'bottom',
                            offsetY : 10,
                            offsetX: -2
                        }, {
                            content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Vegetables</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                        }]
                    })
                ],
            });

        chart.on('draw', function(data) {
            if(data.type === 'slice' && data.index == 0) {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1200,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                };

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });

                // We can't use guided mode as the animations need to rely on setting begin manually

                data.element.animate(animationDefinition, true);
            }
        });

        var chart = new Chartist.Pie('#ct-chart6',
            {
              series: [10, 50 ],
              labels: ['', '']
          }, {
              donut: true,
              donutWidth: 30,
              startAngle: 300,
              total: 200,
                showLabel: false,
                plugins: [
                    Chartist.plugins.fillDonut({
                        items: [{
                            content: '',
                            position: 'bottom',
                            offsetY : 10,
                            offsetX: -2
                        }, {
                            content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Protein</h5><div id="Meat"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                        }]
                    })
                ],
            });

        chart.on('draw', function(data) {
            if(data.type === 'slice' && data.index == 0) {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1200,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                };

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });

                // We can't use guided mode as the animations need to rely on setting begin manually

                data.element.animate(animationDefinition, true);
            }
        });
        var chart = new Chartist.Pie('#ct-chart7',
            {
              series: [8, 50 ],
              labels: ['', '']
          }, {
              donut: true,
              donutWidth: 30,
              startAngle: 300,
              total: 200,
                showLabel: false,
                plugins: [
                    Chartist.plugins.fillDonut({
                        items: [{
                            content: '',
                            position: 'bottom',
                            offsetY : 10,
                            offsetX: -2
                        }, {
                            content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Condiments</h5><div id="Sauce"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                        }]
                    })
                ],
            });

        chart.on('draw', function(data) {
            if(data.type === 'slice' && data.index == 0) {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1200,
                        from: -pathLength + 'px',
                        to:  '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        fill: 'freeze'
                    }
                };

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });

                // We can't use guided mode as the animations need to rely on setting begin manually

                data.element.animate(animationDefinition, true);
            }
        });

    $(".Icons-Container").addClass("ChartContainer2");
  });

$("#Icon5").click(function(){

  $("#foods").css("display", "flex");
    $("#foods").html("<h2>Vegetables</h2><hr/><ul><li>2 Packages of Carrots</li><li>1 Stalk of Celery</li><li>3 Tomatoes</li><li>3 Red Peppers</li><li>1 Head of Lettuce</li><li>1 Onion</li></ul>");
  $(".Content").addClass("Content2");
  $("#Icon5").addClass("BigIconSmall");
  $("#Icon2").addClass("IconSmall");
  $("#Icon3").addClass("IconSmall");
  $("#Icon1").addClass("IconSmall");
  $("#Icon4").addClass("IconSmall");
  $("#Icon6").addClass("IconSmall");
  $("#Icon7").addClass("IconSmall");

  $("#Icon1").removeClass("BigIconSmall");
  $("#Icon2").removeClass("BigIconSmall");
  $("#Icon3").removeClass("BigIconSmall");
  $("#Icon4").removeClass("BigIconSmall");
  $("#Icon6").removeClass("BigIconSmall");
  $("#Icon7").removeClass("BigIconSmall");


  var chart = new Chartist.Pie('#ct-chart2',
      {
        series: [15, 50 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 300,
        total: 200,
          showLabel: false,
          plugins: [
              Chartist.plugins.fillDonut({
                  items: [{
                      content: '',
                      position: 'bottom',
                      offsetY : 10,
                      offsetX: -2
                  }, {
                      content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Dairy</h5><div id="Milk"><h5 style="font-size: 1.5em;">25<span class="small">%</span></h5></div>'
                  }]
              })
          ],
      });

  chart.on('draw', function(data) {
      if(data.type === 'slice' && data.index == 0) {
          // Get the total path length in order to use for dash array animation
          var pathLength = data.element._node.getTotalLength();

          // Set a dasharray that matches the path length as prerequisite to animate dashoffset
          data.element.attr({
              'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
          });

          // Create animation definition while also assigning an ID to the animation for later sync usage
          var animationDefinition = {
              'stroke-dashoffset': {
                  id: 'anim' + data.index,
                  dur: 1200,
                  from: -pathLength + 'px',
                  to:  '0px',
                  easing: Chartist.Svg.Easing.easeOutQuint,
                  fill: 'freeze'
              }
          };

          // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
          data.element.attr({
              'stroke-dashoffset': -pathLength + 'px'
          });

          // We can't use guided mode as the animations need to rely on setting begin manually

          data.element.animate(animationDefinition, true);
      }
  });

  var chart = new Chartist.Pie('#ct-chart1',
      {
        series: [10, 50 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 300,
        total: 200,
          showLabel: false,
          plugins: [
              Chartist.plugins.fillDonut({
                  items: [{
                      content: '',
                      position: 'bottom',
                      offsetY : 10,
                      offsetX: -2
                  }, {
                      content: '<h5 style="font-size: 1.5em;">Fruits</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                  }]
              })
          ],
      });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart3',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Herbs</h5><div id="Herb"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart4',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Breads</h5><div id="Bread"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart5',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 2em;">Vegetables</h5><div id="Apple"><h5 style="font-size: 2em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart6',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Protein</h5><div id="Meat"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });
      var chart = new Chartist.Pie('#ct-chart7',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Condiments</h5><div id="Sauce"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

$(".Icons-Container").addClass("ChartContainer2");

});

$("#Icon6").click(function(){

  $("#foods").css("display", "flex");
  $("#foods").html("<h2>Protein</h2><hr/><ul><li>1 Pound of Beef</li><li>1 Pound of Chicken</li><li>1 Package of Bologna</li><li>2 Packages of Sausage</li><li>2 Packages of Pepperoni</li><li>2 Packages of Bacon</li></ul>");
  $(".Content").addClass("Content2");
  $("#Icon6").addClass("BigIconSmall");
  $("#Icon2").addClass("IconSmall");
  $("#Icon3").addClass("IconSmall");
  $("#Icon1").addClass("IconSmall");
  $("#Icon5").addClass("IconSmall");
  $("#Icon4").addClass("IconSmall");
  $("#Icon7").addClass("IconSmall");

  $("#Icon1").removeClass("BigIconSmall");
  $("#Icon2").removeClass("BigIconSmall");
  $("#Icon3").removeClass("BigIconSmall");
  $("#Icon5").removeClass("BigIconSmall");
  $("#Icon4").removeClass("BigIconSmall");
  $("#Icon7").removeClass("BigIconSmall");

  var chart = new Chartist.Pie('#ct-chart2',
      {
        series: [15, 50 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 300,
        total: 200,
          showLabel: false,
          plugins: [
              Chartist.plugins.fillDonut({
                  items: [{
                      content: '',
                      position: 'bottom',
                      offsetY : 10,
                      offsetX: -2
                  }, {
                      content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Dairy</h5><div id="Milk"><h5 style="font-size: 1.5em;">25<span class="small">%</span></h5></div>'
                  }]
              })
          ],
      });

  chart.on('draw', function(data) {
      if(data.type === 'slice' && data.index == 0) {
          // Get the total path length in order to use for dash array animation
          var pathLength = data.element._node.getTotalLength();

          // Set a dasharray that matches the path length as prerequisite to animate dashoffset
          data.element.attr({
              'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
          });

          // Create animation definition while also assigning an ID to the animation for later sync usage
          var animationDefinition = {
              'stroke-dashoffset': {
                  id: 'anim' + data.index,
                  dur: 1200,
                  from: -pathLength + 'px',
                  to:  '0px',
                  easing: Chartist.Svg.Easing.easeOutQuint,
                  fill: 'freeze'
              }
          };

          // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
          data.element.attr({
              'stroke-dashoffset': -pathLength + 'px'
          });

          // We can't use guided mode as the animations need to rely on setting begin manually

          data.element.animate(animationDefinition, true);
      }
  });

  var chart = new Chartist.Pie('#ct-chart1',
      {
        series: [10, 50 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 300,
        total: 200,
          showLabel: false,
          plugins: [
              Chartist.plugins.fillDonut({
                  items: [{
                      content: '',
                      position: 'bottom',
                      offsetY : 10,
                      offsetX: -2
                  }, {
                      content: '<h5 style="font-size: 1.5em;">Fruits</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                  }]
              })
          ],
      });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart3',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Herbs</h5><div id="Herb"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart4',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Breads</h5><div id="Bread"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart5',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Vegetables</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart6',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 2em;">Protein</h5><div id="Meat"><h5 style="font-size: 2em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });
      var chart = new Chartist.Pie('#ct-chart7',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Condiments</h5><div id="Sauce"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

$(".Icons-Container").addClass("ChartContainer2");
});

$("#Icon7").click(function(){

  $("#foods").css("display", "flex");
        $("#foods").html("<h2>Condiments</h2><hr/><ul><li>1 Bottle of Ketchup</li><li>1 Bottle of BBQ</li><li>1 Jar of Honey Mustard</li><li>1 Jar of Mayonaise</li><li>1 Bottle of Ranch</li><li>1 Bottle of Sweet Chili Sauce</li></ul>");
  $(".Content").addClass("Content2");
  $("#Icon7").addClass("BigIconSmall");
  $("#Icon2").addClass("IconSmall");
  $("#Icon3").addClass("IconSmall");
  $("#Icon1").addClass("IconSmall");
  $("#Icon5").addClass("IconSmall");
  $("#Icon4").addClass("IconSmall");
  $("#Icon6").addClass("IconSmall");

  $("#Icon1").removeClass("BigIconSmall");
  $("#Icon2").removeClass("BigIconSmall");
  $("#Icon3").removeClass("BigIconSmall");
  $("#Icon5").removeClass("BigIconSmall");
  $("#Icon4").removeClass("BigIconSmall");
  $("#Icon6").removeClass("BigIconSmall");

  var chart = new Chartist.Pie('#ct-chart2',
      {
        series: [15, 50 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 300,
        total: 200,
          showLabel: false,
          plugins: [
              Chartist.plugins.fillDonut({
                  items: [{
                      content: '',
                      position: 'bottom',
                      offsetY : 10,
                      offsetX: -2
                  }, {
                      content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Dairy</h5><div id="Milk"><h5 style="font-size: 1.5em;">25<span class="small">%</span></h5></div>'
                  }]
              })
          ],
      });

  chart.on('draw', function(data) {
      if(data.type === 'slice' && data.index == 0) {
          // Get the total path length in order to use for dash array animation
          var pathLength = data.element._node.getTotalLength();

          // Set a dasharray that matches the path length as prerequisite to animate dashoffset
          data.element.attr({
              'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
          });

          // Create animation definition while also assigning an ID to the animation for later sync usage
          var animationDefinition = {
              'stroke-dashoffset': {
                  id: 'anim' + data.index,
                  dur: 1200,
                  from: -pathLength + 'px',
                  to:  '0px',
                  easing: Chartist.Svg.Easing.easeOutQuint,
                  fill: 'freeze'
              }
          };

          // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
          data.element.attr({
              'stroke-dashoffset': -pathLength + 'px'
          });

          // We can't use guided mode as the animations need to rely on setting begin manually

          data.element.animate(animationDefinition, true);
      }
  });

  var chart = new Chartist.Pie('#ct-chart1',
      {
        series: [10, 50 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 300,
        total: 200,
          showLabel: false,
          plugins: [
              Chartist.plugins.fillDonut({
                  items: [{
                      content: '',
                      position: 'bottom',
                      offsetY : 10,
                      offsetX: -2
                  }, {
                      content: '<h5 style="font-size: 1.5em;">Fruits</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                  }]
              })
          ],
      });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart3',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Herbs</h5><div id="Herb"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart4',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Breads</h5><div id="Bread"><h5 style="font-size: 1.5em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart5',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Vegetables</h5><div id="Apple"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

      var chart = new Chartist.Pie('#ct-chart6',
          {
            series: [10, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 1.5em;">Protein</h5><div id="Meat"><h5 style="font-size: 1.5em;">15<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });
      var chart = new Chartist.Pie('#ct-chart7',
          {
            series: [8, 50 ],
            labels: ['', '']
        }, {
            donut: true,
            donutWidth: 30,
            startAngle: 300,
            total: 200,
              showLabel: false,
              plugins: [
                  Chartist.plugins.fillDonut({
                      items: [{
                          content: '',
                          position: 'bottom',
                          offsetY : 10,
                          offsetX: -2
                      }, {
                          content: '<div style="display:flex; flex-direction:column;"><h5 style="font-size: 2em;">Condiments</h5><div id="Sauce"><h5 style="font-size: 2em;">10<span class="small">%</span></h5></div>'
                      }]
                  })
              ],
          });

      chart.on('draw', function(data) {
          if(data.type === 'slice' && data.index == 0) {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength();

              // Set a dasharray that matches the path length as prerequisite to animate dashoffset
              data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              });

              // Create animation definition while also assigning an ID to the animation for later sync usage
              var animationDefinition = {
                  'stroke-dashoffset': {
                      id: 'anim' + data.index,
                      dur: 1200,
                      from: -pathLength + 'px',
                      to:  '0px',
                      easing: Chartist.Svg.Easing.easeOutQuint,
                      fill: 'freeze'
                  }
              };

              // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
              data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
              });

              // We can't use guided mode as the animations need to rely on setting begin manually

              data.element.animate(animationDefinition, true);
          }
      });

$(".Icons-Container").addClass("ChartContainer2");
});
