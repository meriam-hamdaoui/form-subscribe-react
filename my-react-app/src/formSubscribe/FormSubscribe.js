import React, { Component } from 'react'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import './FormSubscribe.css'


class FormSubscribe extends Component {
  render() {
    return (
      <div className="FormSubscribe">
       
        <Form className='subscription'>
            <h1>Subscribe</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text>User Name</InputGroup.Text>
                <FormControl  placeholder='First name' aria-label="First name" />
                <FormControl  placeholder='Last name' aria-label="Last name" />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="you'r adress mail"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            
            </InputGroup>  
           
            <Form.Group className="mb-3" controlId="formBasicPassword">                       
                <Form.Control type="password" placeholder="Password" />
                <br></br>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Label>I agree to the terms and conditions and the privacy policy</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree" />
            </Form.Group>
            <div className='btn-container text-center'>
                <Button className='submit-btn ' size='lg' type="submit">
                    Submit
                </Button>
            </div>
            
        </Form>
      </div>
    )
  }
}


export default FormSubscribe;