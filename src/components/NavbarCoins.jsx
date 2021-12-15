import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavbarCoin = (routesNav) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <h4
          style={{
            margin: "0.5em",
          }}
          className="ml-1"
        >
          Universe Coin Co.
        </h4>
      </Navbar.Brand>

      {routesNav &&
        Object.values(routesNav.routesNav).map((route,index) => {
          return (
            <Nav.Link as={Link} to={route.path} key={index}>
              {route.name}
            </Nav.Link>
          );
        })}
    </Navbar>
  );
};

export default NavbarCoin;
