import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TableCoin } from "../components";
import { BrowserRouter } from "react-router-dom";

test("render content ", () => {
  const headerTable = [
    { name: "name" },
    { name: "Pair" },
    { name: "24h Volume" },
    { name: "Price" },
    { name: "Volume" },
    { name: "Time" },
  ];

  const mock = [
    {
      csupply: "18900721.00",
      id: "90",
      market_cap_usd: "915989918979.26",
      msupply: "21000000",
      name: "Bitcoin",
      nameid: "bitcoin",
      percent_change_1h: "2.51",
      percent_change_7d: "-4.00",
      percent_change_24h: "3.18",
      price_btc: "1.00",
      price_usd: "48463.23",
      rank: 1,
      symbol: "BTC",
      tsupply: "18900721",
      volume24: 24520001525.131447,
      volume24a: 24819826928.058376,
    },
  ];

  const component = render(
    <BrowserRouter>
      <TableCoin titles={headerTable} bodyTable={mock} />;
    </BrowserRouter>
  );

  console.log(component, "contenido de render");
});
