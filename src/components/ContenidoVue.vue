<!-- eslint-disable vue/valid-template-root -->
<template>

<div class="content">   
    <ContenidoSubVue />
</div>

</template>

<script>
import ContenidoSubVue from './ContenidoSubVue.vue'

export default {
  name: 'ContenidoVue',
  components: {
    ContenidoSubVue
  }
}

</script>


<style>


.content {
    flex: 1; /* Ocupa todo el espacio restante disponible */
    background-color: #FFFFFF; 
    padding: 10px; 
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
    border: 5px solid aquamarine;
    border-radius: 8px;
    margin: 2px;
}

</style>

