<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #1D0432">
    <img alt="Vue logo" src="../assets/Saveme.png" style="width: 230px; height: 90px">
    <a class="navbar-brand" href="/"><h1>Saveme</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="toggleMobileMenu">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/"><h5>Home</h5></router-link>
          <router-link class="nav-link" to="/about"><h5>About Us</h5></router-link>
          <router-link class="nav-link" to="/songs"><h5>Favorite Songs</h5></router-link>
        </ul>
      </div>
  </nav>

</template>
<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>

</style>
