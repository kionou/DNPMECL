import { createStore } from 'vuex'

import state from './state'
import getters from './getters'
import  mutations from './mutations.js'
import  actions from './actions.js'
import countries from './countries'
import userModule from './user';
import verification from './verification'


const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    countries, // Utilisez le nom correct du module ici
    user: userModule,
    verification
  },
})

export default store;
