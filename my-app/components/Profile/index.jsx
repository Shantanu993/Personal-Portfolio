import React from 'react'

const Profile = () => {
  return (
    <>
        <section id="profile">
      <div class="section__pic-container">
        <img
          class="profile_pic"
          src="./assets/profile-pic.png"
          alt="Profile picture"
        />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Shantanu Gahtori</h1>
        <p class="section__text__p2">An Aspiring MERN Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('./assets/ShantanuResume.pdf')"
          >
            Download Resume
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="window.open('https://www.linkedin.com/in/shantanu-gahtori-52096a224/', '_blank');"
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            class="icon"
            onclick="window.open('https://github.com/Shantanu993', '_blank');"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile