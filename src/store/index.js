import Vue from 'vue'
import Vuex from 'vuex'
import UserServices from '@/services/UserServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    snackBar: {
      display: false,
      text: ""
    },
  },
  mutations: {
    ADD_USER(state, user) {
      state.user = user
    },
    TOGGLE_SNACK_BAR(state, snackBar) {
      state.snackBar.display = snackBar.display,
      state.snackBar.text = snackBar.text;
    },
  },
  actions: {
    loginUser({ commit }, auth) {
      return UserServices.loginUser(auth)
        .then((auth) => {
          commit("ADD_USER", auth);
        })
        .catch((error) => {
          throw error;
        });
    },
    toggleSnackBar({commit}, snackBar) {
      commit("TOGGLE_SNACK_BAR", snackBar)
    }
  },
  modules: {},
});
