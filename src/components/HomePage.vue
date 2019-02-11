<template>
  <div>
<!--Beginning of Video Background-->
<VideoBackgroundPage/>
<!--End of Video Background-->

<!--begining of another section-->
<!-- contact section -->
     <div >
       <section class=" text-center my-5" id="qoute" >
        <h2 class="h1-responsive font-weight-bold text-center my-5 red-text">FEATURED CAMPAIGNS</h2>
        <p class="lead black-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Temporibus sunt a recusandae
        molestias </p>
        <hr class="font-weight-bold" id="hr">
      </section>

       <section class="  my-5" id="qoute1" >
        <card>
          <row>
            <column lg="6">
              <card-body class="form">
              <!--image-->
              <img src="../assets/pictures/campaing/1.jpg"  class="img-fluid" alt=""/>
              </card-body>
            </column>
            <column lg="6">
              <card-body class="contact  h-100 black-text " >
                <h3 class="my-4 pb-2 ram">RAMADAN PACKAGE</h3>
                <p> (SUPPORT FAMILES IN NEED THIS RAMADAN)

                 Alhamdulilaah another opportunity is here for you to put a beautiful smile on the faces of needy families.
                Remember feeding a needy person is a way of saving life, no doubt, you know there is a great reward for that,
                Especially in the Holy month of Ramadan where deeds are multiplied and most love by Allah Azza Wa Jaal.
              </p>
              <btn color="red" class="btn-rounded" size="lg">Read more</btn>
              </card-body>
            </column>
          </row>
        </card>
      </section>

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
                <h3 class="my-4 pb-2 ram">BUSINESS PACKAGE</h3>
                <p> (SUPPORT FAMILES IN NEED THIS RAMADAN)

                 Alhamdulilaah another opportunity is here for you to put a beautiful smile on the faces of needy families.
                Remember feeding a needy person is a way of saving life, no doubt, you know there is a great reward for that,
                Especially in the Holy month of Ramadan where deeds are multiplied and most love by Allah Azza Wa Jaal.
              </p>
              <btn color="red" class="btn-rounded" size="lg">Read more</btn>
              </card-body>
            </column>
          </row>
        </card>
      </section>


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
                <h3 class="my-4 pb-2 ram">FAMILY SUPPORT PACKAGE</h3>
                <p> (SUPPORT FAMILES IN NEED THIS RAMADAN)

                 Alhamdulilaah another opportunity is here for you to put a beautiful smile on the faces of needy families.
                Remember feeding a needy person is a way of saving life, no doubt, you know there is a great reward for that,
                Especially in the Holy month of Ramadan where deeds are multiplied and most love by Allah Azza Wa Jaal.
              </p>
              <btn color="red" class="btn-rounded" size="lg" ><a href="/ramadan">Read more</a></btn>
              </card-body>
            </column>
          </row>
        </card>
      </section>
      <hr>
<!--Meet Vulenteers-->
     <section class=" text-center my-5" id="qoute" >
        <h2 class="h1-responsive font-weight-bold text-center my-5 red-text">MEET OUR VOLUNTEER</h2>
        <p class="lead black-text w-responsive text-center mx-auto mb-5">We are honored to have these great people
        </p>
        <hr class="font-weight-bold" id="hr">
        <div class="container">
         <row>
          <column lg="3" md="6" class="mb-lg-0 mb-4">
            <card collection class="z-depth-1-half">
              <div class="view zoom">
                <img src="../assets/pictures/5.jpg"  class="img-fluid" alt=""/>
                <div class="stripe dark">
                  <a>
                    <p>Ramadan Package <fa icon="angle-right"></fa></p>
                  </a>
                </div>
              </div>
            </card>
          </column>
          <column lg="3" md="6" class="mb-lg-0 mb-4">
            <card collection class="z-depth-1-half">
              <div class="view zoom">
                <img src="../assets/pictures/5.jpg" class="img-fluid" alt=""/>
                <div class="stripe light">
                  <a>
                    <p>Business Package <fa icon="angle-right"></fa></p>
                  </a>
                </div>
              </div>
            </card>
          </column>
          <column lg="3" md="6" class="mb-lg-0 mb-4">
            <card collection class="z-depth-1-half">
              <div class="view zoom">
                <img src="../assets/pictures/5.jpg"  class="img-fluid" alt=""/>
                <div class="stripe dark">
                  <a>
                    <p>Family Support Package <fa icon="angle-right"></fa></p>
                  </a>
                </div>
              </div>
            </card>
          </column>
          <column lg="3" md="6" class="mb-lg-0 mb-4">
            <card collection class="z-depth-1-half">
              <div class="view zoom">
                <img src="../assets/pictures/5.jpg"  class="img-fluid" alt=""/>
                <div class="stripe light">
                  <a>
                    <p>Masjid Building <fa icon="angle-right"></fa></p>
                  </a>
                </div>
              </div>
            </card>
          </column>
        </row>

        </div>
      </section>
      </div>
    </div>
</template>

<script>
import VideoBackgroundPage from '../components/VideoBackgroundPage'
import {Btn,Container, Row, Column, Card, CardImg, CardBody, CardTitle, CardFooter, CardText, Fa,Tooltip, Badge, ViewWrapper, Carousel, CarouselItem, CarouselCaption, Testimonial, Avatar, MdMask  } from 'mdbvue';

export default {
  name: 'CarouselPage',
  components: {
    VideoBackgroundPage,
    Carousel,
    CarouselItem,
    CarouselCaption,
    Row,
    Fa,
    Container,
    Tooltip,
    Badge,
    Btn,
    ViewWrapper,
    Carousel,
    Testimonial,
    Avatar,
    MdMask,
    Column,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardFooter,
    CardText,
  }
};
</script>

<style scoped>
#qoute1{
  height:auto;
  color: white;
  padding-left:80px;
  padding-right:80px;

}
#head{
  color:rgb(241, 69, 98);
}
#hr{
  width: 5%;
  background-color:red;
  height: 3px;

}
.ram:hover{
color:red;
}
</style>
