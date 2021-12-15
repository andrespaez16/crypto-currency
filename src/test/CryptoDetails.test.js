import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { CryptoDetails } from "../components";


test('render content ', () => {
 const component= render(<CryptoDetails/>)
 console.log(component,'contenido de render')   
})
