import React from 'react';
import { useContext } from 'react';
import MoviesContext from '../../Contexts/moviesContext';
import './MoviesScreen.css';

const MoviesScreen = () => {

  const { movies } = useContext(MoviesContext);

  const PrintMovies = () => {
      return movies.map(({id, title, description, imgTitle, imgSm, trailer, video, year,limit,genre, createdAt, updatedAt}) => (
        <div className="movie" key={id}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{imgTitle}</p>
            <p>{imgSm}</p>
            <p>{trailer}</p>
            <p>{video}</p>
            <p>{year}</p>
            <p>{limit}</p>
            <p>{genre}</p>
            <p>{createdAt}</p>
            <p>{updatedAt}</p>
        </div>
      ))
  }


  return (
    <div className="movies-container">
        { movies.length > 0 ? PrintMovies() : <h1>No movies!</h1> }
    </div>
    
  )
}

export default MoviesScreen;