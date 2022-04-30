import { useState, useEffect, createContext} from 'react';
import { getAllLists } from '../Core/Services/listsServices';

const ListsContext = createContext();

export const ListsProvider = ({children}) => {

    const [lists, setLists] = useState();

    useEffect(() => {
        getAllLists()
        .then(response => {
           setLists(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <ListsContext.Provider value={{lists}}>{children}</ListsContext.Provider>
    );
}

export default ListsContext;