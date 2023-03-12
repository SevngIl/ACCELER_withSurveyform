import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <div id="cropped_logo_acceler">
              <img
                className="logo_acceler"
                src={require("../assets/acceler.png")}
                alt=""
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="vision">Vision</Nav.Link>
              <Nav.Link href="teaminfo">Team Info</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/KEA-ACCELER"><FaGithub size={24}/> Github</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Layout;
