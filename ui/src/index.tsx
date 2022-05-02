import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeSquare, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin, faGithub, faEnvelopeSquare, faTimesCircle);

const rootElement = document.getElementById("root");
if (rootElement === null) throw new Error("Root container missing in index.html");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
