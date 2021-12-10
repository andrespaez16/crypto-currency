import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Exchanges, HomePage, CryptoDetails, NavbarCoins } from "./components";
import { Container, Navbar, Nav } from "react-bootstrap";

const App = () => (
  <BrowserRouter>
    <>
      <NavbarCoins />
      <Container>
        <CryptoDetails />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </>
  </BrowserRouter>
);

export default App;
