import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Coin } from "../components";
import { BrowserRouter} from "react-router-dom";


test('render content ', () => {
    <BrowserRouter>
     <Coin/>
    </BrowserRouter>
 console.log(component,'contenido de render')   
})
