import React, { useEffect, useState } from "react";
import { Masters } from "../services/domains/master";
import { useNavigate } from "react-router-dom";
import TableCoin from "../components/Table";
import { Spinner, Button, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const history = useNavigate();
  const [coinsAll, setCoinsAll] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getSelection(count);
  }, [count]);

  const getSelection = async (data) => {
    setLoading(true);
    const master = new Masters();
    const response = await master.getAllcoins(data);
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

  const Next =()=>{
  setCount(count+1)
  }

  const preview =()=>{
    setCount(count-1)
   }
 
  return (
    <Row
      style={{
        overflowX: "auto",
      }}
    >
      <Row className="m-2">
        <Col className="text-center">
          <Button variant="primary" onClick={(e)=>preview (e)}><strong>{'<<'}</strong></Button>
        </Col>
        <Col className="text-center">
          <Button variant="primary" onClick={(e)=>Next(e)}><strong>{'>>'}</strong></Button>
        </Col>
      </Row>
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
      <Col>
        <TableCoin
          titles={headerTable}
          bodyTable={coinsAll}
          dynamic={true}
          click={redirectToCoin}
        />
      </Col>
    </Row>
  );
};
export default HomePage;
