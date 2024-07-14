
import { BASE_URL } from '@utils/constant/constant';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
