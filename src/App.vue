<template>
  <div>
  <Navigation/>
  <Footer/>
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
components: {
    HomePage,
    Navigation,
    Footer
}
  };
</script>
<style scoped>
body {
    height: 100%;
    /* font-family: 'Ubuntu', sans-serif; */
    /* font-family: 'Poiret One', cursive; */
    /* font-family: 'Nixie One', cursive; */
    font-family: 'Roboto', sans-serif; 
    /*font-family: 'Thasadith', sans-serif;*/
    /* font-family: 'Rajdhani', sans-serif; */
  }
</style>
