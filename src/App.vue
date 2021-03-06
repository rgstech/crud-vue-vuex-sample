<template>
  <div>
    <div class="container">
      <ClienteForm />
      <ClienteTable />
    </div>
  </div>
</template>

<script>

import ClienteTable from "./components/ClienteTable";
import ClienteForm  from "./components/ClienteForm";

export default {

  components: { ClienteTable, ClienteForm },

    created() {
      this.$store.dispatch('loadData');
  },
  
};
</script>

<style scoped>
</style> 