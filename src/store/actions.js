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


  fetchCountries: async ({ commit }) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data;
      console.log('countries',countries);
      const sortedCountries = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      const options = sortedCountries.map((country) => ({
        label: country.name.common,
        flag: country.flags.png,
        value: country.name.common,
      }));
      commit('SET_COUNTRY_OPTIONS', options); // Appeler la mutation pour mettre à jour la liste des pays
    } catch (error) {
      console.error('Erreur lors de la récupération des données des pays:', error);
    }
  },
  async fetchRegionOptions({ commit }) {
    try {
      const response = await axios.get('/regions');
      console.log('response.data2', response.data.data.data); // Remplacez l'URL par l'URL de votre API
      const regionsFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = regionsFromAPI.map(region => ({
        label: region.NomRegion        ,
        value: region.NomRegion
      }));
      
      commit('SET_REGION_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de régions
    } catch (error) {
      console.error('Erreur lors de la récupération des régions:', error);
    }
  },

 }
