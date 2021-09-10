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
            <img src={me} id="me-img"/>
          </div>
          <div id="welcome-column">
            <h1> welcome to my slice of the Internet</h1>
          </div>
          <div id="body">
            <p> Hey there! I'm currently a senior @ MIT studying computer science, with interests in 
              visualization, play, interaction, and fascination. I'm also currently looking for new grad (2022) product roles, and I resonate deeply
              with consumer and design-driven products. I am deeply inspired by the magic of being a kid and am constantly working to make younger versions of 
              me proud – if you're interested in similar personal philosophies, please reach out!</p>
            <p> This past summer, I worked at Roblox as a product management intern, specifically on the Social team in establishing more autonomy and control for users to play in the social capacities they personally thrive in.
              In the past, I've supported product efforts at <a href="https://kalepa.co/">Kalepa</a>, implemented culturally responsive lesson plans at <a href="https://www.almostfun.org/">Almost Fun</a>, and published in 
              <a href="https://dl.acm.org/doi/10.1145/3411764.3445211">CHI 2021</a> with the <a href="http://vis.csail.mit.edu/">MIT Visualization Group</a> (our work won a Best Paper Honourable Mention!).
            </p>
            <p> <a href="https://twitter.com/itstabya">twitter</a> | <a href="https://www.linkedin.com/in/yangtanya125/">linkedin</a> | tanyang [at] mit [dot] edu </p>
          </div>
      </Container>
     </Header>
  )
}
