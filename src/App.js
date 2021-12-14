import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Exchanges,
  HomePage,
  CryptoDetails,
  NavbarCoins,
  Coin,
  Exchange,
} from "./components";
import { Container} from "react-bootstrap";

const App = () => (
  <BrowserRouter>
    <>
      <NavbarCoins />
      <Container>
        <CryptoDetails />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Routes>
          <Route path="/exchanges" element={<Exchanges/>} />
        </Routes>
        <Routes>
          <Route path="/exchange/:exchangeId" element={<Exchange/>} />
        </Routes>
      </Container>
    </>
  </BrowserRouter>
);

export default App;
