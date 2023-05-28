import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fetchdata } from "../hooks/getData";
import Spinner from "../loading/spinner";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { FiClock, FiPhone } from "react-icons/fi";
import { BsCalendar2Week, BsPen } from "react-icons/bs";
import { BiSearchAlt2, BiBriefcase } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import JobContext from "../context/jobContext";
import "./jobListPage.css";

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  let navigate = useNavigate();
  const [originalList, setOriginalList] = useState(null);
  const searchInput = useRef("");
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    logo,
    map,
    name,
    address,
    tel,
    mail,
    comID,
    setSearchTerm,
    searchTerm,
    appURL,
    setFilteredJobList,
  } = useContext(JobContext);
  console.log("joblist", jobList);
  useEffect(() => {
    const params = {
      FetchURL: `${appURL}api/job?ComID=${comID}&Flag=S&JobStatus=-1`,
      Type: "GET",
    };

    Fetchdata(params)
      .then(function (result) {
        if (result.StatusCode === 200) {
          const postResult = result.JobInfo ? result.JobInfo : "";
          setJobList(postResult);
          setOriginalList(postResult);
          setLoading(false);
        } else {
          setJobList([]);
          setOriginalList([]);
          setLoading(false);
        }
      })
      .catch((err) => {
        setJobList([]);
        setOriginalList([]);
        setLoading(false);
      });
  }, []);

  console.log("searchTerm", searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();

    const srchQuery = searchInput.current.value.toLowerCase();
    setSearchTerm(srchQuery);
    if (srchQuery) {
      let srchResult = originalList.filter((list) => {
        return list["Title"].toLowerCase().includes(srchQuery);
      });

      if (srchResult) {
        setJobList(srchResult);
        setFilteredJobList(srchResult);
        navigate("/filtered-job");
      } else {
        setJobList({});
        setFilteredJobList({});
      }
    } else {
      setJobList(originalList);
      setFilteredJobList(originalList);
    }
  };

  const noOfJobs = jobList.length > 0 ? jobList.length : "No";

  return (
    <>
      <div className="jobListPage">
        
        <div className="job-banner">
          <div className="uk-container">
            <h5>
              <span>{noOfJobs} Jobs</span> Available Now
            </h5>
            <p>Join The Best. Be The Best</p>

            <div>
              <div className="uk-grid uk-flex-middle job-list-wrapper">
                <div className="uk-width-expand@l">
                  <div className="job-filter">
                    <form
                      className="d-flex form uk-flex-between"
                      onSubmit={handleSearch}
                    >
                      {/* <div class="box-industry">
                    <span className="icon">
                      <BiBriefcase />
                    </span>
                    <select class="form-input mr-10 select-active input-industry">
                      <option value="0">Industry</option>
                      <option value="1">Software</option>
                      <option value="2">Finance</option>
                    </select>
                  </div> */}

                      <div class="box-industry">
                        <span className="icon">
                          <BsPen />
                        </span>
                        <input
                          class="form-input input-keysearch "
                          type="text"
                          placeholder="Your keyword... "
                          ref={searchInput}
                          // onChange={searchHandler}
                        />
                      </div>
                      <div class="box-industry region">
                        <span className="icon">
                          <GrLocation />
                        </span>
                        <select class="form-input mr-10 select-active input-location">
                          <option value="true">Select Region</option>

                          <option value="0">Argentina</option>
                          <option value="1">Armenia</option>
                          <option value="2">Aruba</option>
                        </select>
                      </div>
                      <button
                        class="uk-button btn btn-default btn-find font-sm"
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
              </div>
            </div>
          </div>
          <div className="job-bg-img"></div>
        </div>

        <div className="uk-container">
          <div>
            <div className="uk-grid resp-jobList">
              <div className="uk-width-1-3@m">
                <div className="job-sticky wrapper p-3 mt-5">
                  <div className="uk-flex uk-flex-wrap uk-flex-middle">
                    <img src={logo} alt="" />
                    <div className="ms-3">
                      <h5>{name}</h5>
                      {/* <p>
                  <GrLocation color="#555" /> Kalimati, Ktm.
                </p> */}
                      <p className="m-0">{noOfJobs} open jobs</p>
                    </div>
                  </div>

                  <div className="hr"></div>

                  <div className="map">
                    <iframe
                      src={map}
                      width="100%"
                      height="150"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="contact">
                    <div className="mt-3">
                      <GrLocation color="#555" /> {address}
                    </div>
                    <div className="mt-3">
                      <FiPhone color="#555" /> {tel}
                    </div>
                    <div className="mt-3">
                      <GoMail color="#555" /> {mail}
                    </div>
                  </div>
                </div>
              </div>

              {loading ? (
                <Spinner />
              ) : (
                <>
                  {jobList.length !== 0 ? (
                    <div className="jobList uk-width-expand@m">
                      {jobList.map((props) => {
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
                                        className=" uk-button me-0"
                                        style={{
                                          fontSize: "11px",
                                          background: "#f2f6fd",
                                          color: "#555",
                                        }}
                                      >
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
