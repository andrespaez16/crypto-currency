import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Masters } from "../services/domains/master";
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
import TableCoin from "../components/Table";

export const Coin = () => {
  const params = useParams();
  const [infoCoin, setInfoCoin] = useState({});
  const [coinStats, setCoinStats] = useState({});
  const [markets, setMarktest] = useState({});

  const headerTable = [
    { name: "name" },  
    { name: "Pair" },
    { name: "24h Volume" },
    { name: "Price" },
    { name: "Volume" },
    { name: "Time" },
  ];

  useEffect(() => {
    getInfoCoin();
    getStatsCoin();
    getALLmarkets() 
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

  const getStatsCoin = async () => {
    const master = new Masters();
    const response = await master.getSocialStats(params.coinId);
    if (response && response.data) {
      console.log(response.data, "desde stats entre");
      await setCoinStats(response.data);
    } else {
      setInfoCoin({});
    }
  };

  const getALLmarkets = async () => {
    const master = new Masters();
    const response = await master.getMarkets(params.coinId);
    if (response && response.data) {
      console.log(response.data, "desde markets");
      await setMarktest(response.data);
    } else {
      setInfoCoin({});
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={5}>
          <Card style={{ width: "20em", height: "20em" }}>
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
                    <span>{infoCoin.price_usd}</span>
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
                <FormControl aria-label="coin" />
                <InputGroup.Text>$Price</InputGroup.Text>
                <FormControl aria-label="price" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>USD</InputGroup.Text>
                <FormControl aria-label="price" />
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={7}>
          <Table striped bordered hover>
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
                <td>{infoCoin.market_cap_usd}</td>
                <td>{infoCoin.volume24}</td>
                <td>{infoCoin.volume24_native}</td>
                <td>{infoCoin.csupply}</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover>
            <h5>
              <strong>Reddit Stats</strong>
            </h5>
            <thead></thead>
            <tbody>
              <tr>
                <td>Average Active Users</td>
                {/* <td>{coinStats.reddit.avg_active_users}</td> */}
              </tr>
              <tr>
                <td>Subscribers</td>
                {/* <td>{coinStats.reddit.subscribers}</td> */}
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
                {/* <td>{coinStats.twitter.followers_count}</td> */}
              </tr>
              <tr>
                <td>Status Count</td>
                {/* <td>{coinStats.twitter.status_count}</td> */}
              </tr>
            </tbody>
          </Table>
        </Col>
        {/* //marktes */}
        <Col>
        <TableCoin
           titles={headerTable}
           bodyTable={markets}
        />
        </Col>
      </Row>
    </Container>
  );
};

export default Coin;


