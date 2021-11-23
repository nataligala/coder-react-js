import React from "react";
import "./NavBar.css";
import "../CartWidget/CartWidget"
import logoBabel from "../../assets/img_navbar/logo-babel.png";

import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {

    
  return (
    <header className="header">
        <Navbar expand="lg" className="header__nav">
            <Container>
            <Navbar.Brand href="#home">
                <Link to="/"><img src={logoBabel} class="header__img" alt="logo babel"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="tienda/flores">Flores</Nav.Link>
                  <Nav.Link href="tienda/plantas">Plantas</Nav.Link>
                  <Nav.Link href="contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>

            <Link to="cart"><CartWidget/></Link>
        </Navbar>

        
    </header>

  );
};
