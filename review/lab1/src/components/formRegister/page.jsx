import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useInputHook } from 'lab1/hooks/use-input-hooks';




export default function FormRegister() {
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const [storedUser, setStoredUser] = useState();
  const navigate= useNavigate(); // usa navigate para la redirección

  const em = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 // const [userLogged, setUserlogged]= useState([]);
 
  let { value: emailValue, bind: emailBind } = useInputHook("");
  let { value: passWordValue, bind: passwordBind } = useInputHook("");

  useEffect(() => {
    // Recupera el valor de localStorage al montar el componente
    const storeData = localStorage.getItem('users');
    if (storeData) {
      setStoredUser(JSON.parse(storeData));
    }
  }, []);


const encodeBase64 = word => {
    let encodedStringBtoA = undefined;
    if (word !== null && word !== undefined && word.length > 0) {
        encodedStringBtoA = btoa(word);
    }
    return encodedStringBtoA;
};
 /*return encodedStringBtoA;
};*/
const handleSubmit = (e) => {
  e.preventDefault();
  let formErrors = {};

  if (!em.test(emailValue)) {
    formErrors.email = ' Email no es válido';
  }

  if (passWordValue.length < 6) {
    formErrors.password = ' La contraseña debe tener al menos 6 caracteres'
  }
 
  if (Object.keys(formErrors).length === 0) {
    const userLogged = storedUser.find(user=> user.email === emailValue && user.password === encodeBase64(passWordValue));
    //console.log(userLogged);
    if (storedUser && userLogged ) {
      setValidated(true);
      console.log('Datos válidos');
     // getDataFormMyUserLogged();
      //Guardar en el localstorage el usuario que se logea
      localStorage.setItem('loggedUser', JSON.stringify(userLogged));
      navigate('/'); // Redirigir al inicio
      //Opcional Mostrar un mensaje de iniicio de sesion satisfactorio (Modal - tiempo 3 segundos sin botones)  ( Ventana emergente - Cuando le de confirmar o aceptar)
      //Redirigirlo a donde quiera. (Home, perfil o productos)
     } else {
        formErrors.general = 'Email o contraseña incorrectos';
        setValidated(false);
      }
    } else {
      setValidated(false);
    }
  
    setErrors(formErrors);
  };
  
 
return (
  <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...emailBind}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...passwordBind}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
             </Form.Control.Feedback>
          </Form.Group>

          {errors.general && (
              <div className="text-danger mb-3">
                {errors.general}
              </div>
          )}

          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);
}




