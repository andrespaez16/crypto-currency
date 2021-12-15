import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { NavbarCoins } from "../components";
import { BrowserRouter } from "react-router-dom";

test("render content ", () => {
  const routesNav = [{ path: "/exchanges", name: "Exchanges" }];
  const component = render(
    <BrowserRouter>
      <NavbarCoins routesNav={routesNav} />;
    </BrowserRouter>
  );

  console.log(component, "contenido de render");
});
