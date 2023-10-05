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
  async fetchMpmeData({ commit }) {
    try {
      const response = await axios.get('/mpme');
      const data = response.data.data;
      console.log('Données récupérées de mpme :', data);

      commit('SET_MPME_DATA', data); // Appel de la mutation pour mettre à jour le state
    } catch (error) {
      console.error('Erreur lors de la récupération des données de /mpme:', error);
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
      console.log('response.data2Region', response.data.data.data); // Remplacez l'URL par l'URL de votre API
      const regionsFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect   CodeRegion
      const options = regionsFromAPI.map(region => ({
        label: region.NomRegion        ,
        value: region.CodeRegion
      }));
      
      commit('SET_REGION_OPTIONS', options);
      commit('SET_REGION2_OPTIONS', regionsFromAPI); // Appeler la mutation pour mettre à jour les options de régions
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
        value: sousprefecture.CodeSousPrefecture
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
        value: quartier.CodeQuartier
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
        value: secteur.CodeSecteurActivite
      }));

      commit('SET_SECTEUR_ACTIVITE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de secteurs d'activité
      commit('SET_SECTEUR_ACTIVITE2_OPTIONS', secteurActiviteFromAPI); // Appeler la mutation pour mettre à jour les options de secteurs d'activité

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
        value: sousSecteur.CodeSousecteur
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
        value: statutJuridique.CodeStatutJuridique,
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
        value: bourse.CodeBourse
      }));
      
      commit('SET_BOURSE_OPTIONS', options);
    } catch (error) {
      console.error('Erreur lors de la récupération des options de bourses:', error);
    }
  },
  async fetchSousDocOptions({ commit }) {
    try {
      const response = await axios.get('/sous-categories-document'); // Remplacez l'URL par l'URL de votre API
      console.log('sousdoc', response.data.data.data);
      const sousdocFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = sousdocFromAPI.map(doc => ({
        label: doc.NomSousCategorie,
        value: doc.CodeSousCategorie
      }));
      
      commit('SET_SOUS_DOC_OPTIONS', options);
    } catch (error) {
      console.error('Erreur lors de la récupération des options de sous doc:', error);
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
  

  async fetchCategoriesData({ commit }) {
    try {
      const response = await axios.get('/categories-document');
      const data = response.data; 
      console.log('SET_CATEGORIES_DATA', data);// Assurez-vous que la structure des données est correcte
      commit('SET_CATEGORIES_DATA', data);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories de documents :', error);
    }
  },

  async fetchSousCategoriesData({ commit }) {
    try {
      const response = await axios.get('/sous-categories-document');
      const data = response.data;
        console.log('SET_SOUS_CATEGORIES_DATA', data);
       // Assurez-vous que la structure des données est correcte
      commit('SET_SOUS_CATEGORIES_DATA', data);
    } catch (error) {
      console.error('Erreur lors de la récupération des sous-catégories de documents :', error);
    }
  },
  async fetchPubliqueData({ commit }) {
    try {
      const response = await axios.get('/documents-administrative/statut/publique');
      const data = response.data.data;
      console.log('Données pour /documents-administrative/statut/publique :', data);
      // Assurez-vous que la structure des données est correcte
      commit('SET_PUBLIQUE_DATA', data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données publique :', error);
    }
  },
  async fetchTotalEmploisFemmeAndTotalMpme({ commit }) {
    try {
      const [emploisFemmeResponse, totalMpmeResponse] = await Promise.all([
        axios.get('/mpme/statistics/total-emplois-salaries-femme'),
        axios.get('/mpme/statistics/total-mpme'),
        
      ]);

      const totalEmploisFemme = emploisFemmeResponse.data.data;
      const totalMpme = totalMpmeResponse.data.data;

      console.log('totalEmploisFemme:', totalEmploisFemme);
      console.log('totalMpme:', totalMpme);

      commit('SET_TOTAL_EMPLOIS_FEMME', totalEmploisFemme);
      commit('SET_TOTAL_MPME', totalMpme);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchTypeCartesData({ commit }) {
    try {
      const response = await axios.get('/type-cartes');
      const data = response.data.data;
      const options = data.map(doc => ({
        label: doc,
        value: doc
      }));
      console.log('Type Cartes Data:', options);
      commit('SET_TYPE_CARTES_DATA', options);
    } catch (error) {
      console.error('Erreur lors de la récupération des types de cartes :', error);
    }
  },
  
  async fetchTypeComptabilitesData({ commit }) {
    try {
      const response = await axios.get('/type-comptabilites');
      const data = response.data.data;
      const options = data.map(doc => ({
        label: doc,
        value: doc
      }));
      console.log('Type Comptabilités Data:', options);
      commit('SET_TYPE_COMPTABILITES_DATA', options);
    } catch (error) {
      console.error('Erreur lors de la récupération des types de comptabilités :', error);
    }
  },

  async fetchTypeDemandeData({ commit }) {
    try {
      const response = await axios.get('/gestion-des-demandes/liste-types');
      const data = response.data.data;
      const options = data.map(demande => ({
        label: demande,
        value: demande
      }));
      console.log('Type Demande Data:', options);
      commit('SET_TYPE_DEMANDE_DATA', options);
    } catch (error) {
      console.error('Erreur lors de la récupération des types de Demande :', error);
    }
  },

  async fetchActualites({ commit }) {
    try {
      const response = await axios.get('/actualites',{ params : {statut: true }});
      const data = response.data.data.data;
      // const ActualitesFiltres = data.filter(partenaire => partenaire.publish === 1);       
      commit('SET_ACTUALITES', data); // Mutation pour stocker les actualités dans le state
    } catch (error) {
      console.error('Erreur lors de la récupération des actualités :', error);
    }
  },
  async fetchPartenairesData({ commit }) {
    try {
      const response = await axios.get('/partenaires');
      const data = response.data.data.data;   
      // Filtrer les partenaires avec un statut de 1
      const partenairesFiltres = data.filter(partenaire => partenaire.StatutPartenaire === "1"); 
      console.log('SET_PARTENAIRES_DATA', partenairesFiltres);
      // Assurez-vous que la structure des données est correcte
      commit('SET_PARTENAIRES_DATA', partenairesFiltres);
    } catch (error) {
      console.error('Erreur lors de la récupération des partenaires :', error);
    }
  },

  async fetchRegimes({ commit }) {
    try {
      const response = await axios.get('/regimes'); // Remplacez l'URL par l'URL de votre API
      console.log('response.regimes', response.data.data.data);
      const regimesFromAPI = response.data.data.data;
  
      commit('SET_REGIMES', regimesFromAPI); // Utilisez une mutation pour stocker les données dans le store Vuex
    } catch (error) {
      console.error('Erreur lors de la récupération des régimes :', error);
    }
  },
  async fetchTypesGestions({ commit }) {
    try {
      const response = await axios.get('/types-gestions');
      console.log('typesGestionsFromAPI',response);
      const typesGestionsFromAPI = response.data.data.data;

      // Formatez les données de l'API en options appropriées si nécessaire

      commit('SET_TYPES_GESTIONS', typesGestionsFromAPI);
    } catch (error) {
      console.error('Erreur lors de la récupération des types de gestions:', error);
    }
  },

  async fetchTypesContribuables({ commit }) {
    try {
      const response = await axios.get('/types-contribuables');
      console.log('typesContribuablesFromAPI',response);

      const typesContribuablesFromAPI = response.data.data.data;

      // Formatez les données de l'API en options appropriées si nécessaire

      commit('SET_TYPES_CONTRIBUABLES', typesContribuablesFromAPI);
    } catch (error) {
      console.error('Erreur lors de la récupération des types de contribuables:', error);
    }
  },
  


 }
