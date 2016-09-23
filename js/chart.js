var data = [
    {
        value: 15,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Fruits"
    },
    {
        value: 40,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Dairy"
    },
    {
        value: 15,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Vegetables"
    },
    {
        value: 20,
        color: "rgb(217,59,206)",
        highlight: "rgb(217,59,206)",
        label: "Protein"
    },
    {
        value: 10,
        color: "rgb(218,226,67)",
        highlight: "rgb(218,226,67)",
        label: "Condiments"
    },
];

var Chartoptions = {

  tooltipTemplate: "<%= label %> <%= value %>%",

  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke : true,

  //String - The colour of each segment stroke
  segmentStrokeColor : "#fff",

  //Number - The width of each segment stroke
  segmentStrokeWidth : 2,

  //Number - Amount of animation steps
  animationSteps : 100,

  // Boolean - Whether to animate the chart
   animation: true,

   // String - Animation easing effect
   // Possible effects are:
   // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
   //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
   //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
   //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
   //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
   //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
   //  easeOutElastic, easeInCubic]
   animationEasing: "easeInOutQuad",

   // Boolean - If we should show the scale at all
   showScale: true,

   // Boolean - If we want to override with a hard coded scale
   scaleOverride: false,

   // ** Required if scaleOverride is true **
   // Number - The number of steps in a hard coded scale
   scaleSteps: null,
   // Number - The value jump in the hard coded scale
   scaleStepWidth: null,
   // Number - The scale starting value
   scaleStartValue: null,

   // String - Colour of the scale line
   scaleLineColor: "rgba(0,0,0,.1)",

   // Number - Pixel width of the scale line
   scaleLineWidth: 1,

   // Interpolated JS string - can access value
   scaleLabel: "<%=value%>",

   // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
   scaleIntegersOnly: true,

   // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
   scaleBeginAtZero: false,

   // String - Scale label font declaration for the scale label
   scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

   // Number - Scale label font size in pixels
   scaleFontSize: 30,

   // String - Scale label font weight style
   scaleFontStyle: "normal",

   // String - Scale label font colour
   scaleFontColor: "#666",

   // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
   maintainAspectRatio: true,

   // String - Tooltip background colour
   tooltipFillColor: "rgba(0,0,0,0.8)",

   // String - Tooltip label font declaration for the scale label
   tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

   // Number - Tooltip label font size in pixels
   tooltipFontSize: 25,

   // String - Tooltip font weight style
   tooltipFontStyle: "bold",

   // String - Tooltip title font colour
   tooltipTitleFontColor: "#fff",

   // Number - pixel width of padding around tooltip text
   tooltipYPadding: 8,

   // Number - pixel width of padding around tooltip text
   tooltipXPadding: 8,

   // Number - Size of the caret on the tooltip
   tooltipCaretSize: 15,

   // Number - Pixel radius of the tooltip border
   tooltipCornerRadius: 6,

   // Number - Pixel offset from point x to tooltip edge
   tooltipXOffset: 10,
};

var ctx = $("#myChart").get(0).getContext("2d");

var Chart = new Chart(ctx).Pie(data, Chartoptions);
//
// $("#myChart").click(
//                       function(evt){
//                           var activePoints = Chart.getSegmentsAtEvent(evt);
//                           var url = "new.html";
//                           window.location.href=url;
//                       }
//                   );

    document.getElementById('legend').innerHTML = Chart.generateLegend();

$(".add").click(function(){

  Chart.addData({
      value: 130,
      color: "#B48EAD",
      highlight: "#C69CBE",
      label: "Purple"
  });

});


 $("#myChart").click(function(evt){

   var Segments = Chart.getSegmentsAtEvent(evt);

   if (Segments[0].label == "Dairy"){
    alert("Dairy");

    // $("#myChart").addClass("smaller");
    // $("#chart").addClass("smaller");
    // $("canvas").addClass("smaller");
    $(".Content").addClass("Content2");
    $(".Chart-Container").addClass("ChartContainer2");
    $(".chart-legend").addClass("chart-legend2");
    $("#foods").css("display", "block");
    $("#foods").html("<h2>Dairy Products in my Fridge</h2><ul><li>2 Gallons of Milk</li><li>1 Container of Sour Cream</li><li>1 Stick of Butter</li><li>4 containers of Yogurt</li></ul>");

  }else if (Segments[0].label == "Fruits"){
     alert("Fruits");
     $(".Content").addClass("Content2");

  }else if (Segments[0].label == "Vegetables"){
      alert("Vegetables");
      $("#smallChart").css("display", "block");
      $("#myChart").css("display", "none");

  }else if (Segments[0].label == "Protein"){
       alert("Protein");
       $("#smallChart").css("display", "block");
       $("#myChart").css("display", "none");

  }else {
          alert("Condiments");
          $("#smallChart").css("display", "block");
          $("#myChart").css("display", "none");
  }
});

var chart = new Chartist.Pie('.ct-chart',
    {
        series: [100, 100],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 20,
        startAngle: 210,
        total: 100,
        showLabel: false,
        plugins: [
            Chartist.plugins.fillDonut({
                items: [{
                    content: '<i class="fa fa-tachometer"></i>',
                    position: 'bottom',
                    offsetY : 10,
                    offsetX: -2
                }, {
                    content: '<h3>100<span class="small">%</span></h3>'
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
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, true);
    }
});



$('#filter-beverages').click(function(e) {

  var Segments = Chart.getSegmentsAtEvent(e);
  featureList.filter(function(item) {

    if (item.values().category == Segments[0].label) {

      return true;

    } else {

      return false;
    }
  });
  return false;
});

var options = {
  valueNames: [ 'Dairy', 'born' ]
};

var userList = new List('foods', options);
