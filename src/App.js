import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Exchanges, HomePage, CryptoDetails, NavbarCoins } from "./components";
import { Container, Navbar, Nav } from "react-bootstrap";

const App = () => (
  <BrowserRouter>
    <>
      <NavbarCoins />
      <div className="routes">
        {/* <CryptoDetails /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  </BrowserRouter>
);

export default App;
