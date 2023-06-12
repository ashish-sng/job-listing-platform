import React, { useState } from "react";
import Header from "./Header";
import JobSearch from "./JobSearch";
import JobContainer from "./JobContainer";
import JobDetails from "./JobDetails";

const Home = () => {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className="home">
      <Header />
      {showDetails ? (
        <JobDetails />
      ) : (
        <>
          <JobSearch />
          <JobContainer />
        </>
      )}
    </div>
  );
};

export default Home;
