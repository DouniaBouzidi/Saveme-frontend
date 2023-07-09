import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Song.vue'
import About from '../views/AboutUs.vue'
import Songs from '../views/Favorite.vue'
import NotFound from '../views/NotFound.vue'
import RandomSong from '../views/FavoriteSong.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorite-song',
    name: 'FavoriteSong',
    component: RandomSong
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: NotFound

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
