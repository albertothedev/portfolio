import { useState } from "react";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

type TProject = {
  name: "Minesweeper" | "Snake" | "Loldata" | "Taskout";
  image: string;
  shortDesc: string;
  longDesc: string;
  links: { demo: string | undefined; source: string | undefined };
};

export const App = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);

  return (
    <div className="app">
      <About />
      <Projects setSelectedProject={setSelectedProject} />
      <Contact />
      {selectedProject && (
        <Modal
          longDesc={selectedProject.longDesc}
          image={selectedProject.image}
          links={selectedProject.links}
          onClick={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default App;
