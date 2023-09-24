<template>
    <div class="galeria">

        <article class="tarjeta__producto" 
            v-for="(producto) in productos" 
            :key="producto.id"
            @click="mostrarProductoDetalle(producto.id)">
     
            <img class="tarjeta__imagen" :src="producto.image" alt="imagen">

            <div class="tarjeta__contenido">
                <h4>{{producto.title}}</h4>
                <h5>{{producto.description}}</h5>
                <h5>Precio $ {{producto.price}}</h5>
            </div>


        </article>
    </div>

</template>

<script>

import axios from 'axios';

export default {
    name: 'MostrarProductos',
    components: {
        
    },
    data() {
        return {
            productos: [],
            productoSeleccionado: null
        }
    },
    methods: {
        mostrarProducto(productoId) {
            axios.get(`https://fakestoreapi.com/products/${productoId}`)
            .then((res) => {
                    this.productoSeleccionado = res.data;
                    console.log(this.productoSeleccionado);
            })
            .catch((err) => {
            console.error(err);
            });
        },
        mostrarProductoDetalle(productoId) {
            console.log("El productoId es:" + productoId);
            this.$router.push({name: 'detalleProducto', params: {id: productoId}});
            
        }
    },
    mounted() {
        axios.get('https://fakestoreapi.com/products?limit=8')
            .then(res => {
                this.productos = res.data
            })
    },
}


</script>

<style>

.galeria {
    display: grid;
    gap: 0.1rem;
    padding: 10px;
    margin-left: 1rem;
    grid-auto-flow: dense;
    grid-auto-rows: 30rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}

.tarjeta__imagen {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    max-width: 50%;
    height: 49%;
    transition: transform 0.3s; /* Agrega una transición suave para la animación */
}

.tarjeta__imagen:hover {
    transform: scale(1.5); /* Escala la imagen al 150% de su tamaño original */
}

.tarjeta_producto {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 5px auto;
    width: 100%;
    max-width: 100%;
    padding: 2px;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.3s ease;
}

.tarjeta__producto:hover {
    border: 2px solid darkgreen;
}

.tarjeta__contenido {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    max-width: 90%;
    padding: 0.4rem;
}

.tarjeta__contenido h4, .tarjeta__contenido h5 {
    margin: 0.5rem;
}

</style>
