import react from "../assets/react.svg";
import vue from "../assets/vue.svg";
import angular from "../assets/angular.svg";
import nodejs from "../assets/nodejs.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import firebase from "../assets/firebase.svg";
import sass from "../assets/sass.svg";
import docker from "../assets/docker.svg";
import aws from "../assets/aws.svg";
import express from "../assets/express.svg";
import typescript from "../assets/typescript.svg";

const About = (): JSX.Element => (
  <div className="about">
    <h1 className="about__title">Nice to meet you!</h1>

    <p className="about__personalDescription">
      I'm an aspiring full stack TypeScript developer from Spain looking for a job and willing to relocate.
    </p>

    <p className="about__skillsDescription">
      I like to build web applications using popular frontend frameworks such as <span className="about__skillsDescription__skill">React</span> and{" "}
      <span className="about__skillsDescription__skill">Vue</span>, and <span className="about__skillsDescription__skill">Node</span> and{" "}
      <span className="about__skillsDescription__skill">Express</span> for the backend, using{" "}
      <span className="about__skillsDescription__skill">TypeScript</span> across the board. When a database is required, I like to use{" "}
      <span className="about__skillsDescription__skill">MySQL</span> for relational data and{" "}
      <span className="about__skillsDescription__skill">MongoDB</span> or <span className="about__skillsDescription__skill">Firebase</span> as
      non-relational alternatives. I like to containerize all of my apps with <span className="about__skillsDescription__skill">Docker</span> to
      simplify the development process. I deploy everything on <span className="about__skillsDescription__skill">AWS</span>.
    </p>

    <div className="about__skills">
      <img className="about__skills__skill" src={sass} alt="Sass logo" title="Sass" />
      <img className="about__skills__skill" src={react} alt="React logo" title="React" />
      <img className="about__skills__skill" src={vue} alt="Vue logo" title="Vue" />
      <img className="about__skills__skill" src={typescript} alt="TypeScript logo" title="TypeScript" />
      <img className="about__skills__skill" src={nodejs} alt="NodeJS logo" title="NodeJS" />
      <img className="about__skills__skill" src={express} alt="Express logo" title="Express" />
      <img className="about__skills__skill" src={mysql} alt="MySQL logo" title="MySQL" />
      <img className="about__skills__skill" src={mongodb} alt="MongoDB logo" title="MongoDB" />
      <img className="about__skills__skill" src={firebase} alt="Firebase logo" title="Firebase" />
      <img className="about__skills__skill" src={docker} alt="Docker logo" title="Docker" />
      <img className="about__skills__skill" src={aws} alt="AWS logo" title="AWS" />
    </div>
  </div>
);

export default About;
