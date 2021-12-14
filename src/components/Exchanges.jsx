import React, { useEffect, useState } from "react";
import { Masters } from "../services/domains/master";
import { useNavigate } from "react-router-dom";
import { Spinner, Button, Row, Col, Card, Container } from "react-bootstrap";
import currency from 'currency.js';


const Exchanges = () => {
  const history = useNavigate();
  const [exchangesAll, setExchangesAll] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAllExchanges();
  }, []);

  const getAllExchanges = async (data) => {
    setLoading(true);
    const master = new Masters();
    const response = await master.getAllExchanges(data);
    console.log(response.data, "desde exchanges");
    if (response && response.data && response.data) {
      setExchangesAll(response.data);
    } else {
      setExchangesAll([]);
    }
    setLoading(false);
  };

  const redirectToExchange = (coin, e) => {
    setTimeout(() => {
      history(`/coin/${coin.id}`);
    }, 300);
  };


  const redirectMAarketChange =(path)=>{
        window.open(path)
  }
  console.log(exchangesAll, "ahajaja");
  return (
    <Row
      style={{
        overflowX: "auto",
      }}
    >
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
        {" "}
        <Container>
          <Row>
            {exchangesAll &&
              Object.values(exchangesAll).map((name, index) => {
                return (
                  <Col xs={4}>
                    <Card className="mt-2">
                      <Card.Header>
                        <h5>{name.name}</h5>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <p> Pairs:{name.pairs}</p>
                          <span>Volume:{currency(name.volume_usd).format()}</span>
                          <p>Date of begining:{name.date_live}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={(e)=>redirectMAarketChange(name.url,e) }>Go to site</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Col>
    </Row>
  );
};


export default Exchanges;
