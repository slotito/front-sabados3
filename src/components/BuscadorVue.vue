<template>
    <div class="buscador">
    
    <input class="buscador-input" type="text" v-model="busqueda" @input="filtrarProductos" placeholder="Busque su producto" />
    

    </div>


</template>

<script>    
import axios from 'axios';

export default {
    name: 'BuscadorVue',
  data() {
    return {
      busqueda: '', // Valor del campo de búsqueda
        productos: [], // Array de productos

    };
  },
  computed: {
    productosFiltrados() {
      // Filtrar productos en función de la búsqueda
      return this.productos.filter(producto =>
        producto.title.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    },
  },
  methods: {
    filtrarProductos() {
      // Método para filtrar productos cuando se escribe en el campo de búsqueda
    },
  },
    mounted() {
        axios.get('https://fakestoreapi.com/products?limit=8')
            .then(res => {
                this.productos = res.data
            })
    },
};
</script>

<style>

.buscador {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 100%;
    height: 15vh;
    padding: 6px;
    border-radius: 8px;
    background-color: rgb(140, 229, 201);
    margin-top: 0.5rem;
}

.buscador-input {
  width: 70%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

</style>
