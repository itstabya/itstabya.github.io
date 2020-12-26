import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Emoji from "../components/emoji"
import "../components/site.css"

import name from "../images/name.png"
import me from "../images/me.jpg"


export default function Index() {
  return (
    <Header>
        <img src={name} id="name"/>

      <Container>
          <div id="img-column">
            <img src={me} id="me-img" />
          </div>
          <div id="welcome-column">
            <h1> welcome to my slice of the Internet</h1>
          </div>
          <div id="body">
            <p> currently a third year undergraduate @ mit studying computer science, with interests in 
              visualization, play, interaction, and fascination. </p>
            <p> i'm on a gap semester for spring 2021, working on cool 
              stuff at <a href="http://clay.run">clay.run</a>!
            </p>
            <p> you can reach me at tanyang [at] mit [dot] edu. </p>
          </div>
      </Container>
     </Header>
  )
}
