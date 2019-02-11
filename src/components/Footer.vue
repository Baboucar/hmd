
<template>
    <div>
<!-- Begining of footer -->
       <Footer color="stylish-color-dark" class="font-small lighten-3 pt-4 mt-4">
            <container class="text-center text-md-left">
              <row class="my-4">
                <column md="4" lg="4">
                  <h5 class="text-uppercase mb-4 font-weight-bold">Summary</h5>
                  <p> Our vision is to support needy families that are forgotten by the societies,
                  to create an environment that will support them to be become self-reliant
                  thereby contributing towards the existence of a better world.</p>
                </column>
                <hr class="clearfix w-100 d-md-none"/>
                <column md="2" lg="2" class="ml-auto">
                  <h5 class="text-uppercase mb-4 font-weight-bold">About</h5>
                  <ul class="list-unstyled">
                    <p><a href="#!">PROJECTS</a></p>
                    <p><a href="#!">ABOUT US</a></p>
                    <p><a href="#!">MEDIA</a></p>
                    <p><a href="#!">DONATE</a></p>
                  </ul>
                </column>
                <hr class="clearfix w-100 d-md-none"/>
                <column md="5" lg="3">
                  <h5 class="text-uppercase mb-4 font-weight-bold">Address</h5>
                  <p><i class="fa fa-home mr-3"></i> Banjul, The Gambia</p>
                  <p><i class="fa fa-envelope mr-3"></i> hmdcharity@gmail.com</p>
                  <p><i class="fa fa-phone mr-3"></i>  +220-2304113</p>
                  <p><i class="fa fa-print mr-3"></i> +220-3725666</p>
                </column>
                <hr class="clearfix w-100 d-md-none"/>
                <column md="2" lg="2" class="text-center">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Connect with us</h6>
                  <div class="mt-2 ">
                    <a type="button" class="btn-floating btn-small btn-fb"><i class="fa fa-facebook"></i></a>
                    <a type="button" class="btn-floating btn-small btn-tw"><i class="fa fa-twitter"></i></a>
                    <a type="button" class="btn-floating btn-small btn-gplus"><i class="fa fa-google-plus"></i></a>
                    <a type="button" class="btn-floating btn-small btn-dribbble"><i class="fa fa-dribbble"></i></a>
                  </div>
                </column>
                <hr class="clearfix w-100 d-md-none"/>
              </row>
            </container>
            <div class="footer-copyright text-center py-3">
              <container fluid>
                  &copy; 2018 Copyright: <a href="https://sakina.tech"> powered by  Sakina </a>
              </container>
            </div>
        </Footer>
<!-- end of footer -->

    </div>
</template>
<script>

import { Footer, Container, Row, Column, Fa } from 'mdbvue';

export default {
  name: 'FooterProPage',
  components: {
    Footer,
    Container,
    Row,
    Column,
    Fa
  }
};

</script>

