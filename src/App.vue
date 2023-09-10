<template>
  <div class="containerPpal">
    <NavegadorVue />
    <ContenidoVue />
  </div>
</template>

<script>
import ContenidoVue from './components/ContenidoVue.vue'
import NavegadorVue from './components/NavegadorVue.vue'

export default {
  name: 'App',
  components: {
    ContenidoVue,
    NavegadorVue
  }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

body {
  margin: 0;
  padding: 0;
}

.containerPpal {
    display: flex; /* Establecer el modelo de caja flexible */
    height: 100vh; /* Establecer la altura del cuerpo al 100% de la ventana */
}

</style>

