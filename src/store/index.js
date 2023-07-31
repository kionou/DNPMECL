import { createStore } from 'vuex'

import state from './state'
import getters from './getters'
import  mutations from './mutations.js'
import  actions from './actions.js'


const store = createStore({
  state,
  getters,
  mutations,
  actions
})

export default store;
