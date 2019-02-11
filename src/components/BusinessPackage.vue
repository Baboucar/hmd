<template>
  <div id="app" class="flyout">
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
        <div class="bg">
          <div class="text-center button">
            <btn color="red" size="lg">Donate</btn>
          </div>
      </div>
      <!-- About us -->
     <section class="sec">
       <div class="container">
         <h2 class="h1-responsive font-weight-bold my-5 text-center">RAMADAN PACKAGE</h2>
         <hr class="font-weight-bold" id="hr">
            </div>

<!--second package-->
      <section class="  my-5" id="qoute1" >
        <card>
          <row>
            <column lg="6">
              <card-body class="form">
              <!--image-->
              <img src="../assets/pictures/campaing/4.jpg"  class="img-fluid" alt=""/>
              </card-body>
            </column>
            <column lg="6">
              <card-body class="contact  h-100 black-text " >
                <h3 class="my-4 pb-2 ram">RAMADAN PACKAGE</h3>
                <p>
                (SUPPORT FAMILES IN NEED THIS RAMADAN)
                Alhamdulilaah another opportunity is here for you to put a beautiful smile on the faces of needy families.
                Remember feeding a needy person is a way of saving life, no doubt, you know there is a great reward for that, Especially in the Holy month of
                Ramadan where deeds are multiplied and most love by Allah Azza Wa Jaal.
                This ramadan package is an yearly project, we invite all interested partners and donors towards these cause or start planing for it.
                The question is how many families do you want to feed this coming 2018 ramadan?
                Brothers and sisters here we present to you the investment that has 100 percent dividend     </p>
              </card-body>
            </column>
          </row>
        </card>
      </section>
     </section>
     <!-- contact section -->
     <!-- qoute -->

    </main>
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
  data() {
    return {
      offsetTop: 0,
      elements: []
    };
  },
  methods: {
    handleScroll() {
      this.elements.map(element => {
        if (element.offsetTop + this.offsetTop > window.scrollY + window.innerHeight) {
          element.classList.add('more-padding');
        } else {
          element.classList.remove('more-padding');
        }
      });
    },
  },
  mounted() {
    let parentOffset = this.$refs.animate.offsetParent;
    while (parentOffset) {
      this.offsetTop += parentOffset.offsetTop;
      parentOffset = parentOffset.offsetParent;
    };

    let animatedElements = this.$refs.animate.children;
    this.elements = Array.from(animatedElements).map(item => {
      return item;
    });
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};

</script>

<style>
.sec{
  background-color:;
}
.button{
padding-top:295px;
}
.horiline{
background-color:white;
width:0.2px;
}
#sidenav2{
  background:white;
}
#footer{
  height: 100px;
}
#button{
  padding: 30px;
}
#para{
  size: 100px;
}
#image{
  height:350px;
}

.qoute1{
  background-color:#800048;
  height:auto;
  color: white;
}
#qoute1{
 padding: 80px;
}

.qoute{
  background-color:#800048;
  height:auto;
  color: white;
}
.qoute3{
  background-color:#550030;
  height:auto;
  color: white;
}
.qoute4{
  background-color:#800048;
  height:auto;
  color: white;
  margin-bottom:-50px;
}

#qoute{
 padding: 80px;
}
#head{
  color:rgb(241, 69, 98);
}
#hr{
  width: 5%;
  background-color:rgb(241, 69, 98);
  height: 3px;

}
.colo{
  color: rgb(241, 69, 98);
}
#navItem{
  color:black;
}
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}

.active{
  background-color: rgba(255, 255, 255, 0.1);
}

 body, html {
    height: 100%;
    /* font-family: 'Ubuntu', sans-serif; */
    /* font-family: 'Poiret One', cursive; */
    /* font-family: 'Nixie One', cursive; */
    /* font-family: 'Syncopate', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Thasadith', sans-serif;
    /* font-family: 'Rajdhani', sans-serif; */


  }

  .bg {
    /* The image used */
    background-image: url("../assets/pictures/campaing/7.jpg") ;
    /* Full height */
    height:450px;
   /* Text color */
    color:azure;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color:red;

  }
.view {
  background-image: url('../assets/pictures/campaing/1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 60px);
}
.gradient {
  background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
  background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
}
  #background {
    padding: 60px;
  }


      .avatar {
        max-width: 200px;
      }
      .avatar.rounded-circle {
        max-width: 150px;
      }

</style>
