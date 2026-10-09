import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import projects from "./Components/ProjectsList";
import ProjectFilter from "./Components/ProjectFilter";
import ListDisplay from "./Components/ListDisplay";
import AddProject from "./Components/AddProject";

function App() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <div>
      <ProjectFilter
        projects={projects}
        onFilterChange={(newList) => setFilteredProjects(newList)}
      />

      <ListDisplay projects={filteredProjects} />
      <AddProject
        onAddProject={(newProject) => setFilteredProjects([...filteredProjects, newProject])}
      />
    </div>
  );
}


export default App
