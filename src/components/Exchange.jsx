import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Masters } from "../helpers/master";
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { TableCoin, NavbarCoins } from "../components";
import { Spinner } from "react-bootstrap";

export const Exchange = () => {
  const params = useParams();
  const [infoExchange, setInfoExchange] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});



  const headerTable = [
    { name: "name" },
    { name: "Pair" },
    { name: "24h Volume" },
    { name: "Price" },
    { name: "Volume" },
    { name: "Time" },
  ];
  const routesNav = [{ path: "/", name: "Home" },{ path: "/exchanges", name: "Exchanges" }];

  useEffect(() => {
    getInfoExchange();
  }, []);

  const getInfoExchange = async () => {
    setLoading(true)  
    const master = new Masters();
    const response = await master.getExchangeInfo(params.exchangeId);
    if (response && response.data) {
      await setData(response.data[0])
      await setInfoExchange(response.data.pairs);
    } else {
      setInfoExchange({});
    }
    setLoading(false)
  };

  return (
    <>
     <NavbarCoins routesNav={routesNav} />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Card c>
              <Card.Header as="h5">
                <strong>Name exchange:{data.name === undefined ? '':data.name}</strong>
              </Card.Header>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Col>
                      <p>Start date:{data.date_live}</p>
                    </Col>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12}></Col>
          {/* //marktes */}
          <Col style={{ overflowX: "auto" }}>
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
            <TableCoin titles={headerTable} bodyTable={infoExchange?infoExchange:[]} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Exchange;
