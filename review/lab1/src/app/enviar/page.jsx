"use client";
import {useState} from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import EnviarModal from "lab1/components/enviar_modal/page";

export default function EnviarPage() {
    const [show, setShow] = useState(false);  
  
    const login = () => setShow(!show);
  
    return (
      <> 
        
    </>
    );
}