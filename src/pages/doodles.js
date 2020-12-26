import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import welcome from "../images/doodles/welcome.png"
import doodles from "../images/doodles/doodles.png"

import aboutMe from "../images/doodles/about-me.jpg"
import jrFall from "../images/doodles/jrfall.jpg"

import sophYear from "../images/doodles/soph.jpg"
import maineFall19 from "../images/doodles/maine-fall19.jpg"

import acadiaSummer19 from "../images/doodles/acadia-summer19.jpg"
import sfSummer19 from "../images/doodles/sf-summer19.jpg"
// import homeSpring19 from "../images/doodles/home-spring19.jpg"
import bigFattiesSummer18 from "../images/doodles/bigfatties-summer18.jpg"
import seattleSummer18 from "../images/doodles/seattle-summer18.jpg"

const welcomeStyling = {
  width: '45%',
  minWidth: '45%'
}
export default function Doodles() {
  let slideIndex = 1;
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("img-doodle");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
  return (
    <Header>
              <img src={welcome} style={welcomeStyling}/>
              <img src={doodles} id="doodles"/>

      <Container>
        {/* <div class="doodle-body">
        <p> you've made it to the doodles page! currently figuring out a better way to display
          all of these, but for now, they're just chilling on this page. super simple hobby of mine,
          involving digging through my favorite pictures of a particular slice of time and doodling
          on top of them in notability. i'm personally inspired by color, so this is a helpful meditative
          hobby to ground myself.
        </p>
        </div> */}

        <p> you've made it to the doodles page! currently figuring out a better way to display
          all of these, but for now, they're just chilling on this page. super simple hobby of mine,
          involving digging through my favorite pictures of a particular slice of time and doodling
          on top of them in notability. i'm personally inspired by color, so this is a helpful meditative
          hobby to ground myself.
        </p>
        <img src={jrFall} class="img-doodle"/>
        <img src={sophYear} class="img-doodle"/>
        <img src={aboutMe} class="img-doodle"/>
        <p> from 2019 below!</p>
        <img src={maineFall19} class="img-doodle"/>
        <img src={acadiaSummer19} class="img-doodle"/>
        <img src={sfSummer19} class="img-doodle"/>
        {/* <img src={homeSpring19} class="img-doodle"/> */}

        <p> from 2018 below! </p>
        <img src={bigFattiesSummer18} class="img-doodle"/>
        <img src={seattleSummer18} class="img-doodle"/>

       


        {/* <div class="img-doodle-left"> <img src={jrFall} class="img-doodle"/></div>
        <div class="img-doodle-right"> <img src={sophYear} class="img-doodle"/></div>


        <div class="img-doodle-left"> <img src={aboutMe} class="img-doodle"/></div>
        <div class="img-doodle-right"> <img src={maineFall19} class="img-doodle"/></div>

        <div class="img-doodle-left"> <img src={acadiaSummer19} class="img-doodle"/></div>
        <div class="img-doodle-right"> <img src={sfSummer19} class="img-doodle"/></div>

        <div class="img-doodle-left"> <img src={homeSpring19} class="img-doodle"/></div>
        <div class="img-doodle-right"> <img src={bigFattiesSummer18} class="img-doodle"/></div>

        <div class="img-doodle-left"> <img src={seattleSummer18} class="img-doodle"/></div> */}
      </Container>
     </Header>
  )
}