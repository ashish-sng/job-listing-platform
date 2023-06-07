import React from "react";
import Header from "../Header";
import JobSearch from "../JobSearch";
import JobBox from "../JobBox";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <JobSearch />
      <JobBox />
    </div>
  );
};

export default Home;
