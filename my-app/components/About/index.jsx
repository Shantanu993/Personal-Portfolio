import React from 'react'

const About = () => {
return (
    <>
        <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src="./assets/experience.png"
                alt="experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>&lt;1 year <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>SRMIST&apos;26 <br/> Pursuing BTech in Computer Science</p>
            </div>
          </div>
          <div class="text-container">
            <p>
              I am an enthusiastic and self motivated individual with a strong
              passion for software development and a deep desire to make a
              positive impact through technology. I am actively working towards
              becoming a skilled software developer and honing my technical
              skills by continuously seeking opportunities to learn and grow.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#skills'"
      />
    </section>
    </>
  )
}

export default About