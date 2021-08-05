import React, { useState } from "react";
import ReactDOM from "react-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import App from "./App";

import "./styles/main.scss";

// import reportWebVitals from "./reportWebVitals";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeSquare, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin, faGithub, faEnvelopeSquare, faTimesCircle);

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="app">
      <About />
      <Projects />
      <Contact />
    </div> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
