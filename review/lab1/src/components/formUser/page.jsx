import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useInputHook } from 'lab1/hooks/use-input-hooks'; // Asegúrate de que la ruta a useInputHook sea correcta
import { Container } from "react-bootstrap";

export default function FormUser() {
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const reJustNumbers = /^[0-9]+$/;
  const address_ = /^[\w+\s+]+$/i;
  const em = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [documentsTypeList] = useState([
    { id: 1, name: 'Cédula de Ciudadanía (CC)' },
    { id: 2, name: 'Tarjeta de Identidad (TI)' },
    { id: 3, name: 'Registro Civil (RC)' },
    { id: 4, name: 'Cédula de Extranjería (CE)' },
    { id: 5, name: 'Carné de Identidad (CI)' },
    { id: 6, name: 'Documento Nacional de Identidad (DNI)' }
  ]);

  const { value: emailValue, bind: emailBind, reset: resetEmail } = useInputHook('');
  const { value: firstNameValue, bind: firstNameBind, reset: resetFirstName } = useInputHook('');
  const { value: lastNameValue, bind: lastNameBind, reset: resetLastName } = useInputHook('');
  const { value: documentTypeValue, bind: documentTypeBind, reset: resetDocumentType } = useInputHook('');
  const { value: documentIdValue, bind: documentIdBind, reset: resetDocumentId } = useInputHook('');
  const { value: phoneValue, bind: phoneBind, reset: resetPhone } = useInputHook('');
  const { value: addressValue, bind: addressBind, reset: resetAddress } = useInputHook('');
  const { value: passwordValue, bind: passwordBind, reset: resetPassword } = useInputHook('');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const wordToCapitalize = (words) => {
    if (words) {
      return words
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
    return words;
  };

  const btoa = (word) => {
    if (word) {
      return btoa(word);
    }
    return undefined;
  };

  const validateFields = () => {
    const newErrors = {};

    if (!emailValue || !validateEmail(emailValue)) {
      newErrors.email = 'Email no válido';
    }
    if (!firstNameValue || !validateName(firstNameValue)) {
      newErrors.firstName = 'Nombre no válido';
    }
    if (!lastNameValue || !validateName(lastNameValue)) {
      newErrors.lastName = 'Apellido no válido';
    }
    if (!documentIdValue || !validateDocumentId(documentIdValue)) {
      newErrors.documentId = 'Identificación Inválida';
    }
    if (!phoneValue || !validatePhone(phoneValue)) {
      newErrors.phone = 'Teléfono inválido';
    }
    if (!addressValue || !validateAddress(addressValue)) {
      newErrors.address = 'Dirección inválida';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const getDataFormMyForm = () => {
    const newUser = {
      email: emailValue,
      firstName: wordToCapitalize(firstNameValue),
      lastName: wordToCapitalize(lastNameValue),
      documentType: documentTypeValue,
      documentId: documentIdValue,
      phone: phoneValue,
      address: addressValue,
      password: btoa(passwordValue),
    };

    if (!validateFields()) {
      return;
    }

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Resetear los campos después de enviar
    resetEmail();
    resetFirstName();
    resetLastName();
    resetDocumentType();
    resetDocumentId();
    resetPhone();
    resetAddress();
    resetPassword();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formIsValid = validateFields();
    if (formIsValid) {
      setValidated(true);
      getDataFormMyForm();
    }
  };

  const validateEmail = (email) => {
    return em.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/; // Acepta letras y espacios
    return regex.test(name);
  };

  const validateDocumentId = (documentId) => {
    return reJustNumbers.test(String(documentId));
  };

  const validatePhone = (phone) => {
    return reJustNumbers.test(String(phone));
  };

  const validateAddress = (address) => {
    return address_.test(String(address));
  };

  return (
    <Container>
      <h1 className="d-flex justify-content-center">Registro de usuarios:</h1>
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group className="mb-3" controlId="documentType">
          <Form.Label>Tipo de identificación:</Form.Label>
          <Form.Select id="documentType" name="documentType" aria-label="Default select example" required value={documentTypeValue} {...documentTypeBind}>
            <option value="">Seleccione un tipo de identificación</option>
            {documentsTypeList.map((doc) => (
              <option key={doc.id} value={doc.id}>{doc.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="documentId">
          <Form.Label>Número o ID de identificación:</Form.Label>
          <Form.Control name="documentId" type="number" placeholder="Ingresa tu numero de documento" required {...documentIdBind} isInvalid={!!errors.documentId} />
          <Form.Control.Feedback type="invalid">
            {errors.documentId}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>Nombres:</Form.Label>
          <Form.Control name="firstName" type="text" placeholder="Ingresa tus nombres" required {...firstNameBind} isInvalid={!!errors.firstName} />
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Apellidos:</Form.Label>
          <Form.Control name="lastName" type="text" placeholder="Ingresa tus apellidos" required {...lastNameBind} isInvalid={!!errors.lastName} />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control name="email" type="email" placeholder="Ingresa tu email" required {...emailBind} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Número teléfono:</Form.Label>
          <Form.Control name="phone" type="number" placeholder="Ingresa tu numero telefonico" required {...phoneBind} isInvalid={!!errors.phone} />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Dirección usuario:</Form.Label>
          <Form.Control name="address" type="text" placeholder="Ingresa tu dirección de residencia" required {...addressBind} isInvalid={!!errors.address} />
          <Form.Control.Feedback type="invalid">
            {errors.address}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" required {...passwordBind} />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
      <br />
      <br />
    </Container>
  );
}