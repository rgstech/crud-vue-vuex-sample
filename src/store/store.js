import Vue from "vue";
import Vuex from "vuex";
import actions from './actions'
import cliente from './modules/cliente'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: { cliente },
});
