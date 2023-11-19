<template>
  <div v-for="{name,images,date = false} in pokemon.pokemons"  class="col-sm-6 col-md-4 col-lg-3 ">
    <div class="card mb-3" >
      <div class="row g-0">
        <div  @click="showDetail(name,images)" class="col-md-4 pointer" data-bs-toggle="modal" data-bs-target="#detailPokemon">
          <img :src="images" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 ">
          <div class="card-body ">
            <h5 class="card-title"> {{ name }}</h5>
            <p v-if="date">favorited at : {{ date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { showAlert } from '../utils/utils.js';
import axios from 'axios';

import { usePokemon } from '../stores/pokemon.js';

const pokemon = usePokemon()

const showDetail = async (name,image)=>{
  try{
    const data = await axios.get(`pokemon/${name}`)
    if(data.status === 200){

      const name = data.data.name
      const ability = data.data.abilities[0].ability.name
      const species = data.data.species.name
      const type = data.data.types[0].type.name
      const hp = data.data.stats[0].base_stat
      const attack = data.data.stats[1].base_stat
      const defense = data.data.stats[2].base_stat
      const special_attack = data.data.stats[3].base_stat
      const special_defense = data.data.stats[4].base_stat
      const speed = data.data.stats[5].base_stat

      const detail = {
        image,
        name,
        ability,
        species,
        type,
        hp,
        attack,
        defense,
        special_attack,
        special_defense,
        speed
      }
      pokemon.detailPokemon = detail
    }else{
      showAlert({message:"someting went wrong",background:'alert-warning'})
    }
  }catch(err){
    showAlert({message:"unexpected error",background:'alert-danger'})
  }
}

</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }

</style>