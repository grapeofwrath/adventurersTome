import Vue from 'vue'
import VueRouter from 'vue-router'
import RaceList from '../views/RaceList.vue'
import RaceShow from '../views/RaceShow.vue'
import RaceCreate from '../views/RaceCreate.vue'
import NotFoundComponent from '../views/FileNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'raceList',
    component: RaceList,
  },
  {
    path: '/race/:slug',
    name: 'raceShow',
    component: RaceShow,
    props: true,
  },
  {
    path: '/race/create',
    name: 'raceCreate',
    component: RaceCreate,
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
