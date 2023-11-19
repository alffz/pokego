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
<script setup>
import navBar from '../components/navBar.vue'
import DetailPokemon from '../components/DetailPokemon.vue'
import ListPokemon from '../components/ListPokemon.vue'
import {onMounted} from 'vue'
import { usePokemon } from '../stores/pokemon.js';
import axios from 'axios';

const pokemon = usePokemon()

onMounted(async()=>{
  await getFavoritePokemon()
})

const getFavoritePokemon = async ()=>{
  pokemon.loading = true
  const names = pokemon.favorite.map(({name})=> name)
  const images = {};

    for (let n of names) {
      const image = await axios.get(`pokemon/${n}`);
      images[n] = image.data.sprites.other["official-artwork"].front_default;
    }

    const addImage = pokemon.favorite.map(pokemon =>{
      pokemon.images = images[pokemon.name]
      return pokemon
    })

    pokemon.pokemons = pokemon.sortResult(pokemon.short, addImage);
    return (pokemon.loading = false);
}
</script>



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
