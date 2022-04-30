import React from 'react'
import { useContext, useState } from 'react';
import UsersContext from '../../Contexts/usersContext';
import './UsersScreen.css';

const UsersScreen = () => {

   const { users } = useContext(UsersContext); 

   const PrintUsers = () => {
     return users.map(({id, firstName, lastName, username, email, isAdmin}) => (
       <div className="user" key={id}>
            <p>{firstName}</p> 
            <p>{lastName}</p> 
            <p>{username}</p> 
            <p>{email}</p>
            <p>{isAdmin ? "Admin" : "User"}</p>
       </div>
     ))
   }

  return (
    <div className="users-container">
        { users.length > 0 ? PrintUsers() : <h2>No users!</h2> }
    </div>
  )
}

export default UsersScreen;