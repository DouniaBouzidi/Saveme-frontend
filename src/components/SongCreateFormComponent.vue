<template>
  <button class="btn sticky-button" @click="showFormModal">
    <i class="bi songs">
      <font-awesome-icon icon="fa-solid fa-plus" class="card-img" size="2x"/>
    </i>
  </button>

  <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content px-4 py-2">
        <div class="modal-header">
          <h5 class="modal-title" id="formModalLabel"> <span style="color: #D41850"> New Songs</span> </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.stop.prevent="addSong">
            <div class="mb-3">
              <label for="title" class="form-label"> <span style="color: #D41850"> Title </span> </label>
              <input type="text" minlength="1" maxlength="40" class="form-control" id="title" placeholder="song name"
                     v-model="title" required>
            </div>
            <div class="mb-3">
              <label for="author" class="form-label"> <span style="color: #D41850">Author</span> </label>
              <input type="text" minlength="1" maxlength="40" class="form-control" id="author"
                     placeholder="authors name" v-model="author" required>
            </div>
            <div class="mb-3">
              <label for="releaseYear" class="form-label">  <span style="color: #D41850">Release year  </span> </label>
              <input type="number" min="1800" max="9999" class="form-control" id="releaseYear" placeholder="2022"
                     v-model="releaseYear" required>
            </div>
            <div class="mb-3">
              <label for="songLink" class="form-label"> <span style="color: #D41850"> Song Link </span> </label>
              <input type="text" minlength="1" maxlength="100" class="form-control" id="songLink"
                     placeholder="https://song-link.example" v-model="songLink" required>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="custom-button button-grey btn-lg me-5" data-bs-dismiss="modal"> <span style="color: #D41850"> Cancel </span> </button>
              <button class="custom-button button-blue btn-lg" type="submit" value="submit"><span style="color: #D41850"> Create </span> </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {

  name: 'SongCreateForm',
  data () {
    return {
      title: '',
      author: '',
      releaseYear: '',
      songLink: '',
      formModal: null
    }
  },
  methods: {
    showFormModal () {
      this.formModal = new Modal(document.getElementById('formModal'), {})
      this.formModal.show()
    },
    addSong () {
      this.formModal.hide()
      this.$emit('addSongEvent', this.title, this.author, this.releaseYear, this.songLink)
    }
  }
}
</script>

<style scoped>
.sticky-button {
  background-color: #D41850;
  position: fixed;
  bottom: 40px;
  right: 50px;
  padding: 30px 30px;
  border-radius: 100%;
  border-width: 0;
  color: var(--element-color);
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%) !important;
}

</style>
