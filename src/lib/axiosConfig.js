// axiosConfig.js
import axios from 'axios';

// Créez une instance d'Axios avec la configuration souhaitée
const axiosInstance = axios.create({
  baseURL: 'https://cors-proxy.fringe.zone/https://mpme-guinee.com/bd/public/api',
  timeout: 5000, // Temps d'attente maximal pour une requête en millisecondes (facultatif)
  headers: {
    'Content-Type': 'application/json', // Type de contenu des requêtes
    // Vous pouvez ajouter d'autres en-têtes ici si nécessaire
  },
});

// Intercepteur de requête (facultatif)
axiosInstance.interceptors.request.use(
  (config) => {
    // Vous pouvez ajouter des en-têtes ou des configurations supplémentaires ici
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponse (facultatif)
axiosInstance.interceptors.response.use(
  (response) => {
    // Vous pouvez effectuer des traitements supplémentaires sur la réponse ici
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Exportez l'instance configurée d'Axios
export default axiosInstance;
