// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'
import {
  layout,
  route,
} from '@/util/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    layout('Default', [
      // Home/Dashboard
      route('Dashboard'),

      // Pages
      route('User Profile', null, 'components/profile'),

      // Components
      route('Notifications', null, 'components/notifications'),
      route('Icons', null, 'components/icons'),
      route('Typography', null, 'components/typography'),

      // Tables
      route('Regular Tables', null, 'tables/regular'),

      // Tables
      route('Menu 1', null, 'menu1'),
      route('Menu 2', null, 'menu2'),
      route('Menu 3', null, 'menu3'),

      // Maps
      route('Google Maps', null, 'maps/google'),
    ]),
  ],
})

router.beforeEach((to, from, next) => {
  return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router