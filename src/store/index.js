import Vue from "vue";
import Vuex from "vuex";
import albums from "./modules/albums";
import artist from "./modules/artist";
import state from "./state.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
   state,
   getters,
   mutations,
   actions,
   modules: {
      albums: albums,
      artist: artist
   }
});
