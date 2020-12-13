import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoomIntroduce from '../views/RoomIntroduce.vue'
import New from '../views/New.vue'
// import VCalendar from 'v-calendar'

Vue.use(VueRouter)
// Vue.use(VCalendar)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roomintroduce/:id',
    name: 'RoomIntroduce',
    component: RoomIntroduce
  },
  {
    path: '/new',
    name: 'New',
    component: New
  }
]

const router = new VueRouter({
  routes
})

export default router
