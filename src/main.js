// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import Vue from 'vue';
import App from './App';
import HomePage from './components/HomePage';
import Navigation  from './components/Navigation';
import VideoBackgroundPage  from './components/VideoBackgroundPage';
import Footer from './components/Footer';

import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  data: {
    website: 'http://wisdomquotes.com/steve-jobs-quotes/'
  },
  router,
  components: {
    App,
    HomePage,
    Navigation,
    VideoBackgroundPage,
    Footer,
  },
  template: '<App/>'
});
