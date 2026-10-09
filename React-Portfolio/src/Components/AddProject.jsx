import React, { useState } from "react";

function AddProject({ onAddProject }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("web"); // default category

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      name,
      description,
      link,
      category,
      image: image || "https://placehold.co/300x200?text=Project"
    };

    onAddProject(newProject);

    // Reset form
    setName("");
    setDescription("");
    setLink("");
    setImage("");
    setCategory("web");
  };

  return (
    <form onSubmit={handleSubmit} className="add-project-form">
      <p>Add a new project:</p>

      <label>
        Project Name:
        <input
          type="text"
          value={name}
          placeholder="My Cool Project"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Description:
        <textarea
          value={description}
          placeholder="Describe your project..."
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label>
        Project Link:
        <input
          type="text"
          value={link}
          placeholder="https://example.com"
          onChange={(e) => setLink(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="web">Web</option>
          <option value="react">React</option>
          <option value="game">Game</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Image URL:
        <input
          type="text"
          value={image}
          placeholder="https://example.com/project.png"
          onChange={(e) => setImage(e.target.value)}
        />
      </label>

      {image && (
        <div className="project-preview">
          <img src={image} alt="project preview" className="project-image-preview" />
        </div>
      )}

      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProject;
