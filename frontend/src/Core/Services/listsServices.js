import axios from 'axios';
import { apiUrl } from '../../Helpers/constants';

const listsApiUrl = `${apiUrl}/lists`;

export const getAllLists = () => {
    return axios.get(listsApiUrl);
}