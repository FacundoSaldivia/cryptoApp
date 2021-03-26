import React, { useState, useEffect } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Card from "./Components/Card/Card";
import "./style.css";

function App() {
  const [id, setId] = useState();
  const [coinArrPrice, setCoinArrPrice] = useState([]);
  const [coinChartDate, setCoinChartDate] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [coinName, setCoinName] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const setDate = (date) => {
    let fecha = new Date(date);
    let month = fecha.getUTCMonth() + 1;
    let day = fecha.getUTCDate();
    let newDate = `${day}/${month}`;
    return newDate;
  };

  const getPrices = (id) => {
    getCoinData(`https://api.coingecko.com/api/v3/coins/${id}`);
    getHistoryPrices(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
    );
  };

  async function getHistoryPrices(url) {
    let response = await fetch(url);
    let data = await response.json();
    if (!response.ok) {
    } else {
      saveData(data.prices);
    }
  }
  const saveData = (data) => {
    setCoinChartDate([]);
    setCoinArrPrice([]);
    data.forEach((dato) => {
      setCoinArrPrice((prev) => [...prev, dato[1]]);
      setCoinChartDate((prev) => [...prev, setDate(dato[0])]);
    });
  };

  async function getCoinData(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(response);
    if (input.length === 0) {
      alert("Escribe que moneda deseas buscar (Bitcoin, Ethereum)");
    } else {
      if (!response.ok) {
        alert("moneda invalida");
        setCoinName([]);
        setCurrentPrice([]);
      } else {
        setCoinName(data.name);
        setCurrentPrice(data.market_data.current_price.usd);
      }
    }
  }

  return (
    <>
      <Navbar
        className="navbar"
        id={id}
        setId={setId}
        input={input}
        setInput={setInput}
        getPrices={getPrices}
        getCoinData={getCoinData}
      ></Navbar>
      <Card
        coinName={coinName}
        currentPrice={currentPrice}
        coinArrPrice={coinArrPrice}
        coinChartDate={coinChartDate}
      ></Card>
    </>
  );
}

export default App;
