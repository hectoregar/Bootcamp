"use client";

import {useState} from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import NavbarHome from "lab1/components/shared/navbar";
import LoginModal from "lab1/componentsC/login-modal/page";

export default function LoginPage() {
  const [show, setShow] = useState(false);  

  const login = () => setShow(!show);

  return (
    <Container>
    <Row>
      <NavbarHome/>
    </Row>
      <Form>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={login}>Ingresar</Button>
          </Col>
        </Row>
      </Form>

    <LoginModal show={show}/>
  </Container>);
}