import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Exchange } from "../components";
import { BrowserRouter } from "react-router-dom";

test("render content ", () => {
  const component = render(
    <BrowserRouter>
      <Exchange />
    </BrowserRouter>
  );
  console.log(component, "contenido de render");
});
