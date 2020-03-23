import React from "react"
import ava from "../../images/about-ava.svg"

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row about-wrapper">
          <img src={ava} className="mx-ava" height="230" alt="About-us-img" />
          <div className="text-center mr-md-4">
            Hi, I'm Sarah. <br></br>
            Building startups and teams, currently based in 📍Hong Kong via San
            Francisco, New York City, London, and Chicago. Alumna of Columbia
            University and Oxford University. Intrigued by design, traveling,
            photography, classical music, strategy, writing, art, armchair
            philosophy, fabulous food, and even better conversations. Seeking to
            be inspired, to envision the unlikely, to work hard for things that
            are worth it, and to be surrounded by those who bring out the best
            in me. Say hi on Twitter @sarahlichang
          </div>
        </div>
      </div>
    </section>
  )
}
