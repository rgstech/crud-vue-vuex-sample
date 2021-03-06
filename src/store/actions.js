import Vue from "vue";

export default {   // PENDENTE!

  loadData({ commit }) {

    Vue.prototype.$http().then((resp) => {
      const data = resp.data;
      if (data) {
        commit("initClientes", data);
        
      }
    });
  
  },
};
