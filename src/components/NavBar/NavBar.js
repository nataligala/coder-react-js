import "./NavBar.scss";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <header className="header">
        <Navbar expand="lg" className="navbar">
            <Container>
            <Navbar.Brand href="#home">
                <a href=" " class="navbar-brand header__link">Flores Babel
                        <img src=" " class="header__img" alt=""/>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#shop">Shop</Nav.Link>
                <Nav.Link href="#novedades">Novedades</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>

  );
};
