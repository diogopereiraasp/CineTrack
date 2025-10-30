import axios from "axios";
import { TMDB_BASE_URL } from './constants';

export const api = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  },
});

api.interceptors.request.use(
    (res) => res,
    (error) => {
        console.error("Request error (Erro na requisição do TMDB): ", error.response?.data || error.message);
        return Promise.reject(error);
    }
);