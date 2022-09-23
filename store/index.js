import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    usersLoaded: []
  },
  actions:{
    getUsers({commit}) {
      return axios('http://localhost:3000/users', {
        method: 'GET'
      })
      .then((res) => {
        commit('setUsers', res.data)
      })
    }
  },
  mutations:{
    setUsers: (state, usersLoaded) => {
      state.usersLoaded = usersLoaded
    }
  },
  getters: {
    users(state) {
      return state.usersLoaded
    }
  }
})

export default store;
