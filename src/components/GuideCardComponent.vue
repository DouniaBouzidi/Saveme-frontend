<template>
  <div class="card mb-5 info-card p-5 shadow ">
    <h5 class="list-header mb-5 text-center" style="color: #D41850">Guide</h5>
    <h6 class="card-text">
      Click on a song from the favorite list to open it.
      <br><br>
      Click on
      <font-awesome-icon icon="fa-solid fa-heart" size="1x" style="color:#F41010"/>
      to save it as your <span style="color: #1762E3">favorites</span>.
      <br><br>
      If you want to <span style="color: #1762E3">remove</span> the song from your favorites, have
      have to choose the song
      and click on
      <font-awesome-icon icon="fa-solid fa-heart-crack" size="1x" style="color:var(--warning-color)"/>
      .
      <br><br>
      If you like to <span style="color: #1762E3">add</span> your own song to the library go to Songs
      and click on
      <font-awesome-icon icon="fa-solid fa-plus" size="1x" style="color:#D41850"/>
      in the bottom right side of the screen.

    </h6>
  </div>
</template>

<script>
export default {
  name: 'GuideCardComponent'
}
</script>

<style scoped>
.info-card {
  max-width: 600px;
  margin: 20px;
}
</style>
