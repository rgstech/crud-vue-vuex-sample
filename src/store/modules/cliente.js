import Vue from 'vue';
/* eslint-disable */ 
export default {
  state: {
    clientes: []
  },

  mutations: {
    //também conhecido como setters ,
    //funcoes especializadas somente em mudar estado e nada mais,
    //para processar coisas(pre processamento) usar action primeiro

    deleteCliente(state, cliente  ) {
      
     let clienteObj = JSON.parse(JSON.stringify(cliente))
     Vue.prototype.$http.delete(`/${clienteObj.id}`).then((resp) => {
      const data = resp.data;
      if (data) {
      console.log(data);
      this.dispatch('loadDataCliente');
      }
    });

    }, 
    /* eslint-disable */ 
    addCliente(state, cliente) {
    //state.clientes.push(cliente); // just for test/ apenas para teste
    
    let clienteObj = JSON.parse(JSON.stringify(cliente))
    Vue.prototype.$http.post('',clienteObj).then((resp) => {
        const data = resp.data;
        if (data) {
        console.log(data);
        this.dispatch('loadDataCliente');
        }
   });
  
  },

    initClientes(state, clientes){
          state.clientes = clientes;   
    }
 
  },

  actions: {

    addCliente({ commit }, cliente) {
      commit("addCliente", cliente);
    },
    deleteCliente({ commit }, cliente) { 
      commit("deleteCliente", cliente);
    },
/* eslint-disable */ 
    loadDataCliente({ state, commit, rootState }){ 

      this.dispatch('loadData'); 

    }
       
  },

  getters: {
    
    clientes(state) {
      return state.clientes;
     }

  },
};
