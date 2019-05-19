<template>
  <div id="app">
    <div v-if="page">
     <div class="content-block__one">
                <header class="header">
                  <div class="header__logo logo"></div>
                  <div class="header__list list">
                    <ul>
                      <li class="list__item"><a class="list__item_active" href="" v-on:click.prevent="changePage">home</a></li>
                      <li class="list__item"><a class="list__item_active" href="#about">about</a></li>
                      <li class="list__item"><a class="list__item_active" href="#work">work</a></li>
                      <li class="list__item"><a class="list__item_active" href="#work-process">process</a></li>
                      <li class="list__item"><a class="list__item_active" href="#services">services</a></li>
                      <li class="list__item"><a class="list__item_active" href="#testimonials">testimonials</a></li>
                      <li class="list__item"><a class="list__item_active" href="#contacts">contact</a></li>
                    </ul>
                  </div>
                </header>
                <div class="banner">
                  <div class="banner__item">
                    <h1 class="banner__item__main-text">We Design and Develop</h1>
                    <p class="banner__item__text">We are a new design studio based in USA. 
                      We have over 20 years of combined experience, and know a thing or two
                      about designing websites and mobile apps.</p>
                    <button class="banner__item__button">Contact US</button>
                  </div>
                </div>
            </div>
            <div class="content-block__two">
              <div class="about" id="about">
                <div class="about__item">
                  <h1 class="about__item__main-text">About Us</h1>
                  <p class="about__item__text">Divide have don't man wherein air fourth. Own itself make have night won't make. 
    A you under Seed appear which good give. Own give air without fowl moveth dry first 
    heaven fruit, dominion she'd won't very all.</p>
                  <div class="about__img">
                    <img class="about__img__signature" src="./assets/signature.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="content-block__three">
              <div class="content-block__three_first-half">
                <div class="skills" id="skills">
                  <h1 class="skills__item__main-text">Professional Skills</h1>
                  <div class="skills__item__bar-one">
                    <p class="skills__bar__text-one">UI/UX Design    75%</p>
                    <img class="skills__bar-one" src="./assets/rectangle1.png">
                  </div>
                  <div class="skills__item__bar-two">
                    <p class="skills__bar__text-two">web development    90%</p>
                    <img class="skills__bar-two" src="./assets/rectangle2.png">
                  </div>
                  <div class="skills__item__bar-three">
                    <p class="skills__bar__text-three">marketing    65%</p>
                    <img class="skills__bar-three" src="./assets/rectangle3.png">
                  </div>
                </div>
              </div>
              <div class="content-block__three_img">
              </div>
            </div>
            <div class="content-block__four">
              <div class="numbers" id="numbers">
                <div class="numbers__item">
                  <div class="numbers__icon"><img src="./assets/portfolio.svg"></div>
                  <div class="numbers__text">
                  <p class="numbers__text__count">548</p>
                  <p class="numbers__text__discription">projects completed</p>
                  </div>
                </div>
                <div class="numbers__item">
                  <div class="numbers__icon"><img src="./assets/clock.svg"></div>
                  <div class="numbers__text ">
                  <p class="numbers__text__count">1465</p>
                  <p class="numbers__text__discription">WORKING HOURS</p>
                  </div>
                </div>
                <div class="numbers__item">
                  <div class="numbers__icon"><img src="./assets/star.svg"></div>
                  <div class="numbers__text ">
                  <p class="numbers__text__count">612</p>
                  <p class="numbers__text__discription">POSITIVE FEEDBACKS</p>
                  </div>
                </div>
                <div class="numbers__item">
                  <div class="numbers__icon"><img src="./assets/like.svg"></div>
                  <div class="numbers__text ">
                  <p class="numbers__text__count">735</p>
                  <p class="numbers__text__discription">HAPPY CLIENTS</p>
                  </div>
                </div>
               </div>
              </div>
              <div class="content-block__five">
                <div class="work" id="work">
                  <div class="work__item__dark_active">
                   <!-- <div class="work__item__logo"><img src="./assets/look.svg"></div> -->
                  </div>
                  <div class="work__item__light_active" ></div>
                  <div class="work__item__dark_active"></div>
                  <div class="work__item__light_active"></div>
                  <div class="work__item__light_active"></div>
                  <div class="work__item__dark_active"></div>
                  <div class="work__item__light_active"></div>
                  <div class="work__item__dark_active"></div>
                  <div class="work__load-more">
                    <p class="work__load-more__text">LOAD MORE WORK</p>
                  </div>
                </div>
              </div>
              <div class="content-block__six">
                <div class="work-process" id="work-process">
                  <div class="work-process__title">
                    <h1 class="work-process__title__main-text">Our Work Process</h1>
                    <p class="work-process__title__text">Was years it seasons was there form 
                      he in in them together over that, third sixth gathered female creeping bearing behold years.</p>
                  </div>
                  <div class="work-process__video">
                    <!-- Кнопка плеера -->
                    <div class="work-process__video_play-icon"></div>  
                  </div>
                </div>
              </div>
              <div class="content-block__seven">
                <div class="services" id="services">
                  <div class="services__item">
                    <div class="services__icon"><img src="./assets/diamond.svg"></div>
                    <p class="services__text__title">ui / ux design</p>
                    <p class="services__text__discription">Be set fourth land god darkness 
    make it wherein own</p>
                  </div>
                  <div class="services__item">
                    <div class="services__icon"><img src="./assets/arc.svg"></div>
                    <p class="services__text__title">web development</p>
                    <p class="services__text__discription">A she'd them bring void moving 
    third she'd kind fill</p>
                  </div>
                  <div class="services__item">
                    <div class="services__icon"><img src="./assets/phone.svg"></div>
                    <p class="services__text__title">app / mobile</p>
                    <p class="services__text__discription">Dominion man second spirit he,
    earth they're creeping</p>
                  </div>
                  <div class="services__item">
                    <div class="services__icon"><img src="./assets/joy.svg"></div>
                    <p class="services__text__title">game design</p>
                    <p class="services__text__discription">Morning his saying moveth it 
    multiply appear life be</p>
                  </div>
                  <div class="services__item">
                    <div class="services__icon"><img src="./assets/plane.svg"></div>
                    <p class="services__text__title">SEO / marketing</p>
                    <p class="services__text__discription">Give won't after land fill creeping 
    meat you, may</p>
                  </div>
                  <div class="services__item">
                    <div class="services__icon"><img src="./assets/star.svg"></div>
                    <p class="services__text__title">photography</p>
                    <p class="services__text__discription">Creepeth one seas cattle grass 
    give moving saw give</p>
                  </div>
                  <div class="services__item">
                    <div class="services__icon"><img src="./assets/magic-wand.svg"></div>
                    <p class="services__text__title">graphic design</p>
                    <p class="services__text__discription">Open, great whales air rule for, 
    fourth life whales</p>
                  </div>
                  <div class="services__item">
                    <div class="services__icon"><img src="./assets/paint-bucket.svg"></div>
                    <p class="services__text__title">illustrations</p>
                    <p class="services__text__discription">Whales likeness hath, man kind 
    for them air two won't</p>
                  </div>
                </div>
              </div>
              <div class="content__block__eight">
                  <div class="testimonials" id="testimonials">
                    <div class="testimonials__item">
                      <carousel class="carousel"
                       :per-page="1"  
                       :mouse-drag="true" 
                       :pagination-size="10" 
                       :pagination-padding="5" 
                       paginationActiveColor="#fff"
                       paginationColor="#C7C7C7"
                       :autoplay="true"
                       :autoplayTimeout="4000"
                       
                       >
                      <slide class="carousel__item">
                      <p class="carousel__item__title">“ Outstanding job and exceeded all expectations. It was a pleasure 
                     to work with them on a sizable first project and am looking<br/>
                     forward to start the next one asap.”</p>
                     <p class="carousel__item__text">Michael Hopkins</p>
                     </slide>
                     <slide class="carousel__item">
                     <p class="carousel__item__title">“ Outstanding job and exceeded all expectations. It was a pleasure 
                     to work with them on a sizable first project and am looking<br/>
                     forward to start the next one asap.”</p>
                     <p class="carousel__item__text">Michael Hopkins</p>
                     </slide>
                     <slide class="carousel__item">
                     <p class="carousel__item__title">“ Outstanding job and exceeded all expectations. It was a pleasure 
                     to work with them on a sizable first project and am looking<br/>
                     forward to start the next one asap.”</p>
                     <p class="carousel__item__text">Michael Hopkins</p>
                     </slide>
                     </carousel>    
                    </div>
                    </div>
                  </div>
              <div class="content-block__nine">
                <div class="clients" id="clients">
                  <div class="clients__item">
                    <img src="./assets/1.png">
                  </div>
                  <div class="clients__item">
                    <img src="./assets/2.png">
                  </div>
                  <div class="clients__item">
                    <img src="./assets/3.png">
                  </div>
                  <div class="clients__item">
                    <img src="./assets/4.png">
                  </div>
                  <div class="clients__item">
                    <img src="./assets/5.png">
                  </div>
                </div>
              </div>
              <div class="content-block__ten">
                <div class="need-a-project">
                  <div class="need-a-project__item">
                  <div class="project__title">
                    <h1 class="project__title__main-text">Need a Project?</h1>
                    <p class="project__title__text">Let us know what you're looking for in an agency. We'll take a look and see<br/>
    if this could be the start of something beautiful.</p>
                  </div>
                  <div class="project__form">
                    <form>
                      <div class="project__form__name_input">
                       <input class="project__form__name" type="text" placeholder="Your Name"/>
                      </div>
                      <div class="project__form__email_input">
                       <input class="project__form__email" type="email" placeholder="Your Email"><br/>
                      </div>
                      <div class="project__form__title_input">
                       <input class="project__form__title" type="text" placeholder="Your Title"><br/>
                      </div>
                      <div class="project__form__comment_textarea">
                      <textarea class="project__form__comment" placeholder="Your Comment"></textarea>
                      </div>
                       <div class="project__form__button"><button class="project__button ">SEND MESSAGE</button></div>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
              <div class="content-block__eleven">
                <div class="footer" id="contacts">
                  <div class="footer__item__one">
                    <h1 class="footer__item__company">Piroll Design, Inc.</h1>
                    <p class="footer__item__copyright">© 2017 Piroll. All rights reserved.<br/>
    Designed by robirurk.</p>
                  </div>
                  <div class="footer__item__two">
                    <ul>
                      <li>hello@pirolltheme.com</li>
                      <li>+44 987 065 908</li>
                    </ul>
                  </div>
                  <div class="footer__item__three">
                    <div class="footer__item__list">
                    <ul>
                      <li><a class="footer__list__item_active" href="">Projects</a></li>
                      <li><a class="footer__list__item_active" href="">About</a></li>
                      <li><a class="footer__list__item_active" href="">Services</a></li>
                      <li><a class="footer__list__item_active" href="">Carreer</a></li>
                    </ul>
                    <ul>
                      <li><a class="footer__list__item_active" href="">News</a></li>
                      <li><a class="footer__list__item_active" href="">Events</a></li>
                      <li><a class="footer__list__item_active" href="">Contact</a></li>
                      <li><a class="footer__list__item_active" href="">Legals</a></li>
                    </ul>
                    </div>
                  </div>
                  <div class="footer__item__four"><ul>
                      <li><a class="footer__list__item_active" href="">Facebook</a></li>
                      <li><a class="footer__list__item_active" href="">Twitter</a></li>
                      <li><a class="footer__list__item_active" href="">Instagram</a></li>
                      <li><a class="footer__list__item_active" href="">Dribbble</a></li>
                    </ul></div>
                </div>
        </div>
    </div>
        <div class="home" v-else>
          <div class="content-block__home__one">
            <header class="header__home">
                <div class="header__home__logo"></div>
                <div class="header__home__list">
                    <ul>
                        <li class="header__home__list__item"><a class="header__home__list__item_active" href="" v-on:click.prevent="changePageHome">Home</a></li>
                        <li class="header__home__list__item"><a class="header__home__list__item_active" href="">About</a></li>
                        <li class="header__home__list__item"><a class="header__home__list__item_active" href="">Contact</a></li>
                    </ul>
                </div>
            </header>
        </div>
        <div class="content-block__home__two">
            <div class="work__home">
            <div class="work__home__text">
            <h1 class="work__home__text__main">UI/UX & Graphic Designer</h1>
            <p class="work__home__text__discription">I am a Graphic & Web Designer based in New York, specializing<br/>
                    in User Interface Design and Development.</p>
                </div>
            </div>
            </div>
            <div class="work__hovers">
            <div class="work__item_dark"></div>
            <div class="work__item_light"></div>
            <div class="work__item_dark"></div>
            <div class="work__item_light"></div>
            <div class="work__item_light"></div>
            <div class="work__item_dark"></div>
            <div class="work__item_light"></div>
            <div class="work__item_dark"></div>
            <div class="work__item_dark"></div>
            <div class="work__item_light"></div>
            <div class="work__item_dark"></div>
            <div class="work__item_light"></div>
            </div>
            <div class="content-block__home__three">
            <div class="footer" id="contacts">
                    <div class="footer__item__one">
                      <h1 class="footer__item__company">Piroll Design, Inc.</h1>
                      <p class="footer__item__copyright">© 2017 Piroll. All rights reserved.<br/>
      Designed by robirurk.</p>
                    </div>
                    <div class="footer__item__two">
                      <ul>
                        <li>hello@pirolltheme.com</li>
                        <li>+44 987 065 908</li>
                      </ul>
                    </div>
                    <div class="footer__item__three">
                      <div class="footer__item__list">
                      <ul>
                        <li><a class="footer__list__item_active" href="">Projects</a></li>
                        <li><a class="footer__list__item_active" href="">About</a></li>
                        <li><a class="footer__list__item_active" href="">Services</a></li>
                        <li><a class="footer__list__item_active" href="">Carreer</a></li>
                      </ul>
                      <ul>
                        <li><a class="footer__list__item_active" href="">News</a></li>
                        <li><a class="footer__list__item_active" href="">Events</a></li>
                        <li><a class="footer__list__item_active" href="">Contact</a></li>
                        <li><a class="footer__list__item_active" href="">Legals</a></li>
                      </ul>
                      </div>
                    </div>
                    <div class="footer__item__four"><ul>
                        <li><a class="footer__list__item_active" href="">Facebook</a></li>
                        <li><a class="footer__list__item_active" href="">Twitter</a></li>
                        <li><a class="footer__list__item_active" href="">Instagram</a></li>
                        <li><a class="footer__list__item_active" href="">Dribbble</a></li>
                      </ul></div>
                  </div>
                </div>
        </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  data() {
    return {
      slideIndex: 2,
      page: true,
      items: [
{ action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
        ]
      }
    },



  components: {Carousel,
    Slide},
  methods: {
    changePage: function() {
      this.page = false
    },
    changePageHome: function() {
      this.page = true
    }
    // currentSlide: function(slideIndex) {
    //   slideIndex = this.slideIndex
    //   showSlides(slideIndex)
    //   function showSlides(n){
    //     var i;
    //     var slides = document.getElementsByClassName("testimonials__item_change");
    //     var dots = document.getElementsByClassName("pagination");
    //    if (n > slides.length) {slideIndex = 1} 
    //    if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none"; 
    //    }
    //    console.log(slides.length)
    //    for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   console.log(dots.length)
    //   slides[slideIndex-1].style.display = "block"; 
    //    dots[slideIndex-1].className += " active";
    //   }
    // },
   
  },
  computed: {

  }
}
</script>

