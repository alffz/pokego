<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertsiary bg-dark" >
  <div class="container-fluid ">
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  text-white">
        <li class="nav-item ">
          <RouterLink to="/" class="nav-link ">Home </RouterLink> 
        </li>
        <li class="nav-item">
          <RouterLink to="/favourite" class="nav-link ">favourite </RouterLink> 
        </li>
      </ul>
      <ul class="navbar-nav mb-2 mb-lg-0" role="search">
        <li class="nav-item "><a class="nav-link text-white" >User</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
a.router-link-active.router-link-exact-active {
  color: var(--mediumBlue);
}
a.nav-link{
  color:  white;
}
</style>


