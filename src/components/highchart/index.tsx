'use client'
import React, { useEffect, useRef } from "react";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Chart = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  //   useEffect(() => {
  //     // Create the chart
  //     Highcharts.chart("container", {
  //       title: {
  //         text: "Price History and Future Prediction",
  //       },
  //       xAxis: {
  //         categories: [
  //           "Jan",
  //           "Feb",
  //           "Mar",
  //           "Apr",
  //           "May",
  //           "Jun",
  //           "Jul",
  //           "Aug",
  //           "Sep",
  //           "Oct",
  //           "Nov",
  //           "Dec",
  //         ],
  //       },
  //       yAxis: {
  //         title: {
  //           text: "Price",
  //         },
  //       },
  //       series: [
  //         {
  //           type: "area",
  //           name: "Price History",
  //           data: [10, 20, 30, 25, 35, 45, 40, 50, 55, 60, 65, 70],
  //         },
  //         {
  //           type: "line",
  //           name: "Future Prediction",
  //           data: [null, null, null, null, null, null, null, 75, 80, 85, 90, 95],
  //           lineCurve: 0.2, // Decrease the tension of the line for a more loose appearance
  //         },
  //       ],
  //     });
  //   }, []);

  const chartOption: Options = {
    credits: {
      enabled: false,
    },
    chart: {
      type: "area",
      width: 900,
      backgroundColor: "transparent",
    },
    series: [
      {
        name: "Data",
        type: "area",
        data: [
            {"date": "2022-01-01", "price": 50.00},
            {"date": "2022-02-01", "price": 55.00},
            {"date": "2022-03-01", "price": 48.00},
            {"date": "2022-04-01", "price": 60.00},
            {"date": "2022-05-01", "price": 58.00},
            {"date": "2022-06-01", "price": 65.00},
            {"date": "2022-07-01", "price": 70.00},
            {"date": "2022-08-01", "price": 68.00},
            {"date": "2022-09-01", "price": 75.00},
            {"date": "2022-10-01", "price": 72.00},
            {"date": "2022-11-01", "price": 78.00},
            {"date": "2022-12-01", "price": 80.00},
            {"date": "2023-01-01", "price": 85.00},
            {"date": "2023-02-01", "price": 82.00},
            {"date": "2023-03-01", "price": 90.00},
            {"date": "2023-04-01", "price": 95.00},
            {"date": "2023-05-01", "price": 92.00},
            {"date": "2023-06-01", "price": 100.00},
            {"date": "2023-07-01", "price": 105.00},
            {"date": "2023-08-01", "price": 102.00},
            {"date": "2023-09-01", "price": 110.00},
            {"date": "2023-10-01", "price": 115.00},
            {"date": "2023-11-01", "price": 112.00},
            {"date": "2023-12-01", "price": 120.00},
            {"date": "2024-01-01", "price": 125.00}
          ].map(item=>({x:item.date,y:item.price})),
        marker: {
          enabled: false,
        },
      },
    ],
  };

  return (
    <div id="container">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOption}
        ref={chartRef}
      />
    </div>
  );
};
