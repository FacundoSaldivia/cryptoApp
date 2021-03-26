import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
function Chart({ coinArrPrice, coinChartDate }) {
  const [data, setData] = useState({});

  const chart = () => {
    setData({
      labels: coinChartDate,
      datasets: [
        {
          lineTension: 0,
          label: `PRECIO EN LOS ULTIMOS ${coinArrPrice.length} DIAS`,
          data: coinArrPrice,
          backgroundColor: ["rgba(233, 69, 96, .1)"],
          borderWidth: 3,
          width: "1200px",
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, [coinArrPrice]);
  return (
    <>
      <Line data={data}></Line>
    </>
  );
}

export default Chart;
