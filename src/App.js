import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Exchanges, HomePage, CryptoDetails, Navbar } from "./components";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <CryptoDetails />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
