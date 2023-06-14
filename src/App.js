import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import JobDetails from "./components/Home/JobDetails";
import Header from "./components/Home/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddJob from "./components/AddJob/AddJob";
import EditJob from "./components/EditJob/EditJob";
import { Provider } from "./context/JobContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              path="/:id"
              element={
                <>
                  <Header />
                  <JobDetails />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/editJob/:id" element={<EditJob />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
