import {Navbar, Container,Nav, NavDropdown} from "react-bootstrap"

const NavBar = () => {  
    return (
        <Navbar bg="" expand="lg" className="navbar-dark navbar-custom">
            <Container fluid>
                <Navbar.Brand href="#home">.../portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="navbar-nav">
                        <Nav.Link href="#profile">.../Home </Nav.Link>
                        <Nav.Link href="#about">.../About </Nav.Link>
                        <Nav.Link href="#portfolio">.../Portfolio </Nav.Link>
                        <Nav.Link href="#contact">.../Contact </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;