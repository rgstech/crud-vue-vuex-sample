import Vue from "vue";

export default {   

  loadData({ commit }) {

    Vue.prototype.$http().then((resp) => {
      const data = resp.data;
      if (data) {
        commit("initClientes", data);
        
      }
    });
  
  },
};
