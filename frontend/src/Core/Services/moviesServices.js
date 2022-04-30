import axios from 'axios';
import { apiUrl } from '../../Helpers/constants';

const moviesApiUrl = `${apiUrl}/movies`;

export const getAllMovies = () => {
    return axios.get(moviesApiUrl);
}