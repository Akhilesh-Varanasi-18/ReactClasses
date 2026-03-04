//Bar Chat
import React from 'react'
import ReactECharts from "echarts-for-react";

export const BarC = () => {
  const option = {
    title: { //title --> title of the chart
      text: "Student Data"
    },
    tooltip: {},//tooltip --> when we hover on the chart it will show the data
    xAxis: { //xAxis --> horizontal labels
      data: ["Maths", "Physics", "Chemistry", "English", "Computer", "geometry"]
    },
    yAxis: {},//yAxis --> vertical labels
    series: [ //series --> data to be plotted
      {
        name: "data",
        type: "bar",
        data: [85, 90, 78, 92, 88, 100]
      }
    ]
  };
  return (
    <>
      <h1>BarChart Example</h1>
      <ReactECharts option={option} />
    </>
  )
}



//line chart
export const LineChart = () => {

  const option = {
    title: {
      text: "Website Visitors"
    },

    tooltip: {
      trigger: "axis"
    },

    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri"]
    },

    yAxis: {
      type: "value"
    },

    series: [
      {
        data: [120, 200, 150, 80, 300],
        type: "line",
        smooth: true
      }
    ]
  };

  return (
    <ReactECharts option={option}/>
  );
}


//pie chart
export const PieChart = () => {

  const option = {
    title: {
      text: "Browser Usage",
      left: "center"
    },

    tooltip: {
      trigger: "item"
    },

    series: [
      {
        name: "Browsers",
        type: "pie",
        radius: "40%",

        data: [
          { value: 40, name: "Chrome" },
          { value: 25, name: "Firefox" },
          { value: 20, name: "Edge" },
          { value: 15, name: "Safari" }
        ]
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "400px" }}
    />
  );
}




//Multiple series line chart

export const MultiLineChart = () => {

  const option = {
    title: {
      text: "Sales Comparison",
      textStyle: {
        color: "white"
      }
    },

    tooltip: {
      trigger: "axis"
    },

    legend: {
      data: ["2023", "2024"],
      textStyle: {
        color: "white"
      },
      left: "right"
    },

    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr"]
    },

    yAxis: {
      type: "value"
    },

    series: [
      {
        name: "2023",
        type: "line",
        data: [100, 200, 150, 300]
      },

      {
        name: "2024",
        type: "line",
        data: [120, 250, 180, 350]
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "400px" }}
    />
  );
}
