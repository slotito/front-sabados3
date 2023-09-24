<template>

  <div class="containerPpal">
    <NavegadorVue />
    <div clase="containerPPal__central">
      <BuscadorVue />
      <router-view />
  | </div>
  </div>

</template>

<script>
import NavegadorVue from './components/NavegadorVue.vue';
import BuscadorVue from './components/BuscadorVue.vue'


export default {
  name: 'App',
  components: {
    NavegadorVue,
    BuscadorVue
},
}
</script>

<style>


body {
  margin: 0;
  padding: 0;
  background-color: rgb(195, 240, 206);

}

.containerPpal {
    display: flex; /* Establecer el modelo de caja flexible */
    flex-direction: row;
    height: 100vh; /* Establecer la altura del cuerpo al 100% de la ventana */
  
  }

.containerPPal__central {
  display: flex;
  flex-direction: column;

}
</style>

