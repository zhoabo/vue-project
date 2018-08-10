import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import find from "./find";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home, find
  }
})
;
