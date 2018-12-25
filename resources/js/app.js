
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

import HomeComponent from './components/HomeComponent.vue';
import PostCreateComponent from './components/posts/CreateComponent.vue';
import PostIndexComponent from './components/posts/IndexComponent.vue';
import PostEditComponent from './components/posts/EditComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: PostCreateComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: PostIndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: PostEditComponent
  }
];

// const router = new VueRouter({ mode: 'history', routes: routes});
// const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');

const router = new VueRouter({
    routes // short for `routes: routes`
  })
const app = new Vue({
    router
}).$mount('#app');



// const app = new Vue({
//     el: '#app'
// });
