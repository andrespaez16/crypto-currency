import React, { useEffect, useState } from "react";
import { Masters } from "../helpers/master";
import { Badge} from "react-bootstrap";
import currency from 'currency.js';

function CryptoDetails() {
  const [infoCrypto, setInfoCrypto] = useState({});

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const master = new Masters();
    const response = await master.getInfoAllcoins();
    if (response && response.data[0]) {
      await setInfoCrypto(response.data[0]);
    } else {
      setInfoCrypto({});
    }
  };


  return (
    <div className="text-center m-3">
      <Badge bg="light" text="dark">
        Cryptocurrencies: {currency(infoCrypto.coins_count).format()}
      </Badge>
      <Badge bg="light" text="dark">
        Markets:{infoCrypto.active_markets}
      </Badge>
      <Badge bg="light" text="dark">
        Market Cap:{currency(infoCrypto.mcap_ath).format()}
      </Badge>
      <Badge bg="light" text="dark">
        Vol:{currency(infoCrypto.total_volume).format()}
      </Badge>
      <Badge bg="light" text="dark">
        BTC Dominance:{ Math.round(infoCrypto.btc_d)}%
      </Badge>
      <Badge bg="light" text="dark">
        ETH Dominance{infoCrypto.btc_d}%
      </Badge>
    </div>
  );
}

export default CryptoDetails;
