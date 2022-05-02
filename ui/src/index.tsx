import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeSquare, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin, faGithub, faEnvelopeSquare, faTimesCircle);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
