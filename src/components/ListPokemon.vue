<template>
  <div v-for="index of card"  class="col-sm-6 col-md-4 col-lg-3 ">
    <div class="card mb-3" >
      <div class="row g-0">
        <div  @click="showDetail()" class="col-md-4 pointer" data-bs-toggle="modal" data-bs-target="#detailPokemon">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 ">
          <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">Kodok Ijo {{ index }}</h5>
            <h5 class="card-title"><i class="bi bi-heart-fill text-danger"></i></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

// const detailPokemon = ref(false)
const card = ref(20)
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }

</style>