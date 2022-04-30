import axios from 'axios';
import { apiUrl } from '../../Helpers/constants';

const usersApiUrl = `${apiUrl}/users`;

export const getAllUsers = () => {
    return axios.get(usersApiUrl);
}