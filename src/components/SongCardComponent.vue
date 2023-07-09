<template>
  <div class="card100">
    <div class="card-body">
      <h5 class="card-title">{{song.title }}</h5>
      <h6 class="card-title">{{song.author }}</h6>
      <p class="card-text">
         {{ song.releaseYear }}
      </p>
      <p class="card-text">
        {{ song.songLink}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongCard',
  props: {
    song: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card-body{
  background: #212556;
}
.card-img-top{
  height: 600px;
  width: auto;
  border: 5px #eee9e9 solid;
  padding: 0;
}
.card-title{
  color: #eee9e9;
}
.card-text{
  color: #eee9;
}
</style>
