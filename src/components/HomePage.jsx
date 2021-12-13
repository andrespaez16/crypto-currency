import React, { useEffect, useState } from "react";
import { Masters } from "../services/domains/master";
import { useNavigate } from "react-router-dom";
import TableCoin from "../components/Table";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const history = useNavigate();
  const [coinsAll, setCoinsAll] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSelection();
  }, []);

  const getSelection = async () => {
    setLoading(true);
    const master = new Masters();
    const response = await master.getAllcoins();
    if (response && response.data && response.data.data) {
      setCoinsAll(response.data.data);
    } else {
      setCoinsAll([]);
    }
    setLoading(false);
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
  // top: 0 ,left: 0,right: 0 ,bottom: 0
  console.log(coinsAll, "desde appal");
  return (
    <div>
      {loading && (
        <Spinner
          style={{
            width: "4em",
            height: "4em",
            position: "fixed",
            left: "50%",
            top: "40%",
          }}
          animation="border"
          variant="info"
        />
      )}
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
