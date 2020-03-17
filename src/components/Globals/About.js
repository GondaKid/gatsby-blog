import React from "react"
import ava from "../../images/about-ava.svg"
export default function AboutUs() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="col-10 col-sm-8 mx-auto">
          <div className="row">
            <div className="col-4">
              <img src={ava} className="w-100" alt="About-us-img" />
            </div>
            <div className="col-8 d-flex align-items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis
              sunt aut dolorem magnam error laudantium nam tempore, voluptatibus
              odit eum doloribus quaerat nihil labore incidunt laborum
              accusantium iste corrupti corporis molestias fugit cumque officia
              sit. Ad animi ducimus perspiciatis, qui laudantium illum
              praesentium distinctio? Provident recusandae quo omnis nesciunt!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              totam?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quo, vel?
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
