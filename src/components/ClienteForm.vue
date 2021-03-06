<template>
    <div class="row">
      <div class="col-md-12">
        <form name="formregistro" @submit.prevent>
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" class="form-control" v-model="nome" />
          </div>
          <div class="form-group">
            <label for="descricao">E-mail:</label>
            <input type="text" id="desc" name="desc" class="form-control" v-model="email" />
          </div>
            <button name="btadd" class="btn btn-success" @click="addCliente">Adicionar</button>
            <!-- <button name="btsearch" class="btn btn-info" @click="filtrarRegistro">Pesquisar</button> not implemented -->
            <button name="btclear" class="btn btn-warning" type="reset">Limpar</button>
          <hr />
        </form>
      </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      nome: '',
      email: '',
    };
  },
  methods: {
    ...mapActions( { add_Cliente : 'addCliente'} ),
    addCliente() {
      
      const cliObj = {
         nome: this.nome,
         email: this.email
      }
      
      this.add_Cliente(cliObj);
      this.nome = '';
      this.email = '';
    }
   
  },
};
</script>


<style>
</style>