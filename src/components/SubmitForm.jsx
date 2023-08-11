import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function SubmitForm({names,setNames}) {
    
    const [FirstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        // setFirstName(FirstName),
        // setLastName(LastName),
        setSubmitted(true)
        setNames([...names,{FirstName,LastName}])
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);
  };

  function handleOnChangeFirst(e){
    setFirstName(e.target.value)
  };
  
  function handleOnChangeLast(e){
    setLastName(e.target.value)
  }

  console.log({FirstName,LastName})

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            onChange={handleOnChangeFirst}
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            onChange={handleOnChangeLast}
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Button type="submit">Submit form</Button>
      { submitted ? <h1>{FirstName} {LastName}</h1> : ""}
    </Form>
  );
}

export default SubmitForm;