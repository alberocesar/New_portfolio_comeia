import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-server-ex-a9rd.onrender.com'
});

// https://json-server-ex-a9rd.onrender.com
// http://localhost:5000
export default api;