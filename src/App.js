import React from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import { Exchanges, HomePage, Coin, Exchange } from "./components";
import { Container } from "react-bootstrap";

const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/coin/:coinId",
      element: <Coin />,
    },
    {
      path: "/exchanges",
      element: <Exchanges />,
    },
    {
      path: "/exchange/:exchangeId",
      element: <Exchange />,
    },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
