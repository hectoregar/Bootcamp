"use client"
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import LoginModal from 'lab1/components/login-modal/page';
import { useState } from "react";
import FormRegister from "lab1/components/formRegister/page";


export default function LoginPage({ show=true, handleClose }) {
  const login = () => {
    console.log('Inicio de sesion');
  }
  return (
    <div className=" mt-3 w-15 h-20 p-2 mb-1 border rounded">
      <div className= "container d-flex justify-content-center"></div>
    <FormRegister/>
    </div>
  );
};