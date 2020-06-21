import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Emoji from "../components/emoji"
import "../components/site.css"

export default function Index() {
  return (
    <Header>
      <Container>
        <div>
          <h2>
            hello! <Emoji symbol="👋🏻" />
          </h2>
          <p>
            <b>
              <Emoji symbol="🙋🏻‍♀️" />
              I, Tanya:{" "}
            </b>
            I'm currently an incoming third year at MIT studying computer
            science and Asian studies and diaspora. I've also taken coursework
            in design and management. I've never physically taken something
            apart and put it back together successfully (oops, clumsy hands!),
            but I'm adept at dismantling the mediums we weave in and out of
            everyday to examine them critically in order to rebuild better, more
            considerate versions. Think the Internet, team dynamics, systems of
            power.
          </p>
          <p>
            <b>
              <Emoji symbol="🗄️" />
              Work:{" "}
            </b>
            I'm currently studying how technological innovation can sustain
            harmful social hierarchies at the MIT Media Lab. At MIT CSAIL, I'm
            examining the lifecycle of data visualizations concerning COVID-19
            and the online discourse surrounding them. To that degree, I'm also
            archiving and analyzing anti-Asian sentiments and trying to get a
            better idea of how the Internet fits into all of this.
          </p>
          <p>
            <b>
              <Emoji symbol="🔑" />
              Fun Bits:{" "}
            </b>{" "}
            I grew up in the San Gabriel Valley of Southern California, and my
            childhood upbringing in this area has shaped me in being
            unapologetically Asian-American. My first name is just the somewhat
            sum of my parents' last names – Tan and Yang! I also love to eat
            Noosa yogurt, engage in the serious sport of dogspotting, and take
            my 14 year-old beagle Happy out for very slow walks.
          </p>
          <p>See you later!</p>
        </div>
      </Container>
    </Header>
  )
}
