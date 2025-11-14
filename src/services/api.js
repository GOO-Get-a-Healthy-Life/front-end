import axios from "axios";

// 1. Cria a instância do axios com a URL base do seu backend
const api = axios.create({
  baseURL: "http://localhost:3000/api", // Confira a porta do seu backend!
});

// 2. O "Interceptor" Mágico
// Isso roda ANTES de CADA requisição
api.interceptors.request.use(
  (config) => {
    // Pega o token salvo no localStorage
    const token = localStorage.getItem("authToken");

    if (token) {
      // Se o token existir, adiciona no cabeçalho 'Authorization'
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
