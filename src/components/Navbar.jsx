import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/logo.png";
import { Navbar, Nav, Collapse } from "react-bootstrap";


const NavbarCoins = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <h4  style={{
        margin: "0.5em",
      }}className="ml-1">Universe Coin Colombia</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Collapse id="basic-navbar-nav" className="justify-content-end"> */}
         <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link href="/exchanges">
          <Link to="/exchanges">Exchanges</Link>
        </Nav.Link>
        <Nav.Link href="/news">
          {" "}
          <Link to="/news">News</Link>
        </Nav.Link>
      {/* </Collapse> */}
    </Navbar>
  );
};

export default NavbarCoins;
