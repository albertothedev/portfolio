import react from "../assets/react.svg";
import vue from "../assets/vue.svg";
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

    <p className="about__description">
      I'm a full-stack developer with a passion for learning new things. I build web applications using popular frameworks such as React and Vue for
      the frontend and Express for the backend, with TypeScript across the board. When a database is required, I use MySQL for relational data and
      MongoDB or Firebase as non-relational alternatives. I containerize all of my apps with Docker to simplify the development process and I deploy
      everything on AWS.
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
