import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Coin } from "../components";


test('render content ', () => {
 const component= render(<Coin />)
 console.log(component,'contenido de render')   
})
