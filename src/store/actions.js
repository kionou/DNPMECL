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
      const respons = await fetch('https://restcountries.com/v3.1/all');
      const liste = await respons.json();
      commit('SET_COUNTRY', liste);
      console.log('kkkkkk',liste);
      console.log('dataaa',data.data);
      console.log('dataaa',data.last_page);


      // Appeler la mutation pour mettre à jour l'état avec les données récupérées
      commit('SET_ALLMPME', data.data);
      commit('SET_LAST_PAGE', data.last_page);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  },
async fetchDataCountries({commit}){
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const liste = await response.json();
      commit('SET_COUNTRY', liste);
      console.log('kkkkkk',liste);
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des données :', error);
    }
  
  }

 }
