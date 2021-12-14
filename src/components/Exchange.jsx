import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Masters } from "../services/domains/master";
import { useNavigate } from "react-router-dom";
import currency from "currency.js";
import { Link } from "react-router-dom";
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
import { Spinner } from "react-bootstrap";

export const Exchange = () => {
  const params = useParams();
  const [infoExchange, setInfoExchange] = useState({});
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

  useEffect(() => {
    getInfoExchange();
  }, []);

  const getInfoExchange = async () => {
    setLoading(true)  
    const master = new Masters();
    const response = await master.getExchangeInfo(params.exchangeId);
    console.log(response.data, "esta es la vuelta");
    if (response && response.data) {
      await setInfoExchange(response.data);
    } else {
      setInfoExchange({});
    }
    setLoading(false)
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={5}>
            <Card c>
              <Card.Header as="h5">
                {/* <strong>Name exchange:{infoExchange[0].name ==!undefined ? infoExchange[0].name:''}</strong> */}
              </Card.Header>
              <Card.Img variant="top" />
              <Card.Body className="text-center">
                <Card.Text>
                  <Container>
                    <Col>
                      {/* <p>Start date:{infoExchange[0].date_live}</p> */}
                      {/* <Link to={infoExchange.url} target={"_blank"}>
                        {infoExchange.url}
                      </Link> */}
                    </Col>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={7}></Col>
          {/* //marktes */}
          <Col>
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
            <TableCoin titles={headerTable} bodyTable={infoExchange.pairs?infoExchange.pairs:[]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Exchange;
// {
//     "base":"BNB",
//     "quote":"USDT",
//     "volume":91368012.29060800373554229736328125,
//     "price":17.194400000000001682565198279917240142822265625,
//     "price_usd":17.194400000000001682565198279917240142822265625,
//     "time":1553469901
//  },

//  name":"BitForex",
//       "base":"BTC",
//       "quote":"USDT",
//       "price":3989.63999999999987267074175179004669189453125,
//       "price_usd":3989.63999999999987267074175179004669189453125,
//       "volume":75308.241800000003422610461711883544921875,
//       "volume_usd":300452773.81494998931884765625,
//       "time":1553386202
