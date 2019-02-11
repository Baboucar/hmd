/**
 * add the MDB Bootstrap css files
 */
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import VideoBackgroundPage from './components/VideoBackgroundPage.vue';
import App from './components/App.vue';



Vue.use(VueRouter)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//  Vue.component('example-component', require('./components/ExampleComponent.vue'));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


 export const router = new VueRouter({
   mode:'history',
   routes:[


    {
        path:'/',
        name:'HomePageRoute',
        component:HomePage
    },
   ]
 });

const app = new Vue({
    el: '#app',
    components:{
        App,
        HomePage,
        VideoBackgroundPage,
    },
    router

});