<style>

* {
  margin: 0;
  box-sizing: border-box;
}
h1,button {
  font-family: 'Montserrat',sans-serif;
  color: rgb(25, 25, 25)
}
p {
  font-family: 'Nunito Sans', sans-serif;
}
button::-moz-focus-inner 
{
  border: 0;
}
li { 
  list-style-type: none;
}
a {
  text-decoration: none;
}
input, textarea {
  font-family: 'Nunito Sans', sans-serif;
}
.content-block__one{
    background-color: #E9E9E9;
    height: 670px;
    width: 100%;
}
.header {
  width: 1170px;
  height: 65px;
  margin: 0 auto;
}
.logo.header__logo {
  margin-top: 39px;
  background-image: url("./assets/logo.png");
  width: 31px;
  height: 25px;
 float: left;
 
}
.header__list.list {
  float: right;
}
.list__item {
  margin-top: 44px;
  padding-left: 30px;
  display: inline-block;
  text-transform: uppercase; 
  font-weight: bold;
  font-family: 'Montserrat',sans-serif;
}

.list__item_active {
   color: #191919;
}
.list__item_active:hover {
   text-decoration: none;
   color: #10c9c3;
}
.banner {
  width: 1170px;
  margin: 180px auto;
  height: 437px; 
}
.banner__item {
  width: 500px;
  float: right;
}
.banner__item__main-text {
  font-size: 39px;
  margin: 0;
}
.banner__item__text {
  margin-top: 32px;
  font-size: 18px;
  line-height: 1.8;
  color: rgb(120, 120, 120);
}
.banner__item__button {
  margin-top: 40px;
  width: 180px;
  height: 55px;
  background: #10c9c3;
  border: 0;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  
}
.banner__item__button:active {
  -webkit-box-shadow: inset 10px 10px 47px -8px rgba(0,0,0,0.5);
-moz-box-shadow: inset 10px 10px 47px -8px rgba(0,0,0,0.5);
box-shadow: inset 10px 10px 47px -8px rgba(0,0,0,0.5)
}
.content-block__two{
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about__item {
  width: 650px;
  height: 220px;
}
.about__item__main-text {
  text-align: center;
  font-size: 30px;
}
.about__item__text {
  margin-top: 40px;
  text-align: center;
  font-size: 16px;
  word-wrap: break-word;
  line-height: 1.7;
  color: rgb(120, 120, 120);
}
.about__img {
  margin-top: 40px;
  text-align: center;
}
.content-block__three {
  width: 100%;
  height: 570px;
  display: flex;
  flex-direction: row

}
.content-block__three_first-half {
  background-color: #f8f9f9;
  height: 570px;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.content-block__three_second-half {
  background-color: #e9e9e9;
  height: 570px;
  width: 50%;
}
.skills__item__main-text {
  font-size: 30px;
}
.skills__item__bar-one, .skills__item__bar-two, .skills__item__bar-three {
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 40px;
}
.skills__bar-one, .skills__bar-two, .skills__bar-three {
 margin-top:20px;
}
.skills {
  width: 585px;
}
.content-block__four {
  background-color: #10c9c3;
 
}
.numbers {
  width: 1170px;
  margin:  auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 240px;
  color: #fff;
}
.numbers__item {
  width: 262.5px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;

}
.numbers__text {
  margin-left: 25px;
}
.numbers__text__count {
  font-size: 18px;
}
.numbers__text__discription {
  margin-top: 16px;
  font-size: 12px;
  text-transform: uppercase;
}
.numbers__icon {
  margin-top:8px;
}
.content-block__five {
  height: 700px;
}
.work {
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.work__item__dark_active {
  height: 300px;
  width: 25%;
  background-color: #838383;
  flex-grow: 1;
  cursor: pointer;
}
.work__item__light_active {
  height: 300px;
  width: 25%;
  background-color:#dddddd;
  flex-grow: 1;
  cursor: pointer;
}

.work__item__dark_active:hover {
  background-color: rgb(20, 20, 20);
  opacity: 0.851;
  background-image: url("./assets/look.svg");
  background-repeat: no-repeat;
  background-position: center center;
  flex-grow: 1;
}
.work__item__light_active:hover {
  background-color: rgb(20, 20, 20);
  opacity: 0.851;
  background-image: url("./assets/look.svg");
  background-repeat: no-repeat;
  background-position: center center;
  flex-grow: 1;
}

.work__load-more {
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.work__load-more__text {
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  color: #9e9e9e;
}

.content-block__six {
  width: 100%;
  height: 928px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.work-process {
  width: 1170px;
  text-align: center;
}
.work-process__title {
  width: 520px;
  margin: auto;
}
.work-process__title__main-text {
  font-size: 30px;
}
.work-process__title__text {
  color: rgb(120, 120, 120);
  margin-top: 40px;
  font-size: 16px;
  line-height: 1.7;
}
.work-process__video {
  margin-top: 57px;
  width: 100%;
  height: 575px;
  background-color: #e9e9e9;
  background-image: url("./assets/playicon.png");
  background-repeat: no-repeat;
  background-position: center center;
}
.content-block__seven {
  width: 100%;
  height: 538px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
}
.services {
  width: 1170px;
  height: 370px;;
  margin:auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.services__item {
  width: 262.5px;
  text-align: center;
}
.services__text__title {
  padding-top:30px;
  font-size: 12px;
  color: rgb(25, 25, 25);
  text-transform: uppercase;
  font-weight: bold;
}
.services__text__discription {
  padding-top:20px;
  font-size: 16px;
  color: #787878;
  line-height: 1.5;
}

.content-block__nine {
  width: 100%;
}
.clients {
  width: 1170px;
  height: 200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.clients__item {
  width: 234px;
  display:flex;
  justify-content: center;
}
.content-block__ten {
  height: 750px;
  width: 100%;
  background: #f5f5f5;
}
.need-a-project {
  width: 1170px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project__form__name_input {
  float: right;
}
.project__form {
  margin-top: 30px;
}
.need-a-project__item {
  width: 670px;
}
.project__title {
  text-align: center;
}
.project__title__main-text {
  font-size: 30px;
}

.project__title__text {
  font-size: 16px;
  color: rgb(120, 120, 120);
  line-height: 1.5;
  margin-top: 40px;
}
.project__form__name {
  width: 320px;
  height: 48px;
  border: 0;
  padding: 20px;
}
.project__form__email {
   width: 320px;
  height: 48px;
  border: 0;
  padding: 20px;
}
.project__form__title {
  width: 670px;
  height: 48px;
  margin-top: 30px;
  padding: 20px;
  border: 0;

}
.project__form__comment {
  width: 670px;
  height: 170px;
  margin-top: 30px;
  border: 0;
  padding: 20px;
}
.project__button {
  background: #10c9c3;
  border: 0;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  width: 180px;
  height: 54px;
  margin-top: 30px;
}
.project__form__button {
  display: flex;
  justify-content: center;
}
.project__button:active {
  -webkit-box-shadow: inset 10px 10px 47px -8px rgba(0,0,0,0.5);
-moz-box-shadow: inset 10px 10px 47px -8px rgba(0,0,0,0.5);
box-shadow: inset 10px 10px 47px -8px rgba(0,0,0,0.5)
}

.content-block__eleven {
  background-color: rgb(20, 20, 20);
  height: 284px;
  width: 100%;
  color: #fff;
}
.footer {
  width: 1170px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: rgb(188, 188, 188);
  line-height: 1.6;
  text-align: left;
  flex-basis: 40% 25% 25% 10%;
 

}
.footer__item__list {
  display: flex;
  flex-direction: row;
}
.footer__item__company { 
  color: #fff;
  font-size: 18px;
  font-family: 'Nunito Sans', sans-serif;
}
.footer__item__two {
  font-family: 'Nunito Sans', sans-serif;
}
.footer__item__copyright { 
  margin-top: 30px;
  font-size: 15px;
  font-family: 'Nunito Sans', sans-serif;
}
.footer__list__item_active {
  color: rgb(188, 188, 188);
  font-family: 'Nunito Sans', sans-serif;
}
.footer__item__one {flex-basis: 40%;}
.footer__item__two {flex-basis: 25%;font-size: 15px;}
.footer__item__three {flex-basis: 25%;font-size: 15px;}
.footer__item__four {flex-basis: 10%;font-size: 15px;}


.content__block__eight {
  width: 100%;
  height: 500px;
  background-color: #10c9c3;
  display: flex;
  align-items: center;
  justify-content: center;  
}
.testimonials {
max-width: 1170px;
}
.testimonial__item {
  width: 570px;
}
.carousel__item {
  text-align: center;
  margin-bottom: 120px;
  
}
.carousel {
  width: 832px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.carousel__item__title {
  width: 832px;
  font-size: 20px;
  font-family: 'Montserrat',sans-serif;
  color: #fff;
}
.carousel__item__text {
  width: 832px;
  margin-top: 40px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Montserrat',sans-serif;
}
.header__home {
width: 1170px;
margin: 0 auto;
height: 100px;

}   
.header__home__logo {
margin-top: 39px;
background-image: url("./assets/logo.png");
width: 31px;
height: 25px;
float: left;
}
.header__home__list {
float: right;
}
.header__home__list__item {
padding-left: 30px;
display: block;
text-transform: uppercase; 
font-weight: bold;
font-family: 'Montserrat',sans-serif;
display: inline-block;
margin-top: 44px;
}
.header__home__list__item_active {
color: #191919;
}
.header__home__list__item_active:hover {
text-decoration: none;
color: #10c9c3;
}
.content-block__home__two {
width: 100%;
height: 314px;
background-color: #f6f6f6;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.work__home {
width: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

}
.work__home__text__discription {
margin-top: 40px;
line-height: 1.5;
}
.work__hovers {
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
}
.work__item_dark {
width: 25%; 
background-color: #838383;
height: 300px;
}
.work__item_light {
width: 25%; 
background-color: rgb(221, 221, 221);
height: 300px;
}
.work__item_dark:hover {
background-color:#10c9c3;
opacity: 0.851;
background-image: url("./assets/look.svg");
background-repeat: no-repeat;
background-position: center center;
flex-grow: 1;
}
.work__item_light:hover {
background-color: #10c9c3;
opacity: 0.851;
background-image: url("./assets/look.svg");
background-repeat: no-repeat;
background-position: center center;
flex-grow: 1;
}
.content-block__home__three {
background-color: rgb(20, 20, 20);
height: 284px;
width: 100%;
color: #fff;
}


@media (max-width: 575px) {
  .header__home {
    width: 100%;
    height: 150px;
    display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
    }   
    .header__home__logo {
    margin-top: 39px;
    width: 31px;
    height: 25px;
    }
    .header__home__list {
        display: flex;
       flex-direction: column;
    }
    .header__home__list__item {
        margin-top: 10px;
        padding-left: 30px;
        display: block;
        text-align: center;
        text-transform: uppercase; 
        font-weight: bold;
        font-family: 'Montserrat',sans-serif;
    }
   
    .content-block__home__two {
    width: 100%;
    
    }
  
    
    
    .work__item_dark {
    width: 100%; 
    background-color: #838383;
    height: 300px;
    }
    .work__item_light {
    width: 100%; 
    background-color: rgb(221, 221, 221);
    height: 300px;
    }
    
    
    .content-block__one{
        background-color: #E9E9E9;
        height: 670px;
        width: 100%;
    }
    .header {
      width: 100%;
      height: 150px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
    
    }
    .logo.header__logo {
      margin-top: 10px;
      background-image: url("./assets/logo.png");
      width: 31px;
      height: 25px;
      float: left;
    }
    .header__list.list {
       display: flex;
       flex-direction: column;
    }
    .list__item {
      margin-top: 10px;
      padding-left: 30px;
      display: block;
      text-align: center;
      text-transform: uppercase; 
      font-weight: bold;
      
    }
    
   
    .banner {
      width: 100%;
      margin: 60px auto;
      height: 437px; 
    }
    .banner__item {
      width: 100%;
      margin-top:30px;
      text-align: center;
    }
      .about__item {
        width: 100%;
      }
      .content-block__three {
        width: 100%;
        height: 570px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .content-block__three_first-half {
        width: 100%;
      }
      .content-block__three_img {
        display: none;
      }
      
      .skills__bar-one, .skills__bar-two, .skills__bar-three {
       margin-top:20px;
       width: 100%;
      }
      .skills {
        width: 100%;
      }
      .content-block__four {
        background-color: #10c9c3;
       
      }
      .numbers {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        height: 500px;
      }
      .numbers__item {
        margin-top: 30px;
      }
      .numbers__text {
        margin-left: 25px;
      }
      .content-block__five {
        height: 2400px;
      }
      .work__item__dark_active {
        width: 100%;
      }
      .work__item__light_active {
        width: 100%;
      }
      .content-block__six {
        width: 100%;
        height: 928px;
       
      }
      .work-process {
        width: 100%;
      }
      .work-process__title {
        width: 100%;
      }
      .work-process__title__main-text {
        font-size: 30px;
      }
      .work-process__video {
        height: 300px;
      }
      .content-block__seven {
        width: 100%;
        height: 1500px;
      }
      .services {
        width: 100%;
        height: 370px;
        flex-flow: column;
        flex-wrap: none;
      }
      .services__item {
          margin-top:0px;
      }
      .content__block__eight {
        width: 100%;
        height: 500px;
        align-items: flex-start;
      }
      
      .testimonials {
max-width: 1170px;
}
.testimonial__item {
  width: 570px;
}
.carousel__item {
  text-align: center;
  margin-bottom: 0px;
  
}
.carousel {
  width: 300px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.carousel__item__title {
  width: 300px;
  font-size: 20px;
  font-family: 'Montserrat',sans-serif;
  color: #fff;
}
.carousel__item__text {
  width: 300px;
  margin-top: 40px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Montserrat',sans-serif;
}
      .content-block__nine {
        width: 100%;
      }
      .clients {
        width: 100%;
        height: 400px;
        flex-wrap: wrap;
      }
      .need-a-project {
        width: 100%;
        height: 100%;
      }
      .need-a-project__item {
        width: 100%;
      }
      .project__form__email {
          margin-top: 30px;
          width: 100%;
      }
      .project__form__name {
        width: 100%;
        
      }
      .project__form__name_input{
          width: 100%;
      }
      .project__form__title {
        width: 100%;
      }
      .project__form__comment {
        width: 100%;
      }
      .content-block__eleven {
        background-color: rgb(20, 20, 20);
        height: 100%;
        width: 100%;
        color: #fff;
      }
      .footer {
        width:100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: left;
      }
      .footer__item__list {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      }
      .footer__item__one {flex-basis: 100%;}
      .footer__item__two {flex-basis: 100%;font-size: 10px;}
      .footer__item__three {flex-basis: 100%;font-size: 10px;}
      .footer__item__four {flex-basis: 100%;font-size: 10px;}
      
    
}
@media (min-width: 576px) and (max-width: 767px){
  .content-block__home__one {
        background-color: #E9E9E9;
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .header__home {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        }   
        .header__home__logo {
        margin-top: 39px;
        width: 31px;
        height: 25px;
        }
        .header__home__list {
            display: flex;
           flex-direction: column;
        }
        .header__home__list__item {
            margin-top: 10px;
            padding-left: 30px;
            display: block;
            text-align: center;
            text-transform: uppercase; 
            font-weight: bold;
            font-family: 'Montserrat',sans-serif;
        }
       
        .content-block__home__two {
        width: 100%;
        
        }
      
        
        
        .work__item_dark {
        width: 50%; 
        background-color: #838383;
        height: 300px;
        }
        .work__item_light {
        width: 50%; 
        background-color: rgb(221, 221, 221);
        height: 300px;
        }
    .content-block__one{
        background-color: #E9E9E9;
        height: 670px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .header {
        width: 100%;
        height: 150px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
      
      }
      .logo.header__logo {
        margin-top: 10px;
        background-image: url("./assets/logo.png");
        width: 31px;
        height: 25px;
        float: left;
      }
      .header__list.list {
         display: flex;
         flex-direction: column;
      }
      .list__item {
        margin-top: 10px;
        padding-left: 30px;
        display: block;
        text-align: center;
        text-transform: uppercase; 
        font-weight: bold;
        
      }
    .banner {
      width: 576px;
      margin: 60px auto;
      height: 437px; 
    }
    .banner__item {
      width: 576px;
      margin-top:30px;
      text-align: center;
    }
      .about__item {
        width: 576px;
      }
      .content-block__three {
        width: 100%;
        height: 570px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #f8f9f9;
      }
      .content-block__three_first-half {
        width: 576px;
      }
      .content-block__three_img {
        display: none;
      }
      
      .skills__bar-one, .skills__bar-two, .skills__bar-three {
       margin-top:20px;
       width: 100%;
      }
      .skills {
        width: 576px;
      }
      .content-block__four {
        background-color: #10c9c3;
       
      }
      .numbers {
        width: 575px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        flex-wrap: wrap;
        height: 300px;
      }
      .numbers__item {
        margin-top: 30px;
        width: 200px;
      }
      .numbers__text {
        margin-left: 25px;
      }
      .content-block__five {
        height: 1200px;
      }
      .work__item__dark_active {
        width: 50%;
      }
      .work__item__light_active {
        width: 50%;
      }
      .content-block__six {
        width: 100%;
        height: 928px;
       
      }
      .work-process {
        width: 575px;
      }
      .work-process__title {
        width: 100%;
      }
      .work-process__title__main-text {
        font-size: 30px;
      }
      .work-process__video {
        height: 300px;
      }
      .content-block__seven {
        width: 100%;
        height: 740px;
      }
      .services {
        width: 575px;
        height: 370px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 20px;
      }
      .services__item {
          margin-top:0px;
          flex-basis: 50%;
          
      }
      .content__block__eight {
        width: 100%;
        height: 500px;
        align-items: center;
      }
      .testimonials {
max-width: 1170px;
}
.testimonial__item {
  width: 550px;
}
.carousel__item {
  text-align: center;
  width: 550px;
  margin-bottom: 0px;
  
}
.carousel {
  width: 550px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.carousel__item__title {
  width: 550px;
  font-size: 20px;
  font-family: 'Montserrat',sans-serif;
  color: #fff;
}
.carousel__item__text {
  width: 550px;
  margin-top: 40px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Montserrat',sans-serif;
}
      .content-block__nine {
        width: 100%;
      }
      .clients {
        width: 100%;
        height: 400px;
        flex-wrap: wrap;
      }
      .need-a-project {
        width: 575px;
        height: 100%;
      }
      .need-a-project__item {
        width: 100%;
      }
      .project__form__email {
          margin-top: 30px;
          width: 100%;
      }
      .project__form__name {
        width: 100%;
        
      }
      .project__form__name_input{
          width: 100%;
      }
      .project__form__title {
        width: 100%;
      }
      .project__form__comment {
        width: 100%;
      }
      .content-block__eleven {
        background-color: rgb(20, 20, 20);
        height: 100%;
        width: 100%;
        color: #fff;
      }
      .footer {
        width:575px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: none;
        text-align: left;
      }
      .footer__item__list {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .footer__item__one {flex-basis: 40%;}
      .footer__item__two {flex-basis: 25%;font-size: 10px;}
      .footer__item__three {flex-basis: 25%;font-size: 10px;}
      .footer__item__four {flex-basis: 10%;font-size: 10px;}
 }
 @media (min-width: 768px) and (max-width: 1023px){
    .content-block__home__one {
        background-color: #E9E9E9;
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .header__home {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        }   
        .header__home__logo {
        margin-top: 39px;
        width: 31px;
        height: 25px;
        }
        .header__home__list {
            display: flex;
           flex-direction: column;
        }
        .header__home__list__item {
            margin-top: 10px;
            padding-left: 30px;
            display: block;
            text-align: center;
            text-transform: uppercase; 
            font-weight: bold;
            font-family: 'Montserrat',sans-serif;
        }
       
        .content-block__home__two {
        width: 100%;
        
        }
      
        
        
        .work__item_dark {
        width: 33.33%; 
        background-color: #838383;
        height: 300px;
        }
        .work__item_light {
        width: 33.33%;
        background-color: rgb(221, 221, 221);
        height: 300px;
        }
    .content-block__one{
        background-color: #E9E9E9;
        height: 670px;
        width: 100%;
    }
    .header {
      width: 100%;
      height: 65px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    
    }
    .logo.header__logo {
      margin-top: 10px;
      background-image: url("./assets/logo.png");
      width: 31px;
      height: 25px;
      float: left;
    }
    .header__list.list {
       float: right;
    }
    .list__item {
      margin-top: 10px;
      padding-left: 30px;
      display: 0;
      text-align: center;
      text-transform: uppercase; 
      font-weight: bold;
      
    }
    
    .list__item_active {
       color: #191919;
    }
    .list__item_active:hover {
       text-decoration: none;
       color: #10c9c3;
    }
    .banner {
      width: 100%;
      margin: 60px auto;
      height: 437px; 
    }
    .banner__item {
      width: 100%;
      margin-top:30px;
      text-align: center;
    }
      .about__item {
        width: 100%;
      }
      .content-block__three {
        width: 100%;
        height: 570px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        background-color: #f8f9f9;
      }
      .content-block__three_first-half {
        width: 768px;
      }
      .content-block__three_img {
        display: none;
      }
      
      .skills__bar-one, .skills__bar-two, .skills__bar-three {
       margin-top:20px;
       width: 100%;
      }
      .skills {
        width: 100%;
      }
      .content-block__four {
        background-color: #10c9c3;
       
      }
      .numbers {
        width: 768px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        height: 300px;
      }
      .numbers__item {
        margin-top: 30px;
      }
      .numbers__text {
        margin-left: 25px;
      }
      .content-block__five {
        height: 600px;
      }
      .work__item__dark_active {
        width: 25%;
        height: 200px;
      }
      .work__item__light_active {
        width: 25%;
        height: 200px;
      }
      .content-block__six {
        width: 100%;
        height: 728px;
       
      }
      .work-process {
        width: 768px;
      }
      .work-process__title {
        width: 100%;
      }
      .work-process__title__main-text {
        font-size: 30px;
      }
      .work-process__video {
        height: 300px;
      }
      .content-block__seven {
        width: 100%;
        height: 538px;
      }
      .services {
        width: 768px;
        height: 370px;
        flex-flow: row;
        flex-wrap: wrap;
      }
      .services__item {
          margin-top:10px;
          width: 25%;
      }
      .content__block__eight {
        width: 100%;
        height: 500px;
        align-items: center;
        
      }
      .testimonials {
max-width: 1170px;
}
.testimonial__item {
  width: 770px;
}
.carousel__item {
  text-align: center;
  width: 770px;
  margin-bottom: 0px;
  
}
.carousel {
  width: 770px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.carousel__item__title {
  width: 770px;
  font-size: 20px;
  font-family: 'Montserrat',sans-serif;
  color: #fff;
}
.carousel__item__text {
  width: 770px;
  margin-top: 40px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Montserrat',sans-serif;
}
      .content-block__nine {
        width: 100%;
      }
      .clients {
        width: 768px;
        height: 300px;
        flex-wrap: wrap;
      }
      .need-a-project {
        width: 768px;
        height: 100%;
      }
      .need-a-project__item {
        width: 100%;
      }
      .project__form__email {
          width: 100%;
      }
      .project__form__email_input {
          width: 50%;
      }
      .project__form__name {
        width: 100%;
      }
      .project__form__name_input{
          width: 50%;
      }
      .project__form__title {
        width: 100%;
      }
      .project__form__comment {
        width: 100%;
      }
      .content-block__eleven {
        height: 100%;
        width: 100%;
      }
      .footer {
        width:768px;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        /* flex-wrap: wrap; */
        text-align: left;
      }
      .footer__item__list {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .footer__item__one {flex-basis: 40%;}
      .footer__item__two {flex-basis: 25%;font-size: 12px;}
      .footer__item__three {flex-basis: 25%;font-size: 12px;}
      .footer__item__four {flex-basis: 10%;font-size: 12px;}
    
 }
 @media (min-width: 1024px) and (max-width: 1170px){
   .content-block__home__one {
        background-color: #E9E9E9;
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .header__home {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        }   
        .header__home__logo {
        margin-top: 39px;
        width: 31px;
        height: 25px;
        }
        .header__home__list {
            display: flex;
           flex-direction: column;
        }
        .header__list__item {
            margin-top: 10px;
            padding-left: 30px;
            display: block;
            text-align: center;
            text-transform: uppercase; 
            font-weight: bold;
            font-family: 'Montserrat',sans-serif;
        }
       
        .content-block__home__two {
        width: 100%;
        
        }
      
        
        
        .work__item_dark {
        width: 25%; 
        background-color: #838383;
        height: 300px;
        }
        .work__item_light {
        width: 25%; 
        background-color: rgb(221, 221, 221);
        height: 300px;
        }
     .header,.banner, .need-a-project,.work-process,.testimonials, .about, .footer, .clients, .numbers, .services, .skills {
         width: 1024px;
     }
     .work__item__dark_active {
        width: 25%;
        height: 200px;
      }
      .work__item__light_active {
        width: 25%;
        height: 200px;
      }
      .content-block__three {
        width: 100%;
        height: 570px;
        display: flex;
        flex-direction: row
      
      }
      .content-block__three_first-half {
        background-color: #f8f9f9;
        height: 570px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content-block__three_second-half {
        background-color: #e9e9e9;
        height: 570px;
        width: 50%;
      }
      .skills {
        width: 1024px;
      }
      .content-block__five {
        width: 100%;
        height: 100%;
      }
      .content-block__six {
        width: 100%;
        height: 928px;
      }
      .work-process {
        margin-top: 30px;
      }
      .content-block__seven {
        width: 100%;
        height: 538px;
      }
     
      .services__item {
          margin-top:10px;
          width: 25%;
      }
      .content__block__eight {
        width: 100%;
        height: 500px;
        align-items: center;
      }
      .testimonials {
max-width: 1170px;
}
.testimonial__item {
  width: 1000px;
}
.carousel__item {
  text-align: center;
  width: 1000px;
  margin-bottom: 0px;
  
}
.carousel {
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.carousel__item__title {
  width: 1000px;
  font-size: 20px;
  font-family: 'Montserrat',sans-serif;
  color: #fff;
}
.carousel__item__text {
  width: 1000px;
  margin-top: 40px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Montserrat',sans-serif;
}
 }
</style>
