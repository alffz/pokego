<template>
  <div class="container-fluid mediumBlue ">
    <div class="row min-vh-100">
      <div class="col-md-12 col-sm-12 d-flex justify-content-center align-items-center"> <!--align-items-center not work (not visible) if element dont have width and hight-->
        <form class="w-50">
          <div class="mb-3 ">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="create username">
          </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .mediumBlue {
    background-color: var(--mediumBlue);;
  }
</style>
