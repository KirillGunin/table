import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    tracksLoaded: []
  },
  actions:{
    getTracks({commit}) {
      return axios('http://localhost:3000/tracks', {
        method: 'GET'
      })
      .then((res) => {
        commit('setTracks', res.data)
      })
    }
  },
  mutations:{
    setTracks: (state, tracksLoaded) => {
      state.tracksLoaded = tracksLoaded
    }
  },
  getters: {
    tracks(state) {
      return state.tracksLoaded
    }
  }
})

export default store;
