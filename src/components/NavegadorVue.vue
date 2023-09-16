<template>

<nav class="navegador">

    <div class="navegador__content">
      <div class="navegador__sub">
        <div>
            <img class="Nav-Item" src="../assets/navegadorVue/Logo.png" alt="Logo" />
            <router-link to="/carrito">
                <img class= "Nav-Item" src="../assets/navegadorVue/Menu-Icon.png" alt="Logo" />            
            </router-link>
        </div>



        <img class= "Nav-Item" src="../assets/navegadorVue/Nav-Link.png" alt="Logo" />
        <img class= "Nav-Item" src="../assets/navegadorVue/Nav-Link2.png" alt="Logo" />
      </div>

      <img class="Nav-Item" src="../assets/navegadorVue/Nav-Link3.png" alt="Logo" />

    </div>

</nav>

</template>

<script>
//import Group1 from  '../assets/Logo.png'


export default {
  components: {
    //Group1
  }
}

</script>

<style>

.navegador {
    flex: 0 0 auto;
    width: 72px;
    padding: 6px;
    border-radius: 8px;
    background-color: aquamarine;
}

.navegador__content {
    width: 56px;
    height: 97%;
    padding: 8px;
    border-radius: 8px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
;
}

.navegador__sub {
  width: 56px;
  height: 80%;
  padding: 8px;

}

.Nav-Item {
  width: 40px;
  height: 40px;;
}


</style>
