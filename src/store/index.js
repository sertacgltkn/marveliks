import Vue from "vue";
import { createStore } from "vuex";
import axios from "axios";
import md5 from "js-md5";

export default createStore({
  state: {
    comics: [],
    favorites: [],
  },
  mutations: {
    setComics(state, comics) {
      state.comics = comics;
    },
    toggleFavorite(state, comic) {
      const index = state.favorites.indexOf(comic.id);
      if (index === -1) {
        state.favorites.push(comic.id);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
  actions: {
    fetchComics({ commit }) {
      const publicKey = "14445fe6ac61f4dfea7e144652462e1c";
      const privateKey = "db5ee9198f6b619065780c89f1b313044d4fbe4a";
      const ts = Date.now().toString();
      const hash = md5(ts + privateKey + publicKey);
      const apiUrl = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
      axios
        .get(apiUrl)
        .then((response) => {
          const comics = response.data.data.results;
          commit("setComics", comics);
          console.log(response.data.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    toggleFavorite({ commit, state }, comic) {
      commit("toggleFavorite", comic);
    },
  },
  getters: {
    getComicById: (state) => (id) => {
      return state.comics.find((comic) => comic.id === id);
    },
    isFavorite: (state) => (id) => {
      return state.favorites.includes(id);
    },
  },
});
