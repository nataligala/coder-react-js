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
                <Nav>
                  <Nav.Link><Link to="/" className="header__nav-link">Inicio</Link></Nav.Link>
                  <Nav.Link><Link to="tienda/flores" className="header__nav-link">Flores</Link></Nav.Link>
                  <Nav.Link><Link to="tienda/plantas" className="header__nav-link">Plantas</Link></Nav.Link>
                  <Nav.Link><Link to="contacto" className="header__nav-link">Contacto</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>

            <Link to="cart"><CartWidget/></Link>
        </Navbar>

        
    </header>

  );
};
