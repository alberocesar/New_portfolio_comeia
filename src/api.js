import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

// https://json-server-ex-a9rd.onrender.com

export default api;