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
    <div class="row  mt-1">
      <div class="col-md-6  col-sm-6 ">
        <form class="py-3">
          <div class="form-check form-switch form-check-inline mb-1">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">asc / desc</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">show by type</label>
          </div>
          <select class="form-select w-75" disabled aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button type="submit" class="btn btn-primary btn-sm my-1">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 my-1">
        <button type="button" class="btn btn-sm btn-secondary mx-2">Previous</button>
        <button type="button" class="btn btn-sm btn-secondary mx-2">Next</button>
      </div>
    </div>
    <div class="row mt-1">
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
