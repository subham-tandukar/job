import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GetNepaliDate } from "../hooks/dateConvertor";
import { Fetchdata } from "../hooks/getData";
import JobPopup from "./JobPopup";
import Spinner from "../loading/spinner";
import URLpreview from "./URLpreview";
import image from "../../images/urlPreview.jpg";
import JobContext from "../context/jobContext";

export default function JobPage() {
  const { logo, name, address, tel, comID, appURL } = useContext(JobContext);

  const [files, setFile] = useState("");
  const [desc, setDesc] = useState([]);
  const [title, setTitle] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState();
  const [loading, setLoading] = useState(true);
  const initalvalue = {
    name: "",
    email: "",
    contact: "",
    message: "",
    pdf: "",
    ext: "",
  };
  const [formValues, setFormValues] = useState(initalvalue);
  const [formErrors, setFormErrors] = useState({});

  const { id } = useParams();

  const [popup, setPopup] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleAdd = () => {
    setPopup(true);
    setFormValues(initalvalue);
    setFile("");
  };

  const [jobInfo, setJobInfo] = useState([]);
  console.log("jobinfo", jobInfo);
  useEffect(() => {
    const params = {
      FetchURL: `${appURL}api/job?ComID=${comID}&Flag=SI&JobID=${id}`,
      Type: "GET",
    };

    Fetchdata(params)
      .then(function (result) {
        if (result.StatusCode === 200) {
          const postResult = result.JobInfo ? result.JobInfo : "";
          setJobInfo(postResult);
          setLoading(false);
        } else {
          setJobInfo([]);
          setLoading(false);
        }
      })
      .catch((err) => {
        setJobInfo([]);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (jobInfo.length > 0) {
      jobInfo.map((list) => {
        desc.push(list.Description);
      });
    }
  }, [jobInfo]);
  useEffect(() => {
    if (jobInfo.length > 0) {
      jobInfo.map((list) => {
        title.push(list.Title);
      });
    }
  }, [jobInfo]);

  return (
    <>
      <div className="jobListPage">
        <div className="jobPage">
          <div className="uk-container">
            <div className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
              <div className="profile-info">
                <div className="img-box">
                  <img
                    alt="img"
                    src={logo}
                    // className="me-2"
                    style={{ width: "70px" }}
                  />
                </div>

                <div className="content">
                  {/* <h6 className=" uk-text-left">{name}</h6>
                <p className=" uk-text-left">
                  Address: {address}
                  <br />
                  Tel: {tel}
                </p> */}
                  {jobInfo.map((props) => {
                    const { JobID, Title } = props;
                    return (
                      <>
                        <h6 key={JobID}>{Title}</h6>
                      </>
                    );
                  })}
                </div>
              </div>
              {/* <div className="btn-addlnote">
            <button
              type="button"
              className="uk-button apply-btn"
              onClick={handleAdd}
            >
              Apply
            </button>
          </div> */}
            </div>
          </div>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-expand">
                <div className="job-info  ">
                  <div className="uk-container wrapper">
                    <h5>Job Description</h5>
                    <div className="hr"></div>
                    {jobInfo.map((props) => {
                      const { JobID, Description } = props;
                      return (
                        <>
                          <p id="desc" key={JobID}>
                            {Description}
                          </p>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="job-info  ">
                  <div className="uk-container wrapper">
                    <h5>Responsibility</h5>
                    <div className="hr"></div>
                    {jobInfo.map((props) => {
                      const { JobID, Responsibility } = props;
                      return <p key={JobID}>{Responsibility}</p>;
                    })}
                  </div>
                </div>
              </div>

              <div className="uk-width-2-5@l uk-width-1-2@m">
                <div className="job-info ">
                  <div className="uk-container wrapper job-overview">
                    <h5>Job Overview</h5>
                    <div className="hr"></div>

                    <div className="">
                      {jobInfo.map((props) => {
                        const {
                          JobID,
                          Shift,
                          ShiftType,
                          JobType,
                          Education,
                          NoPos,
                          EndDate,
                          IsNeg,
                          Designation,
                          InterviewDate,
                          Experience,
                        } = props;
                        const date = new Date(EndDate);
                        const today = new Date();
                        const timeDiff = date - today;
                        const diffDays = Math.ceil(
                          timeDiff / (1000 * 3600 * 24)
                        );

                        return (
                          <div
                            key={JobID}
                            className="uk-grid uk-child-width-1-2"
                          >
                            <div className="uk-margin-bottom">
                              <h6>Designation</h6>
                              <p>{Designation}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>Shift</h6>
                              <p>{Shift}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>Shift Type</h6>
                              <p>{ShiftType}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>Job Type</h6>
                              <p>{JobType}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>No of Position</h6>
                              <p>{NoPos}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>Education</h6>
                              <p>{Education}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>Experience</h6>
                              <p>{Experience}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>Salary</h6>
                              <p>{IsNeg}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>Interview Date</h6>
                              <p>{GetNepaliDate(InterviewDate)}</p>
                            </div>
                            <div className="uk-margin-bottom">
                              <h6>Expiry Date</h6>
                              <p>
                                {diffDays < 0
                                  ? "Expired"
                                  : diffDays === 0
                                  ? "Expires: Today"
                                  : diffDays === 1
                                  ? `Expires in: ${diffDays} day`
                                  : `Expires in: ${diffDays} days`}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <URLpreview img={image} description={desc[0]} title={title[0]} />

        <JobPopup
          popup={popup}
          setPopup={setPopup}
          submit={submit}
          setSubmit={setSubmit}
          formValues={formValues}
          setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          isUploaded={isUploaded}
          setIsUploaded={setIsUploaded}
          typeFile={typeFile}
          setTypeFile={setTypeFile}
          files={files}
          setFile={setFile}
        />
      </div>
    </>
  );
}
