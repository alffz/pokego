<template>
    <div class="modal fade" id="detailPokemon" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="card border border-0 " >
            <div class="card-header border border-0 d-flex justify-content-center">
              <img :src="pokemon.detailPokemon.image" class="card-img-top w-50" alt="...">
            </div>
            <div class="card-body">
              <table class="table table-sm table-borderless table-striped">
                <tbody>
                  <tr >
                    <th scope="row">Name</th>
                    <td>{{ pokemon.detailPokemon.name }}</td>
                  </tr>
                  <tr >
                    <th scope="row">Ability</th>
                    <td>{{ pokemon.detailPokemon.ability }}</td>
                  </tr>
                  <tr >
                    <th scope="row">Species</th>
                    <td colspan="2">{{ pokemon.detailPokemon.species }}</td>
                  </tr>
                  <tr >
                    <th scope="row">Type</th>
                    <td colspan="2">{{ pokemon.detailPokemon.type }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="text text-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                load More
              </p>
              <div class="collapse" id="collapseExample">
                <table class="table table-sm table-borderless table-striped">
                  <tbody>
                    <tr >
                      <th scope="row">Hp</th>
                      <td>{{ pokemon.detailPokemon.hp }}</td>
                    </tr>
                    <tr >
                      <th scope="row">Attacek</th>
                      <td>{{ pokemon.detailPokemon.attack }}</td>
                    </tr>
                    <tr >
                      <th scope="row">defense</th>
                      <td colspan="2">{{ pokemon.detailPokemon.defense }}</td>
                    </tr>
                    <tr >
                      <th scope="row">special Attacek</th>
                      <td colspan="2">{{ pokemon.detailPokemon.special_attack }}</td>
                    </tr>
                    <tr >
                      <th scope="row">special defense</th>
                      <td colspan="2">{{ pokemon.detailPokemon.special_defense }}</td>
                    </tr><tr >
                      <th scope="row">speed</th>
                      <td colspan="2">{{ pokemon.detailPokemon.speed}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="my-1 px-3 py-1">
            <span type="button" class="mx-3"><i class="bi bi-heart-fill text-danger"></i></span>
            <span type="button"  data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePokemon } from '../stores/pokemon.js';

const pokemon = usePokemon()
</script>