// store/modules/user.js

const state = {
    loggedInUser: null,
  };
  const getters = {
    loggedInUser: (state) => state.loggedInUser,
    isLoggedIn: (state) => state.loggedInUser !== null,
  };  
  
  const mutations = {
    SET_LOGGED_IN_USER(state, user) {
      state.loggedInUser = user;
    },
    CLEAR_LOGGED_IN_USER(state) {
      state.loggedInUser = null;
    },
  };
  
  const actions = {
    setLoggedInUser({ commit }, user) {
      commit('SET_LOGGED_IN_USER', user);
    },
    clearLoggedInUser({ commit }) {
      commit('CLEAR_LOGGED_IN_USER');
    },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  };
  