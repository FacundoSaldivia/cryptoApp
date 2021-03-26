import React from "react";
import Chart from "./Chart/Chart";
import "./card.css";

function Card({ coinArrPrice, coinChartDate, coinName, currentPrice }) {
  return (
    <div className="card">
      <div>
        <h1 className="coin-name">{`${coinName}: $${currentPrice}`}</h1>
      </div>
      <h1></h1>

      <Chart coinChartDate={coinChartDate} coinArrPrice={coinArrPrice}></Chart>
    </div>
  );
}

export default Card;
