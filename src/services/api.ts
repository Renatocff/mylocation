import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    validateStatus(status) {
        return status >= 200 && status < 400;
    },
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err?.response?.status === 401) {
            throw new Error(`${err.config.url} not authorized`);
        }
    }
);

export default api;
