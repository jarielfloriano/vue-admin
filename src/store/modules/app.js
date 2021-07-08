// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: 'User Profile',
      icon: 'mdi-account',
      to: '/components/profile/',
    },
    {
      title: 'Menu 1',
      icon: 'mdi-link-variant',
      to: '/menu1/',
    },
    {
      title: 'Menu 2',
      icon: 'mdi-link-variant',
      to: '/menu2/',
    },
    {
      title: 'Menu 3',
      icon: 'mdi-link-variant',
      to: '/menu3/',
    },
    {
      title: 'Google Maps',
      icon: 'mdi-map-marker',
      to: '/maps/google/',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
