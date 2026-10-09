import React, { useState, useEffect } from "react";

function ProjectFilter({ projects, onFilterChange }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("none");

  useEffect(() => {
    let result = [...projects];

    // Search filter
    if (search.trim() !== "") {
      result = result.filter(project =>
        project.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter (only applies if your projects have categories)
    if (category !== "all") {
      result = result.filter(project => project.category === category);
    }

    // Sorting
    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "id") {
      result.sort((a, b) => a.id - b.id);
    }
    // If sortBy === "none", do nothing — keep filtered order

    onFilterChange(result);
  }, [search, category, sortBy, projects]);

  return (
    <div className="project-filter">
      {/* Search */}
      <label>
        Search Projects:
        <input
          type="text"
          value={search}
          placeholder="Search by name..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      {/* Category Filter */}
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="web">Web</option>
          <option value="react">React</option>
          <option value="game">Game</option>
          <option value="other">Other</option>
        </select>
      </label>

      {/* Sort */}
      <label>
        Sort By:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="id">ID</option>
        </select>
      </label>
    </div>
  );
}

export default ProjectFilter;
