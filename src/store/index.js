import { createStore } from 'vuex'

import state from './state'
import getters from './getters'
import  mutations from './mutations.js'
import  actions from './actions.js'
 import countries from './countries'


const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    countries, // Utilisez le nom correct du module ici
  },
})

export default store;
