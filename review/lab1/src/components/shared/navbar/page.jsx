'use client';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavbarHome() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return ( <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">ProducWEB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/contact">Contactenos</Nav.Link>
              <Nav.Link href="#Home">Home</Nav.Link>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" disabled>Creacion </NavDropdown.Item>
                <NavDropdown.Item href="#action4" disabled> Listado   </NavDropdown.Item>
                </NavDropdown>
              <NavDropdown title="Usuarios" id="navbarScrollingDropdown_">
                <NavDropdown.Item href="#action5" disabled>Creacion </NavDropdown.Item>
                <NavDropdown.Item href="#action6" disabled>Consulta </NavDropdown.Item>

                            
              </NavDropdown>
              <Nav.Link href="#">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button href="/user" variant="outline-success">Registrase</Button>
            </Form>
            <Form className="d-flex">
              <Button href="/login" variant="outline-success" >Iniciar Sesión</Button>
              
              </Form>         
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
        
    )
}