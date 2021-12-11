import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/logo.png";
import { Navbar, Nav } from "react-bootstrap";

const NavbarCoins = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={icon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav.Link href="/">
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link href="/cryptocurrencies">
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Nav.Link>
        <Nav.Link href="/exchanges">
          <Link to="/exchanges">Exchanges</Link>
        </Nav.Link>
        <Nav.Link href="/news">
          {" "}
          <Link to="/news">News</Link>
        </Nav.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
};

export default NavbarCoins;
