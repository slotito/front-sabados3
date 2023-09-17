<template>
    
    <div class="carrito">
        <img class="Nav-Item" src="../assets/navegadorVue/Logo.png" alt="Logo" />
        <h3>Mis compras</h3>
    </div>
</template>

<style scoped>
/* Estilos para el carrito */
.carrito {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 95%;
    background-color: rgb(208, 241, 230); 
    border-radius: 8px;
    padding: 10px;
    margin-top: 3%;
    margin-right: 1%;
    border-color: rgb(202, 223, 216);
    border-style: solid;
    border-width: 2px;
}

h3 {
    color: rgb(48, 179, 135);
}
</style>
