import React from "react";
import "./JobContainer.css";
import JobBox from "./JobBox";
import useJobContext from "../../hooks/useJobContext";
import NoResultsFound from "./NoResultsFound";

const JobContainer = () => {
  const { jobListings } = useJobContext();

  return (
    <div>
      {jobListings.length < 1 ? (
        <NoResultsFound />
      ) : (
        <div>
          {jobListings.map((job) => {
            return <JobBox key={job._id} job={job} />;
          })}
        </div>
      )}
    </div>
  );
};

export default JobContainer;
