import React, { useEffect } from "react";
import "./Home.css";
import JobSearch from "./JobSearch";
import JobContainer from "./JobContainer";
import useJobContext from "../../hooks/useJobContext";
import axios from "axios";
import BASEURL from "../../constants/baseurl";

const Home = () => {
  const { loggedIn, setLoggedIn, setJobListings } = useJobContext();
  useEffect(() => {
    localStorage.getItem("token") ? setLoggedIn(true) : setLoggedIn(false);
  }, [loggedIn, setLoggedIn]);

  const getJobListings = () => {
    axios
      .get(`${BASEURL}/jobs`)
      .then((response) => {
        setJobListings(response.data.jobListings);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    getJobListings();
  }, []);

  return (
    <div className="home">
      <JobSearch />
      <JobContainer />
    </div>
  );
};

export default Home;
