import React from "react";
import "./testimonials.css";
import img1 from "../../assets/avatar-anisha.png";
import img2 from "../../assets/avatar-ali.png";
import img3 from "../../assets/avatar-richard.png";
import img4 from "../../assets/avatar-shanai.png";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="testimonials_container container">
        <h2 className="testimonials_heading">What they've said</h2>
        <ul class="slider">
          <li>
            <img src={img1} alt="" />

            <div class="slider-content ">
              <h3 class="author">Anisha Li</h3>
              <p>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </li>
          <li>
            <img src={img2} alt="" />

            <div class="slider-content ">
              <h3 class="author">Ali Bravo</h3>
              <p>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
          </li>
          <li>
            <img src={img3} alt="" />

            <div class="slider-content ">
              <h3 class="author">Richard Watts</h3>
              <p>
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”{" "}
              </p>
            </div>
          </li>
          <li>
            <img src={img4} alt="" />

            <div class="slider-content ">
              <h3 class="author">Shanai Gough</h3>
              <p>
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.”{" "}
              </p>
            </div>
          </li>
        </ul>
        <button className="button"> Get Started</button>
      </div>
    </section>
  );
}

export default Testimonials;
