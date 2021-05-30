func1= function () {

  var chart1 = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    theme: "light2",
    
    axisX:{
      valueFormatString: "DD MMM",
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    axisY: {
      title: "",
      includeZero: true,
      crosshair: {
        enabled: true
      }
    },
    toolTip:{
      shared:true
    },  
    legend:{
      cursor:"pointer",
      verticalAlign: "bottom",
      horizontalAlign: "left",
      dockInsidePlotArea: true,
    },
    data: [{
      type: "line",
      showInLegend: true,
      name: "",
      markerType: "square",
      xValueFormatString: "DD MMM",
      color: "red",
      dataPoints: [
        { x: new Date( 2019, 0, 1), y: 250 },
        { x: new Date(2019, 0, 20), y: 150 },
        { x: new Date( 2019, 3, 15), y: 150 },
        { x: new Date( 2019, 5, 20), y: 170 },
        { x: new Date( 2019, 8, 4), y: 230 },
        { x: new Date( 2019, 10, 3), y: 140 },
        { x: new Date( 2019, 11, 15), y: 230 },
        { x: new Date(2019,  12, 31), y: 170 }
      ]
    },
    {
      type: "line",
      showInLegend: true,
      name: "",
      markerType: "square",
      xValueFormatString: "DD MMM",
      color: "purple",
      dataPoints: [
        { x: new Date(2019, 0, 1), y: 210 },
        { x: new Date(2019,2, 17), y: 110 },
        { x: new Date( 2019,3, 1), y: 210 },
        { x: new Date( 2019, 4, 10), y: 200 },
        { x: new Date(2019, 5, 1), y: 120 },
        { x: new Date(2019,6, 20), y: 205 },
        { x: new Date(2019, 7, 29), y: 104 },
        { x: new Date(2019, 9, 1), y: 110 },
        { x: new Date(2019, 11, 1), y: 100 },
        { x: new Date(2019,11, 1), y: 120 },
        { x: new Date(2019,12, 31), y: 110 }
      ]

    },
    {type: "line",
      showInLegend: true,
      name: "",
      markerType: "square",
      xValueFormatString: "DD MMM",
      color: "blue",
      dataPoints: [
        { x: new Date(2019,  0, 10), y: 170 },
        { x: new Date(2019, 2, 1), y: 200 },
        { x: new Date( 2019, 3, 1), y: 170 },
        { x: new Date( 2019, 4, 10), y: 250 },
        { x: new Date(2019, 7, 29), y: 180 },
        { x: new Date(2019, 9, 1), y: 202 },
        { x: new Date(2019, 11, 1), y: 160 },
        { x: new Date(2019, 12, 31), y: 210}
      ]

    }
  ]
  });
  chart1.render();
  
  function toogleDataSeries(e){
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else{
      e.dataSeries.visible = true;
    }
    chart1.render();
  }
  
  }
  func2 = function () {
    
    var chart2 = new CanvasJS.Chart("barContainer2", {
      animationEnabled: true,
      exportEnabled: false,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
     
        axisY: {
          includeZero: true
        },
      data: [{
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
            indexLabelFontSize: 16,
        indexLabelPlacement: "outside",
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 92 },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 71 }
        ]
      }]
    });
    chart2.render();
    
    }
    func3 = function () {

      /*var chart3 = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        title:{
          text: "",
          horizontalAlign: "left"
        },
        data: [{
          type: "doughnut",
          startAngle: 60,
          //innerRadius: 60,
          indexLabelFontSize:"",
          indexLabel: "",
          innerLabel:"$150",
          toolTipContent: " ",
          dataPoints: [
            { y: 67, label: "" },
            /*{ y: 28, label: "Archives" },
            { y: 10, label: "" }
            /*{ y: 7, label: "Drafts"},
            { y: 15, label: "Trash"},
            { y: 6, label: "Spam"}
          ]
        }]
      });*/
      
      
      }
    function start(){
      func1();
      func2();
      func3();
    }
    //window.onload = start;
/*const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: 'Dataset 2',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    }
  ]
};*/