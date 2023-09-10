<template>  
<div class="inner-content">
    <CardVue />
</div>

</template>

<script>
import CardVue from './ContenidoSubItemVue.vue'

export default {
  name: 'ContenidoSubVue',
  components: {
    CardVue
  }
}

</script>

<style>

.inner-content {

    max-width: 100%;
    height: 80%;
    margin-bottom: 10px;
    background-color:#FFFFFF;

    border: 1px solid aquamarine;
}

</style>