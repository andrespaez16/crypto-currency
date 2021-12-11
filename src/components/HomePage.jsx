import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Masters } from "../services/domains/master";

const HomePage = () => {
  const [coinsAll, setCoinsAll] = useState([]);

  useEffect(() => {
    getSelection();
  }, []);

  const getSelection = async () => {
    const master = new Masters();
    const response = await master.getAllcoins();
    if (response && response.data && response.data.data) {
      setCoinsAll(response.data.data);
    } else {
      setCoinsAll([]);
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
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
          {coinsAll &&
            Object.values(coinsAll).map((coin, index) => {
              return (
                <tr key={index}>
                  <td>{coin.name}</td>
                  <td>{coin.price_usd}</td>
                  <td>{coin.percent_change_1h}</td>
                  <td>{coin.percent_change_24h}</td>
                  <td>{coin.percent_change_7d}</td>
                  <td>{coin.market_cap_usd}</td>
                  <td>{coin.volume24}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
export default HomePage;
