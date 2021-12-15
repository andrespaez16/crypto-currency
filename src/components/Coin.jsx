import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Masters } from "../helpers/master";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
import { TableCoin, NavbarCoins } from "../components";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import currency from "currency.js";

export const Coin = () => {
  const params = useParams();
  const [infoCoin, setInfoCoin] = useState({});
  const [coinValue, setCoinValue] = useState(0);
  const [coinStats, setCoinStats] = useState({
    reddit: {
      avg_active_users: 0,
      subscribers: 0,
    },
    twitter: {
      followers_count: 0,
      status_count: 0,
    },
  });
  const [markets, setMarktest] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const headerTable = [
    { name: "name" },
    { name: "Pair" },
    { name: "24h Volume" },
    { name: "Price" },
    { name: "Volume" },
    { name: "Time" },
  ];

  const routesNav = [
    { path: "/", name: "Home" },
    { path: "/exchanges", name: "Exchange" },
  ];

  useEffect(() => {
    getInfoCoin();
    getALLmarkets();
    getStatsCoin();
  }, []);

      // function that brings all info of coin

  const getInfoCoin = async () => {
    const master = new Masters();
    const response = await master.getCoin(params.coinId);
    if (response && response.data[0]) {
      await setInfoCoin(response.data[0]);
    } else {
      setInfoCoin({});
    }
  };

   // function that brings all info of coinstasts

  const getStatsCoin = async () => {
    const master = new Masters();
    const response = await master.getSocialStats(params.coinId);
    if (response && response.data) {
      await setCoinStats(response.data);
    } else {
      setCoinStats({});
    }
  };

   // function that brings all info of markets

  const getALLmarkets = async () => {
    setLoading(true);
    const master = new Masters();
    const response = await master.getMarkets(params.coinId);
    if (response && response.data) {
      await setMarktest(response.data);
    } else {
      setInfoCoin({});
    }
    setLoading(false);
  };
   // function  of currency
  const currencyMoney = (e) => {
    let result = e.target.value / infoCoin.price_usd;
    if (isNaN(result)) {
      setCoinValue(0);
    } else {
      setCoinValue(result.toFixed(2));
    }
  };

  return (
    <>
      <NavbarCoins routesNav={routesNav} />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Card c>
              <Card.Header as="h5">
                <strong>Rank {infoCoin.rank}</strong>
              </Card.Header>
              <Card.Img variant="top" />
              <Card.Body className="text-center">
                <Card.Title>
                  {infoCoin.name}({infoCoin.symbol})
                </Card.Title>
                <Card.Text>
                  <Container>
                    <Col>
                      <span>{currency(infoCoin.price_usd).format()}</span>
                    </Col>
                    <Col>
                      <span>USD</span>
                      <span>(+{infoCoin.percent_change_24h} %)</span>
                    </Col>
                  </Container>
                </Card.Text>
                <Button variant="primary">Buy</Button>
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text>({infoCoin.symbol})</InputGroup.Text>
                  <FormControl aria-label="coin" disabled value={coinValue} />
                  <InputGroup.Text>$Price</InputGroup.Text>
                  <FormControl
                    aria-label="price"
                    disabled
                    value={infoCoin.price_usd}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>USD</InputGroup.Text>
                  <FormControl
                    aria-label="price"
                    onChange={(e) => currencyMoney(e)}
                  />
                </InputGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col style={{ overflowX: "auto" }}>
                <Table striped bordered hover style={{ overflowX: "auto" }}>
                  <thead>
                    <tr>
                      <th>
                        <strong>Market Cap</strong>
                      </th>
                      <th>
                        <strong>Vol(24H)</strong>
                      </th>
                      <th>
                        <strong>24h Range</strong>
                      </th>
                      <th>
                        <strong>Circulating</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{currency(infoCoin.market_cap_usd).format()}</td>
                      <td>{currency(infoCoin.volume24).format()}</td>
                      <td>{currency(infoCoin.volume24_native).format()}</td>
                      <td>{currency(infoCoin.csupply).format()}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Table striped bordered hover>
              <h5>
                <strong>Reddit Stats</strong>
              </h5>
              <thead></thead>
              <tbody>
                <tr>
                  <td>Average Active Users</td>
                  <td>{coinStats.reddit.avg_active_users}</td>
                </tr>
                <tr>
                  <td>Subscribers</td>
                  <td>{coinStats.reddit.subscribers}</td>
                </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <h5>
                <strong>Twitter Stats</strong>
              </h5>
              <thead></thead>
              <tbody>
                <tr>
                  <td>Followers</td>
                  <td>{coinStats.twitter.followers_count}</td>
                </tr>
                <tr>
                  <td>Status Count</td>
                  <td>{coinStats.twitter.status_count}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
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
            <TableCoin
              titles={headerTable}
              bodyTable={markets}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Coin;
