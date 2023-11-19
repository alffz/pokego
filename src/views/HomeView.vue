<template>
  <div class="container-fluid darkBlue">
    <div class="row">
      <navBar/>
  </div>
    <div class="row  mt-1">
      <div class="col-md-6  col-sm-6 ">
        <form class="py-3">
          <div class="form-check form-switch form-check-inline mb-1">
            <input @click="short()" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">{{ pokemon.short }}</label>
          </div>
          <div class="form-check form-check-inline">
            <input @click="showByType()" class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">show by type</label>
          </div>
          <select @click="getPokemonType()" v-model="selectedType"  :disabled="pokemon.showByType" class="form-select w-75"  aria-label="Default select example">
            <option v-for="{name,url} in pokemonsType" :key="types" :value="url">{{ name }}</option>
          </select>
          <button @click="getPokemonByType()" type="button" class="btn btn-primary btn-sm my-1">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 my-1">
        <button v-if="pokemon.page === 1" type="button" disabled class="btn btn-sm btn-secondary mx-2">Previous</button>
        <button v-else @click="previous()" type="button" class="btn btn-sm btn-primary mx-2">Previous</button>
        <button @click="next()" type="button" class="btn btn-sm btn-primary mx-2">Next</button>
      </div>
    </div>
    <div class="row mt-1">
      <ListPokemon/>
    </div>
  </div>

<Teleport  to="body">
  <DetailPokemon/>
</Teleport>
<Teleport to="body">
    <div class="container-fluid" v-if="pokemon.loading">
      <div class="row vh-100 d-flex justfy-content-center align-items-center">
        <Loading />
      </div>
    </div>
</Teleport>
</template>

<script setup>
import navBar from '../components/navBar.vue'
import DetailPokemon from '../components/DetailPokemon.vue'
import Loading from '../components/Loading.vue'
import ListPokemon from '../components/ListPokemon.vue'
import {onMounted,ref, watch} from 'vue'
import { usePokemon } from '../stores/pokemon.js';
import axios from 'axios';
import {showAlert,extractUrl} from '../utils/utils.js'

const pokemon = usePokemon()
const pokemonsType = ref()
const selectedType = ref()

onMounted( async () => {
  await pokemon.getPokemon()
})

const short = ()=>{
  pokemon.short === 'asc' ? pokemon.short = 'desc' : pokemon.short = 'asc'

  if(typeof selectedType.value === 'string'){
    getPokemonByType()
  }else{
    pokemon.getPokemon()
  }
  
}

const showByType = ()=>{
  pokemon.showByType === false ? pokemon.showByType = true : pokemon.showByType = false
}

const getPokemonType = async ()=>{
  try{
    const data = await axios.get(`type`)
    if(data.status === 200){
      pokemonsType.value = data.data.results
    }else{
      showAlert({message:"someting went wrong",background:'alert-warning'})
    }
  }catch(err){
    showAlert({message:"unexpected error",background:'alert-danger'})
  }
  
}

const getPokemonByType = async ()=>{
  try{
    pokemon.loading = true
    const type = extractUrl(selectedType.value).at(-2)
    const data = await axios.get(`type/${type}`)
    if(data.status === 200){

      const result = data.data.pokemon.reduce((acc, pokemon) => {
        const name = pokemon.pokemon.name;
        const temp = {};

        temp.name = name;
        acc.push(temp);

        return acc;
      }, []);

      const names = result.map(({ name }) => name);
      const images = {};

      for (let n of names) {
        const image = await axios.get(`pokemon/${n}`);
        images[n] = image.data.sprites.other["official-artwork"].front_default;
      }

      const addImages = result.map((result) => {
        result.images = images[result.name];
        return result;
      });

      const sorted  = pokemon.sortResult(pokemon.short, addImages);
      pokemon.pokemons = sorted
      return pokemon.loading = false
    }else{
      showAlert({message:"someting went wrong",background:'alert-warning'})
    }
    
  }catch(err){
    showAlert({message:"unexpected error",background:'alert-danger'})
  }
  
}

const next = async ()=>{
  const url = extractUrl(pokemon.next).at(-1)
  await pokemon.getPokemon(url)
  return pokemon.page += 1
}

const previous = async ()=>{
  const url = extractUrl(pokemon.previous).at(-1)
  await pokemon.getPokemon(url)
  return pokemon.page -= 1
}


// watch(pokemon.short, () => {
//   console.log(`x `)
// })
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
