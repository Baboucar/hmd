<template>
  <div id="app" class="flyout">
    <navbar dark position="top" class="white "  scrolling>
      <mdb-navbar-brand href="#/" style="font-weight: bolder;">
      <img src="../assets/pictures/logo.jpg" alt="sakina" height="90" width="100">
      </mdb-navbar-brand>
      <navbar-collapse>
        <navbar-nav left>
          <navbar-item router exact href="/" waves-fixed class=""><a href="" id="navItem" >HOME</a></navbar-item>
          <navbar-item router exact href="/about" waves-fixed class="about"><a href="" id="navItem">ABOUT</a></navbar-item>
          <navbar-item router exact href="/ramadan" waves-fixed class="" ><a href="" id="navItem" >RAMADAN PACKAGE</a></navbar-item>
          <navbar-item router exact href="/support" waves-fixed class=""><a href="" id="navItem">FAMILY SUPPORTS</a></navbar-item>
          <navbar-item router exact href="/business" waves-fixed class=""><a href="" id="navItem">BUSINESS PACKAGE</a></navbar-item>
          <navbar-item router exact href="/getInvolve" waves-fixed class=""><a href="" id="navItem">GET INVOLVED</a></navbar-item>
          <navbar-item router exact href="/donate" waves-fixed class=""><a href="" id="navItem">DONATE</a></navbar-item>
          </navbar-nav>
          <!-- Router link to allows the navigation from pages -->
      </navbar-collapse>
    </navbar>
   <router-view/>
  </div>
</template>
<script>
import {Fa,mdbInput, MdTextarea, Card, CardBody,Row, Column, Avatar, Navbar, NavbarItem, NavbarNav, NavbarCollapse, mdbNavbarBrand, Footer,Btn ,mdbContainer, mdbRow, mdbCol, mdbIcon, mdbStepper } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbInput,
    MdTextarea,
    Card,
    Fa,
    CardBody,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    mdbNavbarBrand,
    Footer,
    Btn,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbStepper,
    Row,
    Column,
    Avatar
  },
};
</script>

<style>
.horiline{
background-color:white;
width:0.2px;
}
#navItem{
  color:black;
}
.flyout {
	display:flex;
	flex-direction: column;
	justify-content: space-between;
}
 body, html {
    height: 100%;
    /* font-family: 'Ubuntu', sans-serif; */
    /* font-family: 'Poiret One', cursive; */
    /* font-family: 'Nixie One', cursive; */
    /* font-family: 'Syncopate', sans-serif; */
     font-family: 'Roboto', sans-serif;
    /*font-family: 'Thasadith', sans-serif;
    /* font-family: 'Rajdhani', sans-serif; */
  }
.navbar-toggler-icon{
background-color:black;
}
</style>
