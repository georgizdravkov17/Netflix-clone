import React from 'react';
import { useContext } from 'react';
import ListsContext from '../../Contexts/listsContext';

const ListsScreen = () => {

    const { lists } = useContext(ListsContext);

    const PrintLists = () => {
        return lists.map(({id, title, type, genre, content}) => (
            <div className="list" key={id}>
                <p>{title}</p>
                <p>{type}</p>
                <p>{genre}</p>
                <p>{content}</p>
            </div>
        ))
    }

  return(
      <div className="lists-screen">
          { lists.length > 0 ? PrintLists() : <h2>No lists!</h2> } 
      </div>
  )
}

export default ListsScreen;