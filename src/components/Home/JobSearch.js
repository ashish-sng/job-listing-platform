import React, { useState } from "react";
import "./JobSearch.css";
import searchIcon from "../../assets/icons/searchIcon.png";

const JobSearch = () => {
  const [options, setOptions] = useState([
    "JS",
    "HTML",
    "CSS",
    "ReactJS",
    "NodeJS",
    "Python",
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  // const [selectedSkill, setSelectedSkill] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e) => {
    const skill = e.target.value;
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = selectedSkills.filter((s) => s !== skill);
    setSelectedSkills(updatedSkills);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search operation with the search term and selected skills
    console.log("Search Term:", searchTerm);
    console.log("Selected Skills:", selectedSkills);
  };

  return (
    <div className="job-search">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className="search-bar">
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Type any job title"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </form>
      <div className="job__search__footer">
        <div className="select-skills">
          <select value={selectedSkills} onChange={handleSelectChange}>
            <option value="">Select Skill</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
        <div className="selected-skills">
          {selectedSkills.map((skill) => (
            <div className="selected-skill" key={skill}>
              {skill}
              <span
                className="remove-skill"
                onClick={() => handleRemoveSkill(skill)}
              >
                &times;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
