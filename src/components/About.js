import React from "react";
import author from "../components/me.JPG";

const About = () => {
  return (
    <div className="container-about">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="phota-wrap">
            <img className="profile-img" src={author} alt="me..."></img>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-header">About Me</h1>
          <p className="about-text">
            Hello I am Justin and I am 21 years old! I am a recent graduate of the Full Stack Coding
            Bootcamp at the University of Texas at Austin. I have experience in
            languages such as HTML, React.js and Bootstrap to build applications
            such as the one your viewing right now! I have been coding for about
            1 year now and have been doing many personal and educational
            projects to fine tune my skills as a developer. Aside from coding, I
            love to spend my time with hobbies of mine like tinkering with my
            computer as well as other electronics. I am also a dedicated
            musician. I play a variety of instruments such as trumpet, saxphone,
            piano and guitar. Lastly, my one true love is Video Games. I enjoy
            logging on and spending time with my friends on a good gaming
            session that may last for hours. All in all I am a very busy person.
            I like to fill my days with as many activities as possible all while
            becoming a better developer. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
