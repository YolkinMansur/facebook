import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProFileView from '../views/ProFileView.vue'
import SingleProfile from '../views/SingleProfile.vue'
import MessagesView from '../views/MessagesView.vue'
import ChatView from '../views/ChatView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProFileView
  },
  {
    path: '/single',
    name: 'single',
    component: SingleProfile
  },
 {
    path: '/messages',
    name: 'messages',
    component: MessagesView
  },
 {
    path: '/messages/:id',
    name: 'chat',
    component: ChatView
  },
]

const router = new VueRouter({
 mode:"history",
  routes 
})

export default router
