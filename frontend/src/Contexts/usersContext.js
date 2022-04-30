import React, { useState, useEffect, createContext } from 'react';
import { getAllUsers } from '../Core/Services/usersServices';

const UsersContext = createContext();


export const UsersProvider = ({children}) => {

        const [users, setUsers] = useState([]);

        useEffect(() => {
            getAllUsers()
            .then((response) => {
              setUsers(response.data);
            })
            .catch(err => {
                console.log(err);
            })
        }, [])

    return(
        <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>
    );
}

export default UsersContext;