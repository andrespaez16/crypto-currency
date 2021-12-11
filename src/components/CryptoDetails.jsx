import React, { useEffect, useState} from "react";
import { Masters } from "../services/domains/master";
import { Badge} from "react-bootstrap";

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
