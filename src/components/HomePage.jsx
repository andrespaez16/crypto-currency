import React, { useEffect, useState } from "react";
import { Masters } from "../services/domains/master";
import { useNavigate } from "react-router-dom";
import TableCoin from "../components/Table";

const HomePage = () => {
  const history = useNavigate();
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

  const redirectToCoin = (coin, e) => {
    setTimeout(() => {
      history(`/coin/${coin.id}`);
    }, 300);
  };

  const headerTable = [
    { name: "Coin" },
    { name: "Price" },
    { name: "1h" },
    { name: "24h" },
    { name: "7d" },
    { name: "Market cap" },
    { name: "24 Volume" },
  ];
  console.log(coinsAll, "desde appal");
  return (
    <div>
      <TableCoin
        titles={headerTable}
        bodyTable={coinsAll}
        dynamic={true}
        click={redirectToCoin}
      />
    </div>
  );
};
export default HomePage;
