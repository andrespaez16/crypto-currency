import React, { useContext, useEffect, useRef, useState, memo } from "react";
import { Table } from "react-bootstrap";
import { apiCallback } from "../services/http.js";
const HomePage = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getSelection()
  }, [])

  const getSelection = () =>{
    apiCallback("tickers/")
    .then((res) => {
      console.log(res.data.data, "esta es la data jajajaj")
      setCoins(res.data.data)
      console.log(coins, 'esto es desde coins')
    })
    .catch((error) => {
      console.log(error)
    })
  }

const test =[{csupply: "18888246.00",
id: "90",
market_cap_usd: "897328908107.19",
msupply: "21000000",
name: "Bitcoin",
nameid: "bitcoin",
percent_change_1h: "-1.79",
percent_change_7d: "-16.05",
percent_change_24h: "-1.85",
price_btc: "1.00",
price_usd: "47507.27",
rank: 1,
symbol: "BTC",
tsupply: "18888246",
volume24: 23964001938.059097,
volume24a: 20997235047.073116}]

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>Market cap</th>
            <th>24 Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            <tr>
              <td>{coin.name}</td>
              <td>{coin.price_usd}</td>
              <td>{coin.percent_change_1h}</td>
              <td>{coin.percent_change_24h}</td>
              <td>{coin.percent_change_7d}</td>
              <td>{coin.market_cap_usd}</td>
              <td>{coin.volume24}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default HomePage;
