import Form from 'react-bootstrap/Form';

export default function LoginModalPage(props) {
    return (<>
    

    <Form>
      <Form.Group className="mt-2 mb-3 w-8" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  
    </>)
  }


    