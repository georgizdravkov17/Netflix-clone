import { useState, useEffect, createContext } from 'react';
import { getAllMovies } from '../Core/Services/moviesServices';

const MoviesContext = createContext();

export const MoviesProvider = ({children}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
        .then(response => {
          setMovies(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <MoviesContext.Provider value={{movies}}>{children}</MoviesContext.Provider>
    );
}

export default MoviesContext;