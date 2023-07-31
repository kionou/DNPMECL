import axios from '@/lib/axiosConfig.js'
 
 export default{
async fetchDataFromAPI({ commit }) {
  let endpoints = [
    '/mpme/',
    '/regions/',    
];
    try {
      const [mpmeResponse, regionsResponse] = await Promise.all( endpoints.map((endpoint) => axios.get(endpoint)));

      const mpmeData = mpmeResponse.data.data.data;
      const regionsData = regionsResponse.data.data.data;

      console.log('mpmeData:', mpmeData);
      console.log('regionsData:', regionsData);

     
      commit('SET_ALLMPME', mpmeData)
    
    } catch (error) {
      console.log(error);
    }
  },
  async fetchDataFromAPI({ commit }, page) {
    try {
      const response = await axios.get(`/mpme?page=${page}`, { timeout: 10000 })
      const data = await response.data.data;
      console.log('dataaa',data.data);
      console.log('dataaa',data.last_page);


      // Appeler la mutation pour mettre à jour l'état avec les données récupérées
      commit('SET_ALLMPME', data.data);
      commit('SET_LAST_PAGE', data.last_page);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  },

 }
