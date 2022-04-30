import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Core/Services/authServices.js';
import { loginUserSchema } from '../../Validations/userValidation.js';
import { Button, Form, FormControl } from 'react-bootstrap';
import './LoginScreen.css';

const LoginScreen = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const onInputChange = (event) => {
    event.persist();
    setUserData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const isUserDataValid = await loginUserSchema.isValid(userData);

    if(!isUserDataValid){
      console.log("Invalid user data!");
      return
    }

    loginUser(userData)
    .then(response => {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("user_token", response.data.token);
      navigate("/");
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  return (
    <div className="form-container">
       <Form className="form" onSubmit={onFormSubmit}>
       <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" onChange={onInputChange} />
        </Form.Group>
       <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange={onInputChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
       </Form>
    </div>
  )
}

export default LoginScreen;