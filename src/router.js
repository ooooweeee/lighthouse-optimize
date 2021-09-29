import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/about',
      component: import(/* chunkFileName: about*/ './views/About.vue')
    }
  ]
})
