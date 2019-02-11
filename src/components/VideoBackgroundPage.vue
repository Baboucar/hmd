<template>
  <div class="video-background-page">
    <view-wrapper>
      <video class="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline autoPlay muted="" loop>
        <source src="../assets/video/hmd.mp4" type="video/mp4"/>
      </video>
      <md-mask class="d-flex justify-content-center align-items-center gradient">
        <container class="px-md-3 px-sm-0">
          <row>
            <column md="12" class="mb-4 white-text text-center">
              <h5 class="display-3 font-weight-bold mb-0 pt-md-5">"Helping to make a difference" </h5>
            </column>
          </row>
        </container>
      </md-mask>
    </view-wrapper>
  </div>
</template>

<script>
import { Container, Row, Column, ViewWrapper, MdMask, Btn, Fa, Navbar, NavbarItem, NavbarNav, NavbarCollapse, mdbNavbarBrand  } from 'mdbvue';

export default {
  name: 'VideoBackgroundPage',
  components: {
    Container,
     Row,
     Column,
     ViewWrapper,
     MdMask,
     Btn,
     Fa,
     Navbar,
     NavbarItem,
     NavbarNav,
     NavbarCollapse,
     mdbNavbarBrand
  }
};
</script>

<style scoped>
.video-background-page .gradient {
    background: -moz-linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
    background: -webkit-linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
    background: linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
}

.video-background-page{

}

 .video-background-page .view video {
  top: 0!important;
  left: 0!important;
  right: 0!important;
  transform: none!important;
  height:580px;

}

.video-background-page .navbar {
  transition: background .5s ease-in-out,padding .5s ease-in-out;
}

.top-nav-collapse {
  background-color: #563e91 !important;
}

</style>
