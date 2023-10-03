import React from 'react'

const Skills = () => {
  return (
    <div>
        <section id="skills">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Skills</h1>
      <div class="skills-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="skills-sub-title">Frontend</h2>
            <div class="article-container">
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>React JS</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>TailwindCSS</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>Bootstrap 5</h3>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="skills-sub-title">Backend</h2>
            <div class="article-container">
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>Express JS</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="skills icon"
                  class="icon"
                />
                <div>
                  <h3>Git &amp; GitHub</h3>
                </div>
              </article>
              
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
    </div>
  )
}

export default Skills