<template>
  <h1 className="page-header">Click to get <span style="color: #D41850 ">your</span> favorite song 😎</h1>
  <div className="d-flex justify-content-center align-items-center">
    <img className="banner-image" alt="Vue logo" src="../assets/logo.png">
    <div className="random-button">
      <font-awesome-icon icon="fa-solid fa-circle-play" className="play-icon" beat size="10x"
                         style="--fa-animation-duration: 2.5s; --fa-beat-scale: 1.2;"
                         @click="$router.push({path: '/favorite-song'})"/>
    </div>
  </div>

</template>
<script>
export default {
  name: 'FavoriteSongs'
}
</script>

<style scoped>

.banner-image {
  max-width: 70%;
  min-height: 200px;
  max-height: 700px;
  border-radius: 20px;
  margin: 100px;
}

.random-button {
  position: absolute;
  margin: 0 auto;
  text-align: center
}

.play-icon {
  color: var(--primary-color);
}

.play-icon:hover {
  color: var(--warning-color);
}
</style>
