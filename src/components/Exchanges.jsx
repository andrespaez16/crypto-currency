import React, { useEffect, useState } from "react";
import { Masters } from "../helpers/master";
import { useNavigate } from "react-router-dom";
import { Spinner, Button, Row, Col, Card, Container} from "react-bootstrap";
import currency from "currency.js";
import { NavbarCoins } from "../components";

const Exchanges = () => {
  const history = useNavigate();
  const [exchangesAll, setExchangesAll] = useState([]);
  const [loading, setLoading] = useState(false);
  const routesNav = [{ path: "/", name: "Home" }];

  useEffect(() => {
    getAllExchanges();
  }, []);

  const getAllExchanges = async (data) => {
    setLoading(true);
    const master = new Masters();
    const response = await master.getAllExchanges(data);
    if (response && response.data && response.data) {
      setExchangesAll(response.data);
    } else {
      setExchangesAll([]);
    }
    setLoading(false);
  };

  const redirectToExchange = (exchange, e) => {
    setTimeout(() => {
      history(`/exchange/${exchange}`);
    }, 300);
  };

  const redirectMarketChange = (path) => {
    window.open(path);
  };



  
  return (
    <>
      <NavbarCoins routesNav={routesNav} />
      <Container
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
          <Container>
            <Row>
              {exchangesAll &&
                Object.values(exchangesAll).map((name, index) => {
                  return (
                    <Col xs={12} md={4}>
                      <Card
                        key={index}
                        className="mt-2"
                        onClick={
                          name.pairs === 0
                            ? ""
                            : (e) => redirectToExchange(name.id, e)
                        }
                      >
                        <Card.Header>
                          <h5>{name.name}</h5>
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            <p>Pairs:{name.pairs}</p>
                            <p>Date of begining:{name.date_live}</p>
                            <span>
                              Volume:{currency(name.volume_usd).format()}
                            </span>
                          </Card.Text>
                          <Button
                            variant="primary"
                            onClick={(e) => redirectMarketChange(name.url, e)}
                          >
                            Go to site
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </Col>
      </Container>
    </>
  );
};

export default Exchanges;
