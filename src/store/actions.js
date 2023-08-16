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
  async fetchPrefectureOptions({ commit }) {
    try {
      const response = await axios.get('/prefectures');
      console.log('response.prefecture', response.data.data.data); // Remplacez l'URL par l'URL de votre API
      const prefecturesFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = prefecturesFromAPI.map(prefecture => ({
        label: prefecture.NomPrefecture,
        value: prefecture.NomPrefecture
      }));
      
      commit('SET_PREFECTURE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de régions
    } catch (error) {
      console.error('Erreur lors de la récupération des prefectures:', error);
    }
  },

  async fetchSous_PrefectureOptions({ commit }) {
    try {
      const response = await axios.get('/sous-prefectures');
      console.log('response.sousprefecture', response.data.data.data); // Remplacez l'URL par l'URL de votre API
      const sousprefecturesFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = sousprefecturesFromAPI.map(sousprefecture => ({
        label: sousprefecture.NomSousPrefecture,
        value: sousprefecture.NomSousPrefecture
      }));
      
      commit('SET_SOUS_PREFECTURE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de régions
    } catch (error) {
      console.error('Erreur lors de la récupération des sousprefectures:', error);
    }
  },
  async fetchQuartierOptions({ commit }) {
    try {
      const response = await axios.get('/quartiers');
      console.log('response.sousprefecture', response.data.data.data); // Remplacez l'URL par l'URL de votre API
      const quartierFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = quartierFromAPI.map(quartier => ({
        label: quartier.NomQuartier,
        value: quartier.NomQuartier
      }));
      
      commit('SET_QUARTIER_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de régions
    } catch (error) {
      console.error('Erreur lors de la récupération des quartier:', error);
    }
  },

  async fetchSecteurActiviteOptions({ commit }) {
    try {
      const response = await axios.get('/secteurs-activites'); // Remplacez l'URL par l'URL de votre API
      console.log('activite',response.data.data.data);

      const secteurActiviteFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = secteurActiviteFromAPI.map(secteur => ({
        label: secteur.NomSecteurActivite,
        value: secteur.NomSecteurActivite
      }));

      commit('SET_SECTEUR_ACTIVITE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de secteurs d'activité
    } catch (error) {
      console.error('Erreur lors de la récupération des secteurs d\'activité:', error);
    }
  },
  async fetchSousSecteurOptions({ commit }) {
    try {
      const response = await axios.get('/sous-secteurs'); // Remplacez l'URL par l'URL de votre API
      console.log('soussecteur', response.data.data.data);
      const sousSecteurFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = sousSecteurFromAPI.map(sousSecteur => ({
        label: sousSecteur.NomSousSecteur,
        value: sousSecteur.NomSousSecteur
      }));

      commit('SET_SOUS_SECTEUR_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de sous-secteurs
    } catch (error) {
      console.error('Erreur lors de la récupération des sous-secteurs:', error);
    }
  },
  async fetchStatutJuridiqueOptions({ commit }) {
    try {
      const response = await axios.get('/statut-juridiques'); // Remplacez l'URL par l'URL de votre API
      console.log('statut',response.data.data.data);
      const statutJuridiqueFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = statutJuridiqueFromAPI.map(statutJuridique => ({
        label: statutJuridique.NomStatutJuridique,
        value: statutJuridique.NomStatutJuridique
      }));

      commit('SET_STATUT_JURIDIQUE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de statuts juridiques
    } catch (error) {
      console.error('Erreur lors de la récupération des statuts juridiques:', error);
    }
  },
  async fetchBourseOptions({ commit }) {
    try {
      const response = await axios.get('/bourses'); // Remplacez l'URL par l'URL de votre API
      console.log('rrrr', response.data.data.data);
      const boursesFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = boursesFromAPI.map(bourse => ({
        label: bourse.NomBourse,
        value: bourse.NomBourse
      }));
      
      commit('SET_BOURSE_OPTIONS', options);
    } catch (error) {
      console.error('Erreur lors de la récupération des options de bourses:', error);
    }
  },
  async fetchUserData({ commit }, userId) {
    try {
      const response = await axios.get(`/mpme/${userId}`);
      const userData = response.data.data;
      console.log('rrrrSSSS', response.data.data);

      commit('SET_LOGGED_IN_MPME', userData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
    }
  },

 }
