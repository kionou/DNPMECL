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

 

     
      commit('SET_ALLMPME', mpmeData)


    
    } catch (error) {
     
    }
  },
  async fetchMpmeData({ commit }) {
    try {
      const response = await axios.get('/mpme');
      const data = response.data.data;
   

      commit('SET_MPME_DATA', data); // Appel de la mutation pour mettre à jour le state
    } catch (error) {
      
    }
  },

  fetchCountries: async ({ commit }) => {
    try {
      // Ajoutez le paramètre "lang=fr" pour demander les données en français
      const response = await axios.get('https://restcountries.com/v3.1/all?lang=fr');
      const countries = response.data;
    
      const sortedCountries = countries.sort((a, b) => a.translations.fra.common.localeCompare(b.translations.fra.common));
      const options = sortedCountries.map((country) => ({
        label:country.translations.fra.common,
        flag: country.flags.png,
        value: country.translations.fra.common,
      }));
      commit('SET_COUNTRY_OPTIONS', options); // Appeler la mutation pour mettre à jour la liste des pays
    } catch (error) {
     
    }
  },
  
  async fetchRegionOptions({ commit }) {
    try {
      const response = await axios.get('/regions');
       // Remplacez l'URL par l'URL de votre API
      const regionsFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect   CodeRegion
      const options = regionsFromAPI.map(region => ({
        label: region.NomRegion        ,
        value: region.CodeRegion
      }));
      
      commit('SET_REGION_OPTIONS', options);
      commit('SET_REGION2_OPTIONS', regionsFromAPI); // Appeler la mutation pour mettre à jour les options de régions
    } catch (error) {
     
    }
  },
  async fetchPrefectureOptions({ commit }) {
    try {
      const response = await axios.get('/prefectures-sans-pagination');
      // Remplacez l'URL par l'URL de votre API
      const prefecturesFromAPI = response.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = prefecturesFromAPI.map(prefecture => ({
        label: prefecture.NomPrefecture,
        value: prefecture.CodePrefecture,
        code:  prefecture.CodeRegion
      }));
      
      commit('SET_PREFECTURE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de régions
    } catch (error) {
     
    }
  },

  async fetchSous_PrefectureOptions({ commit }) {
    try {
      const response = await axios.get('/sous-prefectures-no-pagination');
      // Remplacez l'URL par l'URL de votre API
      const sousprefecturesFromAPI = response.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = sousprefecturesFromAPI.map(sousprefecture => ({
        label: sousprefecture.NomSousPrefecture,
        value: sousprefecture.CodeSousPrefecture,
        code:sousprefecture.CodePrefecture
      }));
      
      commit('SET_SOUS_PREFECTURE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de régions
    } catch (error) {
     
    }
  },
  async fetchQuartierOptions({ commit }) {
    try {
      const response = await axios.get('/quartiers');
       // Remplacez l'URL par l'URL de votre API
      const quartierFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = quartierFromAPI.map(quartier => ({
        label: quartier.NomQuartier,
        value: quartier.CodeQuartier
      }));
      
      commit('SET_QUARTIER_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de régions
    } catch (error) {
   
    }
  },

  async fetchSecteurActiviteOptions({ commit }) {
    try {
      const response = await axios.get('/secteurs-activites'); // Remplacez l'URL par l'URL de votre API
     

      const secteurActiviteFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = secteurActiviteFromAPI.map(secteur => ({
        label: secteur.NomSecteurActivite,
        value: secteur.CodeSecteurActivite
      }));

      commit('SET_SECTEUR_ACTIVITE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de secteurs d'activité
      commit('SET_SECTEUR_ACTIVITE2_OPTIONS', secteurActiviteFromAPI); // Appeler la mutation pour mettre à jour les options de secteurs d'activité

    } catch (error) {
    
    }
  },
  async fetchSousSecteurOptions({ commit }) {
    try {
      const response = await axios.get('/sous-secteurs/sans-pagination'); // Remplacez l'URL par l'URL de votre API
    
      const sousSecteurFromAPI = response.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = sousSecteurFromAPI.map(sousSecteur => ({
        label: sousSecteur.NomSousSecteur,
        value: sousSecteur.CodeSousecteur
      }));

      commit('SET_SOUS_SECTEUR_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de sous-secteurs
    } catch (error) {

    }
  },
  async fetchStatutJuridiqueOptions({ commit }) {
    try {
      const response = await axios.get('/statut-juridiques'); // Remplacez l'URL par l'URL de votre API

      const statutJuridiqueFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = statutJuridiqueFromAPI.map(statutJuridique => ({
        label: statutJuridique.NomStatutJuridique,
        value: statutJuridique.CodeStatutJuridique,
      }));

      commit('SET_STATUT_JURIDIQUE_OPTIONS', options); // Appeler la mutation pour mettre à jour les options de statuts juridiques
    } catch (error) {
      
    }
  },
  async fetchBourseOptions({ commit }) {
    try {
      const response = await axios.get('/bourses'); // Remplacez l'URL par l'URL de votre API
    
      const boursesFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = boursesFromAPI.map(bourse => ({
        label: bourse.NomBourse,
        value: bourse.CodeBourse
      }));
      
      commit('SET_BOURSE_OPTIONS', options);
    } catch (error) {
  
    }
  },
  async fetchSousDocOptions({ commit } , page) {
    try {
      const response = await axios.get(`/sous-categories-document?page=${page}`); // Remplacez l'URL par l'URL de votre API
    
      const sousdocFromAPI = response.data.data.data;

      // Formater les données de l'API en options pour MazSelect
      const options = sousdocFromAPI.map(doc => ({
        label: doc.NomSousCategorie,
        value: doc.CodeSousCategorie
      }));
      
      commit('SET_SOUS_DOC_OPTIONS', options);
    } catch (error) {
     
    }
  },
  async fetchUserData({ commit }, userId) {
    try {
      const response = await axios.get(`/mpme/${userId}`);
      const userData = response.data.data;
    

      commit('SET_LOGGED_IN_MPME', userData);
    } catch (error) {
      
    }
  },
  

  async fetchCategoriesData({ commit }) {
    try {
      const response = await axios.get('/categories-document');
      const data = response.data; 
     // Assurez-vous que la structure des données est correcte
      commit('SET_CATEGORIES_DATA', data);
    } catch (error) {
      
    }
  },

  async fetchSousCategoriesData({ commit }) {
    try {
      const response = await axios.get('/sous-categories-document');
      const data = response.data;
    
    
      commit('SET_SOUS_CATEGORIES_DATA', data);
    } catch (error) {
     
    }
  },
  async fetchPubliqueData({ commit }) {
    try {
      const response = await axios.get('/documents-administrative/statut/publique');
      const data = response.data.data;
    
      commit('SET_PUBLIQUE_DATA', data);
    } catch (error) {

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



      commit('SET_TOTAL_EMPLOIS_FEMME', totalEmploisFemme);
      commit('SET_TOTAL_MPME', totalMpme);
    } catch (error) {
   
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
    
      commit('SET_TYPE_CARTES_DATA', options);
    } catch (error) {
     
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
 
      commit('SET_TYPE_COMPTABILITES_DATA', options);
    } catch (error) {
     ;
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
  
      commit('SET_TYPE_DEMANDE_DATA', options);
    } catch (error) {
     
    }
  },

  async fetchActualites({ commit } , page) {
    try {
      const response = await axios.get(`/actualites?page=${page}`,{ params : {statut: true }});
      const data = response.data.data;
    
      commit('SET_ACTUALITES', data); // Mutation pour stocker les actualités dans le state
    } catch (error) {
     
    }
  },
  async fetchPartenairesData({ commit }) {
    try {
      const response = await axios.get('/partenaires');
      const data = response.data.data.data;   
      // Filtrer les partenaires avec un statut de 1
      const partenairesFiltres = data.filter(partenaire => partenaire.StatutPartenaire === "1"); 
   
      commit('SET_PARTENAIRES_DATA', partenairesFiltres);
    } catch (error) {
      
    }
  },

  async fetchRegimes({ commit }) {
    try {
      const response = await axios.get('/regimes'); // Remplacez l'URL par l'URL de votre API
    
      const regimesFromAPI = response.data.data.data;
  
      commit('SET_REGIMES', regimesFromAPI); // Utilisez une mutation pour stocker les données dans le store Vuex
    } catch (error) {
      
    }
  },
  async fetchTypesGestions({ commit }) {
    try {
      const response = await axios.get('/types-gestions');
     
      const typesGestionsFromAPI = response.data.data.data;

      // Formatez les données de l'API en options appropriées si nécessaire

      commit('SET_TYPES_GESTIONS', typesGestionsFromAPI);
    } catch (error) {
    
    }
  },

  async fetchTypesContribuables({ commit }) {
    try {
      const response = await axios.get('/types-contribuables');
     

      const typesContribuablesFromAPI = response.data.data.data;
      commit('SET_TYPES_CONTRIBUABLES', typesContribuablesFromAPI);
    } catch (error) {
    
    }
  },
  async fetchPubliqueVisiblePhotos({ commit } , page) { 
    try {
      const response = await axios.get(`/photos-tech/albums/photos/publique-visible?page=${page}`);
      const publiqueVisiblePhotos = response.data.data; // Assurez-vous que la structure de réponse correspond à vos besoins
  

     
      commit('SET_PUBLIQUE_VISIBLE_PHOTOS', publiqueVisiblePhotos);
    } catch (error) {
     
    }
  },



  async fetchSousSecteurs({ commit }, page) {
 
    try {
      const response = await axios.get(`/sous-secteurs?page=${page}`);
      const sousSecteursData = response.data.data;
     


      commit('SET_SOUS_SECTEURS', sousSecteursData); // Met à jour l'état avec les données récupérées
    } catch (error) {
      
    }
  },


  async fetchAccompagnement({ commit }, page) {
    try {
      const response = await axios.get(`/mpme/liste/accompagnement?page=${page}`, { params: { statut: true } });
      const data = response.data.data;
     
      commit('SET_ACCOMPAGEMENT', data);
    } catch (error) {
      
    }
  },

  // Méthode pour récupérer les données depuis /mpme/personnel
async fetchPersonnel({ commit }, page) {
  try {
    const response = await axios.get(`/mpme/liste/personnel?page=${page}`, { params: { statut: true } });
    const data = response.data.data;
    
    commit('SET_PERSONNEL', data); // Utilisez le nom de mutation approprié
  } catch (error) {
    
  }
},



  


 }
