import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const path = 'https://api.tissini.app/api/v2';
const api = (url = '', options) => fetch(`${path}${url}`, options);

export default new Vuex.Store({
  state: {
    user: null,
    categories: null,
  },
  getters: {
    auth(state) {
      return !!state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    singIn({ commit }, phone) {
      if (phone === '7865470213') {
        commit('setUser', phone);
      }
    },
    signOut({ commit }) {
      commit('setUser', null);
    },
    syncCategories({ commit }, options) {
      return api('/categories', options).then(response => {
        commit('setCategories', response.data);
        return response;
      });
    },
  },
  modules: {},
});
