import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


import PageError from './pages/PageError'
import HomeVue from './pages/HomeVue'
import DetalleProducto from './pages/DetalleProducto'
import CarritoVue from './pages/CarritoVue'

const routes = [

    {
        path:'/', component: HomeVue
    },
    {
        path:'/home', component: HomeVue
    },
    {
        path:'/detalle', component: DetalleProducto
    },
    {
        path:'/carrito', component: CarritoVue
    },
    {
        path: '/:pathMatch(.*)*', component: PageError
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});



const app = createApp(App).use(router);

app.use(router);

app.mount("#app");
