import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
