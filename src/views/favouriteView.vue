<script setup>
import navBar from '../components/navBar.vue'
import DetailPokemon from '../components/DetailPokemon.vue'
import ListPokemon from '../components/ListPokemon.vue'
import {ref} from 'vue'

// const detailPokemon = ref(false)
const card = ref(20)
const showDetail = ()=>{
  // detailPokemon.value = true
  console.log('modal')
}
</script>

<template>
  <div class="container-fluid darkBlue">
    <div class="row">
      <navBar/>
    </div>
    <div class="row mt-2 vh-100">
      <ListPokemon/>
    </div>
  </div>

<Teleport  to="body">
  <!-- Modal detail pokemon-->
  <DetailPokemon/>
</Teleport>
</template>

<style scoped>
  .mediumBlue {
    background-color: var(--mediumBlue);;
  }
  .darkBlue{
    background-color: var(--darkBlue);
  }

  .pointer{
    cursor: pointer;
  }

</style>
