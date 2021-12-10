import React, { useContext, useEffect, useRef, useState, memo } from "react";
import { apiCallback } from "../services/http.js";
import { Badge, Container } from "react-bootstrap";


function CryptoDetails() {
  const [infoCrypto, setInfoCrypto] = useState({});

  useEffect(() => {
    apiCallback("global/")
      .then((res) => {
        setInfoCrypto(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Badge bg="light" text="dark">
        Cryptocurrencies: {infoCrypto.coins_count}
      </Badge>
      <Badge bg="light" text="dark">
        Markets:{infoCrypto.active_markets}
      </Badge>
      <Badge bg="light" text="dark">
        Market Cap:{infoCrypto.mcap_ath}
      </Badge>
      <Badge bg="light" text="dark">
        Vol:{infoCrypto.total_volume}
      </Badge>
      <Badge bg="light" text="dark">
        BTC Dominance:{infoCrypto.btc_d}
      </Badge>
      <Badge bg="light" text="dark">
        ETH Dominance{infoCrypto.btc_d}
      </Badge>
    </>
  );
}

export default CryptoDetails;
