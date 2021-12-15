import React, { useEffect, useState } from "react";
import { Masters } from "../helpers/master";
import { useNavigate } from "react-router-dom";
import { TableCoin, NavbarCoins } from "../components";
import { Spinner, Button, Row, Col, Container,Input,InputGroup ,FormControl} from "react-bootstrap";

const HomePage = () => {
  const history = useNavigate();
  const [coinsAll, setCoinsAll] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [filter, setFilter] = useState('');
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

  const Next = () => {
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

  const filterBitcoin =(e)=>{
    console.log(filter.length,'esto es la tamaño')
    if(filter.length === 0){
      console.log('entre')
      setCount(0)
    }{
      setFilter(e.target.value)
      const filtered = coinsAll.filter(coin=>coin.name.toLowerCase().includes(filter))
      setCoinsAll(filtered)
    }
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
                <strong>{"<<"}</strong>
              </Button>
            </Col>
            <Col  xs={6} md={6}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Write the bitcoin"
                  aria-label="bitcoin"
                  aria-describedby="basic-addon1"
                  value={filter}
                  onChange={(e)=>filterBitcoin(e)}
                />
              </InputGroup>
            </Col>
            <Col className="text-center" >
              <Button variant="primary" onClick={(e) => Next(e)}>
                <strong>{">>"}</strong>
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
