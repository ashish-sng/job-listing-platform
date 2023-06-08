import React, { useEffect, useState } from "react";
import "./AddJob.css";
import axios from "axios";

const AddJob = () => {
  const [companyName, setCompanyName] = useState("");
  const [addLogoURL, setAddLogoURL] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [remoteOnsite, setRemoteOnsite] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [skillsRequired, setSkillsRequired] = useState([]);

  useEffect(() => {
    console.log("companyName", companyName);
  }, [companyName]);

  useEffect(() => {
    console.log("addLogoURL", addLogoURL);
  }, [addLogoURL]);

  useEffect(() => {
    console.log("jobPosition", jobPosition);
  }, [jobPosition]);

  useEffect(() => {
    console.log("monthlySalary", monthlySalary);
  }, [monthlySalary]);

  useEffect(() => {
    console.log("jobType", jobType);
  }, [jobType]);

  useEffect(() => {
    console.log("remoteOnsite", remoteOnsite);
  }, [remoteOnsite]);

  useEffect(() => {
    console.log("jobLocation", jobLocation);
  }, [jobLocation]);

  useEffect(() => {
    console.log("jobDescription", jobDescription);
  }, [jobDescription]);

  useEffect(() => {
    console.log("aboutCompany", aboutCompany);
  }, [aboutCompany]);

  useEffect(() => {
    console.log("skillsRequired", skillsRequired);
  }, [skillsRequired]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent in the POST request
    const postData = {
      companyName,
      addLogoURL,
      jobPosition,
      monthlySalary,
      jobType,
      remoteOnsite,
      jobLocation,
      jobDescription,
      aboutCompany,
      skillsRequired,
    };

    // Send the POST request
    axios
      .post("http://localhost:4000/job-posting", postData, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).token,
        },
      })
      .then((response) => {
        console.log("Job posting successful", response);
        setAboutCompany("");
        setAddLogoURL("");
        setCompanyName("");
        setJobDescription("");
        setJobLocation("");
        setJobPosition("");
        setJobType("");
        setMonthlySalary("");
        setRemoteOnsite("");
        setSkillsRequired([]);
        // Handle any success response if needed
      })
      .catch((error) => {
        console.error("Job posting failed", error);
        // Handle any error response if needed
      });
    console.log(postData);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handleRemoteOnsiteChange = (e) => {
    setRemoteOnsite(e.target.value);
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setSkillsRequired(skills);
  };

  return (
    <div className="add__job">
      <div className="add__job__left">
        <h1>Add Job</h1>
        <form className="job__form" onSubmit={handleSubmit}>
          <div className="job__input">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="job__input">
            <label htmlFor="addLogoURL">Logo URL</label>
            <input
              type="text"
              placeholder="Logo URL"
              value={addLogoURL}
              onChange={(e) => setAddLogoURL(e.target.value)}
            />
          </div>
          <div className="job__input">
            <label htmlFor="jobPosition">Job Position</label>
            <input
              type="text"
              placeholder="Job Position"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
            />
          </div>
          <div className="job__input">
            <label htmlFor="monthlySalary">Monthly Salary</label>
            <input
              type="text"
              placeholder="Monthly Salary"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(e.target.value)}
            />
          </div>
          <div className="job__input">
            <label htmlFor="jobType">Job Type</label>
            <select value={jobType} onChange={handleJobTypeChange}>
              <option value="">Select Job Type</option>
              <option value="Internship">Internship</option>
              <option value="Full Time">Full Time</option>
            </select>
          </div>
          <div className="job__input">
            <label htmlFor="remoteOnsite">Remote/Onsite</label>
            <select value={remoteOnsite} onChange={handleRemoteOnsiteChange}>
              <option value="">Select Remote/Onsite</option>
              <option value="remote">Remote</option>
              <option value="inOffice">In Office</option>
            </select>
          </div>

          <div className="job__input">
            <label htmlFor="jobLocation">Job Location</label>
            <input
              type="text"
              placeholder="Job Location"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              disabled={remoteOnsite === "remote"}
            />
          </div>

          <div className="job__input">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              placeholder="Job Description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="job__input">
            <label htmlFor="aboutComapany">About Company</label>
            <textarea
              placeholder="About Company"
              value={aboutCompany}
              onChange={(e) => setAboutCompany(e.target.value)}
            ></textarea>
          </div>
          <div className="job__input">
            <label htmlFor="skillsRequired">Skills Required</label>
            <input
              type="text"
              placeholder="Skills Required"
              value={skillsRequired.join(", ")}
              onChange={handleSkillsChange}
            />
          </div>
          <div className="job__buttons">
            <button type="submit">Cancel</button>
            <button type="submit">Add Job</button>
          </div>
        </form>
      </div>
      <div className="add__job__right">
        <h1>Recruiters add Job details here</h1>
      </div>
    </div>
  );
};

export default AddJob;
