import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar({ input, setInput, id, setId, getPrices, getCoinData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setId(input.toLowerCase());
    getPrices(input.toLowerCase());
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            className="navbar"
            type="text"
            value={input}
            placeholder="Bitcoin, Ethereum"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </>
  );
}

export default Navbar;
