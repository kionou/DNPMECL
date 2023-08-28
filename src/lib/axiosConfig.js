// axiosConfig.js
import axios from 'axios';
import store from '@/store'

// Créez une instance d'Axios avec la configuration souhaitée
// https://cors-proxy.fringe.zone/
const axiosInstance = axios.create({
  baseURL: ' https://cors-proxy.fringe.zone/https://mpme-guinee.com/bd/public/api/',
  headers: {
    // 'Content-Type': 'application/json', 
    // 'Content-Type': 'multipart/form-data',
    // Type de contenu des requêtes
    // Vous pouvez ajouter d'autres en-têtes ici si nécessaire
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = store.getters['user/loggedInUser'].access_token;
//     console.log(token);
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.log('eeeeezzz');
//     return Promise.reject(error);
//   }
// );

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
