import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    users: []
  },
  actions:{
    GET_USERS({commit}) {
      return axios('http://localhost:3000/users', {
        method: 'GET'
      })
      .then((res) => {
        commit('SET_USERS', res.data)
      })
    }
  },
  mutations:{
    SET_USERS: (state, users) => {
      state.users = users
    }
  },
  getters: {
    USERS(state) {
      return state.users
    }
  }
})

export default store;
