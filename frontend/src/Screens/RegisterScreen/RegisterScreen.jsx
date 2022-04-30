import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { registerUser } from '../../Core/Services/authServices';
import { registerUserSchema } from '../../Validations/userValidation';
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../Contexts/usersContext.js';
import './RegisterScreen.css';

const RegisterScreen = () => {

  const navigate = useNavigate();

  const { setUsers } = useContext(UsersContext);

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
    
    const isUserDataValid = await registerUserSchema.isValid(userData);

    if(!isUserDataValid){
      console.log("Invalid user data!");
      return;
    }

    console.log(userData);

    registerUser(userData)
    .then(response => {
      localStorage.setItem("user_token", response.data.token);
      localStorage.setItem("user_info", JSON.stringify(response.data.user));
      setUsers(prevState => {
        return [...prevState, response.data.user ]
      })
      navigate("/users");
    })
    .catch(err => {
      console.log(err.message);
    })

  }

  return (
    <div className="form-container">
        <Form className="form" onSubmit={onFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" name="firstName" placeholder="First name" onChange={onInputChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" name="lastName" placeholder="Last name" onChange={onInputChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Username" onChange={onInputChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" onChange={onInputChange}/>
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

export default RegisterScreen;