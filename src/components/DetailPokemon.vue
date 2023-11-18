<template>
    <div class="modal fade" id="detailPokemon" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="card border border-0 " >
            <div class="card-header border border-0 d-flex justify-content-center">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" class="card-img-top w-50" alt="...">
            </div>
            <div class="card-body">
              <p class="card-text my-0">Ability : manjat  lompat</p>
              <p class="card-text my-0">Species : elkodoe</p>
              <p class="card-text my-0">type    : mamlia </p>
              <p class="text text-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                load More
              </p>
              <div class="collapse" id="collapseExample">
                <table class="table table-sm table-borderless table-striped">
                  <tbody>
                    <tr >
                      <th scope="row">Hp</th>
                      <td>90</td>
                    </tr>
                    <tr >
                      <th scope="row">Attacek</th>
                      <td>80</td>
                    </tr>
                    <tr >
                      <th scope="row">defense</th>
                      <td colspan="2">20</td>
                    </tr>
                    <tr >
                      <th scope="row">special Attacek</th>
                      <td colspan="2">20</td>
                    </tr>
                    <tr >
                      <th scope="row">special defense</th>
                      <td colspan="2">20</td>
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