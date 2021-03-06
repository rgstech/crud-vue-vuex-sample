<template>
    <div class="row">
      <div class="col-md-12">
        <table id="regtable" class="table">
          <thead class="thead-light">
            <tr id="tabhead">
              <th>Nome</th>
              <th>Email</th> 
              <th>Ação</th>
            </tr>
          </thead>
          <tbody id="tregs">
            <tr v-for="cliente in clientes" :key="cliente.id" >
              <td>  {{cliente.nome}} </td>
              <td>  {{cliente.email}} </td>
              <td>
                <button class="btn btn-danger" @click="deleteCliente(cliente)">Excluir</button>
                <!-- <button name="btclear" @click="showInfo(cli)" class="btn btn-primary" type="reset">+info</button> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>  
</template>

<script>

import { mapActions } from 'vuex';

export default {

  methods: {

    ...mapActions( { delCliente : 'deleteCliente'} ),
    deleteCliente( cliente ) {
      
     this.delCliente(cliente);
   
    }, 

  },
  computed: {
      clientes(){
         return this.$store.getters.clientes;
      }
    }
   
};
</script>

<style>
</style>