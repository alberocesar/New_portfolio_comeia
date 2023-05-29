import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-server-ex-a9rd.onrender.com'
});

export default api;