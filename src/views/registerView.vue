<template>
  <div class="container-fluid mediumBlue ">
    <div class="row min-vh-100">
      <div class="col-md-12 col-sm-12 d-flex justify-content-center align-items-center"> <!--align-items-center not work (not visible) if element dont have width and hight-->
        <form class="w-50">
          <div class="mb-3 ">
            <input v-model="user" type="email" class="form-control" id="exampleFormControlInput1" placeholder="create username">
          </div>
            <button @click="submit()" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePokemon } from '../stores/pokemon.js';
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const pokemon = usePokemon()
const user = ref()
const router = useRouter();

const submit = ()=>{
  pokemon.user = user.value
  router.push({ path: '/' });
}
</script>
<style scoped>
  .mediumBlue {
    background-color: var(--mediumBlue);;
  }
</style>
