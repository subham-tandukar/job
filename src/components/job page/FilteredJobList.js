import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fetchdata } from "../hooks/getData";
import Spinner from "../loading/spinner";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { FiClock, FiPhone } from "react-icons/fi";
import { BsCalendar2Week, BsPen } from "react-icons/bs";
import { BiSearchAlt2, BiBriefcase } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import JobContext from "../context/jobContext";

const FilteredJobList = () => {
  const [jobList, setJobList] = useState([]);
  const [originalList, setOriginalList] = useState(null);

  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const [district, setDistrict] = useState("");

  const searchInput = useRef("");
  const [loading, setLoading] = useState(true);
  const {
    comID,
    setSearchTerm,
    searchTerm,
    filteredJobList,
    setFilteredJobList,
    appURL,
  } = useContext(JobContext);
  useEffect(() => {
    const params = {
      FetchURL: `${appURL}api/job?ComID=${comID}&Flag=S&JobStatus=-1`,
      Type: "GET",
    };

    Fetchdata(params)
      .then(function (result) {
        if (result.StatusCode === 200) {
          const postResult = result.JobInfo ? result.JobInfo : "";
          setOriginalList(postResult);
          setJobList(postResult);
          setLoading(false);
        } else {
          setOriginalList([]);
          setJobList([]);
          setLoading(false);
        }
      })
      .catch((err) => {
        setOriginalList([]);
        setJobList([]);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const srchQuery = searchInput.current.value.toLowerCase();
    setSearchTerm(srchQuery);
    if (srchQuery) {
      let srchResult = originalList.filter((list) => {
        return list["Title"].toLowerCase().includes(srchQuery);
      });

      if (srchResult) {
        setFilteredJobList(jobList);
        setFilteredJobList(srchResult);
      } else {
        setFilteredJobList({});
      }
    } else {
      setFilteredJobList(originalList);
    }
  };
  const noOfJobs = filteredJobList.length > 0 ? filteredJobList.length : "No";

  const clearTitle = () => {
    setSearchTerm("");
    setFilteredJobList(jobList);
  };
  const clearCategory = () => {
    setCategory("");
    setFilteredJobList(jobList);
  };
  const clearJobType = () => {
    setJobType("");
    setFilteredJobList(jobList);
  };
  const clearExperience = () => {
    setExperience("");
    setFilteredJobList(jobList);
  };
  const clearDistrict = () => {
    setDistrict("");
    setFilteredJobList(jobList);
  };

  return (
    <>
      <div className="jobListPage">
      
        <div className="job-banner">
          <div className="uk-container">
            <h5>
              <span>{noOfJobs} Jobs</span> Available Now
            </h5>
            <p>Join The Best. Be The Best</p>
          </div>
          <div className="job-bg-img"></div>
        </div>

        <div className="uk-container">
          <div>
            <div className="uk-grid resp-jobList">
              <div className="uk-width-1-3@m">
                <div className="job-sticky job-banner wrapper p-3 mt-5">
                  <form onSubmit={handleSearch}>
                    <h4 className="search-heading">Search by Keywords</h4>
                    <div class="box-industry titleSearch p-0">
                      <span className="icon">
                        <BsPen />
                      </span>
                      <input
                        class="form-input input-keysearch "
                        type="text"
                        placeholder="Your keyword... "
                        ref={searchInput}
                        autoFocus
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <h4 className="search-heading mt-3">Category</h4>
                    <TextField
                      select
                      name="category"
                      className="w-100"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                    >
                      <MenuItem value="" disabled>
                        Choose a category
                      </MenuItem>
                      <MenuItem value="React">React</MenuItem>
                      <MenuItem value="Flutter">Flutter</MenuItem>
                      {/* {dropDownValue.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))} */}
                    </TextField>

                    <h4 className="search-heading mt-3">Job Type</h4>
                    <TextField
                      select
                      name="jobType"
                      className="w-100"
                      onChange={(e) => setJobType(e.target.value)}
                      value={jobType}
                    >
                      <MenuItem value="" disabled>
                        Select job type
                      </MenuItem>
                      <MenuItem value="Full Time">Full Time</MenuItem>
                      <MenuItem value="Part Time">Part Time</MenuItem>
                      <MenuItem value="Intern">Intern</MenuItem>
                      <MenuItem value="Paid Intern">Paid Intern</MenuItem>
                      <MenuItem value="Freelance">Freelance</MenuItem>
                      <MenuItem value="Contract">Contract</MenuItem>
                      <MenuItem value="Training">Training</MenuItem>
                      {/* {dropDownValue.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))} */}
                    </TextField>

                    <h4 className="search-heading mt-3">Experience</h4>
                    <TextField
                      select
                      name="experience"
                      className="w-100"
                      onChange={(e) => setExperience(e.target.value)}
                      value={experience}
                    >
                      <MenuItem value="" disabled>
                        Select Experience
                      </MenuItem>
                      <MenuItem value="1 yr">1 yr</MenuItem>
                      <MenuItem value="2 yr">2 yr</MenuItem>
                      <MenuItem value="3 yr">3 yr</MenuItem>
                      <MenuItem value="4 yr">4 yr</MenuItem>
                      <MenuItem value="5 yr">5 yr</MenuItem>
                      {/* {dropDownValue.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))} */}
                    </TextField>

                    <h4 className="search-heading mt-3">District</h4>
                    <TextField
                      select
                      name="district"
                      className="w-100"
                      onChange={(e) => setDistrict(e.target.value)}
                      value={district}
                    >
                      <MenuItem value="" disabled>
                        Select District
                      </MenuItem>
                      <MenuItem value="Chitwan">Chitwan</MenuItem>
                      <MenuItem value="Lalitpur">Lalitpur</MenuItem>
                      {/* {dropDownValue.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))} */}
                    </TextField>
                    <button
                      class="uk-button btn btn-default btn-find font-sm mt-3"
                      type="submit"
                    >
                      <span style={{ position: "absolute" }}>
                        <BiSearchAlt2 size="1rem" />
                      </span>
                      <span className="ps-4">Search</span>
                    </button>
                  </form>
                </div>
              </div>
              {loading ? (
                <Spinner />
              ) : (
                <div style={{ flexGrow: "1" }}>
                  {searchTerm ||
                  category ||
                  jobType ||
                  experience ||
                  district ? (
                    <div className=" mt-5">
                      <h4>Your selected:</h4>
                      <div className="selected-terms">
                        {searchTerm && (
                          <span onClick={clearTitle}>
                            {searchTerm} <MdClose />{" "}
                          </span>
                        )}

                        {category && (
                          <span onClick={clearCategory}>
                            {category} <MdClose />{" "}
                          </span>
                        )}

                        {jobType && (
                          <span onClick={clearJobType}>
                            {jobType} <MdClose />{" "}
                          </span>
                        )}
                        {experience && (
                          <span onClick={clearExperience}>
                            {experience} <MdClose />{" "}
                          </span>
                        )}
                        {district && (
                          <span onClick={clearDistrict}>
                            {district} <MdClose />{" "}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {filteredJobList.length !== 0 ? (
                    <div className="jobList uk-width-expand@m">
                      {filteredJobList.map((props) => {
                        const {
                          JobID,
                          ShiftType,
                          JobType,
                          Title,
                          NoOfPos,
                          EndDate,
                          Description,
                          Experience,
                        } = props;

                        const date = new Date(EndDate);
                        const today = new Date();
                        const timeDiff = date - today;
                        const diffDays = Math.ceil(
                          timeDiff / (1000 * 3600 * 24)
                        );

                        return (
                          <Link to={`/jobPage/${JobID}`}>
                            <div
                              className=" wrapper "
                              style={{
                                paddingBottom: "1.2rem",
                                cursor: "pointer",
                              }}
                              key={JobID}
                            >
                              <div className="uk-flex uk-flex-middle d-flex-end uk-flex-wrap">
                                {/* <div className="profile-info">
                          <div className="contentLogo tl">
                            <div className="mgmtImg tl">
                              <img
                                alt="img"
                                src={
                                  image === "placeholder" ? placeholder : image
                                }
                              />
                            </div>
                          </div>
                          <div className="content">
                            <h6 className=" uk-text-left">{name}</h6>
                            <p className=" uk-text-left">Address: {address}</p>
                          </div>
                        </div> */}

                                {/* <div className="uk-flex uk-flex-middle uk-flex-wrap">
                          <div className="btn-addlnote me-2">
                            <span
                              className=" uk-button"
                              style={{
                                fontSize: "11px",
                                background: "#f2f6fd",
                                color: "#555",
                              }}
                            >
                              {ShiftType}
                            </span>
                          </div>
                          <div className="btn-addlnote">
                            <span
                              className=" uk-button"
                              style={{
                                fontSize: "11px",
                                background: "#f2f6fd",
                                color: "#555",
                              }}
                            >
                              {Experience}
                            </span>
                          </div>
                        </div> */}
                              </div>

                              <div>
                                <h4>{Title}</h4>

                                <div className="job-req">
                                  <span>
                                    <FaBriefcase />
                                    {Title}
                                  </span>
                                  <span>
                                    <FiClock />
                                    {JobType}
                                  </span>
                                  <span>
                                    <FaUser />
                                    No.of position: {NoOfPos}
                                  </span>
                                </div>
                                {/* <p className="desc">{Description}</p> */}

                                <div className="hr"></div>

                                <div className="job-req uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
                                  <div>
                                    <span
                                      style={{
                                        display: "block",
                                        marginTop: "-0.3rem",
                                      }}
                                    >
                                      <BsCalendar2Week />
                                      {diffDays < 0
                                        ? "Expired"
                                        : diffDays === 0
                                        ? "Expires: Today"
                                        : diffDays === 1
                                        ? `Expires in: ${diffDays} day`
                                        : `Expires in: ${diffDays} days`}
                                    </span>
                                  </div>
                                  {/* <div className="btn-addlnote">
                        <button
                          type="button"
                          className="uk-button hover-btn"
                          onClick={() => handleAdd(JobID)}
                        >
                          Apply
                        </button>
                      </div> */}
                                  <div className="uk-flex uk-flex-middle uk-flex-wrap">
                                    <div className="btn-addlnote me-2">
                                      <span className=" uk-button">
                                        {ShiftType}
                                      </span>
                                    </div>
                                    <div className="btn-addlnote">
                                      <span className=" uk-button me-0">
                                        {Experience}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="no-job">No jobs available</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredJobList;
