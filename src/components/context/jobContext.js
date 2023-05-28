import React, { useState } from "react";
const JobContext = React.createContext();

export const JobContextProvider = (props) => {
  const appURL = process.env.REACT_APP_URL;
  const logo = process.env.REACT_APP_LOGO;
  const map = process.env.REACT_APP_MAP;
  const name = process.env.REACT_APP_NAME;
  const address = process.env.REACT_APP_ADDRESS;
  const tel = process.env.REACT_APP_TEL;
  const mail = process.env.REACT_APP_MAIL;
  const comID = process.env.REACT_APP_COMID;
  const url = process.env.REACT_APP_URLPREVIEW;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobList, setFilteredJobList] = useState("");

  return (
    <JobContext.Provider
      value={{
        appURL,
        logo,
        map,
        name,
        address,
        tel,
        mail,
        comID,
        url,
        setSearchTerm,
        searchTerm,
        filteredJobList,
        setFilteredJobList,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContext;
