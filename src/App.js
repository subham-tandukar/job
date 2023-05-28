import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import JobList from "./components/job page/JobList";
import JobPage from "./components/job page/JobPage";
import FilteredJobList from "./components/job page/FilteredJobList";
import LayoutPage from "./components/job page/LayoutPage";

const App = () => {
  return (
    <>
      <LayoutPage>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobPage/:id" element={<JobPage />} />
          <Route path="/filtered-job" element={<FilteredJobList />} />
        </Routes>
      </LayoutPage>
    </>
  );
};

export default App;
