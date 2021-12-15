import React, { useEffect, useState } from "react";
import { Masters } from "../helpers/master";
import { useNavigate } from "react-router-dom";
import { TableCoin, NavbarCoins } from "../components";
import {
  Spinner,
  Button,
  Row,
  Col,
  Container,
  Input,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

const HomePage = () => {
  const history = useNavigate();
  const [coinsAll, setCoinsAll] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [filter, setFilter] = useState([]);
  const [coinsList, setCoinsList] = useState([]);
  const headerTable = [
    { name: "Coin" },
    { name: "Price" },
    { name: "1h" },
    { name: "24h" },
    { name: "7d" },
    { name: "Market cap" },
    { name: "24 Volume" },
  ];

  const routesNav = [{ path: "/exchanges", name: "Exchanges" }];

  useEffect(() => {
    getSelection(count);
  }, [count]);

  const getSelection = async (data) => {
    setLoading(true);
    const master = new Masters();
    const response = await master.getAllcoins(data);
    if (response && response.data && response.data.data) {
      setCoinsAll(response.data.data);
      setFilter(response.data.data)
      listCoin(response.data.data);
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

  const next = () => {
    setCount(count + 1);
    setDisabled(false);
  };

  const preview = () => {
    if (count <= 0) {
      setDisabled(true);
    } else {
      setCount(count - 1);
    }
  };

  const listCoin = (coins) => {
    const options = coins.map((coin) => {
      const list = {
        id: coin.id,
        value: coin.name,
        name:coin.name
      };
      return list;
    });
    setCoinsList(options);
  };

  const filterBitcoin = (data) => {
    const temp = filter
    const filtered = temp.filter((coin) => {
      return coin.name.includes(data.target.value);
    });
     setCoinsAll(filtered);
  };

  const reset=()=>{
    setCoinsAll(filter)
  }

  return (
    <>
      <NavbarCoins routesNav={routesNav} />
      <Container>
        <Row>
          <Row className="m-2">
            <Col xs={3} md={3} className="text-center">
              <Button
                variant="primary"
                onClick={(e) => preview(e)}
                disabled={disabled}
              >
                <strong>{"Prev"}</strong>
              </Button>
            </Col>
            <Col xs={3} md={6}>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => filterBitcoin(e)}
              >
                <option>Filter coin</option>
                {coinsList &&
                  coinsList.map((coin) => {
                    return <option value={coin.value}  onChange={()=>filterBitcoin(coin.value)}>{coin.name} </option>;
                  })}
              </Form.Select>
            </Col>
            <Col className="text-center">
              <Button variant="primary" onClick={(e) => reset()}>
                <strong>Reset</strong>
              </Button>
            </Col>
            <Col className="text-center">
              <Button variant="primary" onClick={(e) => next(e)}>
                <strong>{"Next"}</strong>
              </Button>
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
          <Col style={{ overflowX: "auto" }}>
            <TableCoin
              titles={headerTable}
              bodyTable={coinsAll}
              dynamic={true}
              click={redirectToCoin}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
