// store/modules/countries.js
import axios from 'axios';

const state = {
  countryOptions: [],
};

const getters = {
  getCountryOptions: (state) => state.countryOptions,
};

const mutations = {
  SET_COUNTRY_OPTIONS: (state, options) => {
    state.countryOptions = options;
  },
};

const actions = {
  fetchCountries: async ({ commit }) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data;
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
