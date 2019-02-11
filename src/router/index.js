import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import RamadanPackage from '@/components/RamadanPackage.vue';
import FamilySupport from '@/components/FamilySupport.vue';
import BusinessPackage from '@/components/BusinessPackage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,

    },
    {
      path: '/ramadan',
      name: 'ramadanroute',
      component: RamadanPackage,
    },

    {
      path: '/support',
      name: 'supportroute',
      component:FamilySupport,
    },

    {
      path: '/business',
      name: 'businessroute',
      component:BusinessPackage,
    },
  ]
});
