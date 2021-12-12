import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Masters } from "../services/domains/master";

export const Coin = () => {
  const params = useParams();
  const [InfoCoin, setInfoCoin] = useState({});
  useEffect(() => {
    getInfoCoin();
  }, []);

  const getInfoCoin = async () => {
    const master = new Masters();
    const response = await master.getCoin(params.coinId);
    if (response && response.data[0]) {
      console.log(response.data[0], "desde coin");
      await setInfoCoin(response.data[0]);
    } else {
      setInfoCoin({});
    }
  };

  return (
    <div>
      <h1>hola desde el coin{InfoCoin.name}</h1>
    </div>
  );
};

export default Coin;
