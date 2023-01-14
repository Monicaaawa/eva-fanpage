import * as React from "react"
import Seo from "../components/seo";
import OneLastKiss from "../audio/one-last-kiss.mp3";
/*
  https://github.com/goldfire/howler.js#documentation
*/
import { Howl } from 'howler'; 
import note from "../images/note.png";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const sound = new Howl({
  src: [ OneLastKiss ],
  loop: true,
  volume: 0.5
});

const Index = () => {
  return (
    <Layout>
      <section id="content">
        <div id="title">
          <section className="flex">
            <StaticImage src="https://occ-0-1123-360.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbwG-m7IraLErUf2tqSLBC8bjOQMCzqUmxhzRblVSvNpr-uJ-AA3EJGxlc8Qq3sJGOsia5cCZsCGlV_VDgbpOLr1xQSlmZMaLoXFdyLui8Tc.png?r=873"
             alt="title" height="400px" placeholder="blurred"/>
            <div id="player">
              <img src={note} alt="note" width="50px" height="50px" onClick= {() => sound.play()} aria-hidden="true" />
            </div>
          </section>

          <br></br>

          <div className="japanese">
            さようなら、<br></br>全てのエヴァンゲリオン。
          </div>

          <iframe width="550" height="275" src="https://www.youtube.com/embed/GZfuWMDEJpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

        <section id="intro">
          <div className="overlay">
            <div className="eva-heading">
              <h1 class="eva-heading__title">
                STORY
              </h1>
            </div>
            <div style={{paddingLeft:"350px"}}>
              In the year 2000, a global cataclysm known as Second Impact changed the world.<br></br>
              The event annihilated Antarctica and shifted the planet's axis, 
              resulting in catastrophic flooding and drastically altered climates worldwide.<br></br>
              The ensuing destruction and global refugee crisis created such extreme unrest 
              that nuclear exchanges broke out in mere days.<br></br>
              By the time the dust finally settled, half of Earth's human population had perished.<br></br><br></br>
              Fifteen years later, 14-year-old Shinji Ikari finds himself summoned to the fortress city 
              of Tokyo-3 by his estranged father, Gendo, for a single purpose:<br></br>
              to pilot a Humongous Mecha called an Evangelion in order to defend civilization 
              from physics-defying monstrosities known as Angels.<br></br>
              But can a young, damaged boy like Shinji bear the weight of humanity's survival?
            </div>
          </div>
        </section>

      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default Index;
