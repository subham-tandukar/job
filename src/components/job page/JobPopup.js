import React, { useEffect } from "react";
import CloseIcon from "../../images/CloseIcon.svg";
import $ from "jquery";

export default function JobPopup({
  popup,
  setPopup,
  submit,
  setSubmit,
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
  isUploaded,
  setIsUploaded,
  typeFile,
  setTypeFile,
  files,
  setFile,
}) {
  const closePopUp = (e) => {
    setPopup(false);
    $(".addJobPopBg").fadeOut(300);
    $(".addJobPop").slideUp(500);
    setSubmit(false);
    setFormErrors({});
    setIsUploaded(false);
  };

  useEffect(() => {
    if (popup) {
      $(".addJobPop").slideDown(500);
      $(".addJobPopBg").fadeIn(500);
    }
  }, [popup]);

  function handlePdfChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      setFile(e.target.files[0].name);
      let reader = new FileReader();

      reader.onload = function (e) {
        setTypeFile(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };

  return (
    <>
      <div className="container popup-wrapper addJobPopBg">
        <div className="popup-inner addJobPop" style={{ height: "60vh" }}>
          <div className="popUpHeader ps-0 pe-0">
            <div className="popUpTitle">Apply Job</div>
            <div className="popUpClose">
              <img
                className="popUpCloseIcon"
                src={CloseIcon}
                alt="CloseIcon"
                onClick={closePopUp}
              />
            </div>
          </div>
          <div className="popUpBody ps-3 pe-3">
            <div className="form-padding">
              <div className="row text-start">
                <div className="form-group mt-0">
                  <label htmlFor="name" style={{ fontSize: "12px" }}>
                    Full Name<sup style={{ color: "red" }}>*</sup>
                  </label>
                  <input
                    id="name"
                    style={{ fontSize: "13px" }}
                    type="text"
                    className="form-control form-control-sm "
                    name="name"
                    placeholder="Full Name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="errormsg">{formErrors.name}</p>
                  )}
                </div>
              </div>

              <div className="row text-start">
                <div className="col-md-6 col-sm-6 col-lg-6 form-group">
                  <label htmlFor="contact" style={{ fontSize: "12px" }}>
                    Contact
                  </label>
                  <input
                    id="contact"
                    style={{ fontSize: "13px" }}
                    type="text"
                    className="form-control form-control-sm "
                    name="contact"
                    placeholder="Contact"
                    value={formValues.contact}
                    onChange={handleChange}
                  />
                  {/* {formErrors.contact && (
                    <p className="errormsg">{formErrors.contact}</p>
                  )} */}
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 form-group">
                  <label htmlFor="email" style={{ fontSize: "12px" }}>
                    Email
                  </label>
                  <input
                    id="email"
                    style={{ fontSize: "13px" }}
                    type="text"
                    className="form-control form-control-sm "
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {/* {formErrors.email && (
                    <p className="errormsg">{formErrors.email}</p>
                  )} */}
                </div>
              </div>

              <div className="row text-start">
                <div className="form-group">
                  <label htmlFor="message" style={{ fontSize: "12px" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formValues.message}
                    onChange={handleChange}
                    style={{ fontSize: "13px" }}
                    className="form-control ps-2"
                    name="message"
                    rows="3"
                    cols="12"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="pdf" style={{ fontSize: "12px" }}>
                    PDF
                  </label>
                  {!isUploaded ? (
                    <>
                      <div className="pdfFile w-100">
                        <label htmlFor="pdfData">
                          <div
                            // type="button"
                            className="uk-button approve-btn"
                          >
                            Add Pdf
                          </div>
                        </label>

                        <input
                          id="pdfData"
                          type="file"
                          accept=".pdf"
                          onChange={handlePdfChange}
                          name="pdf"
                          className="d-none"
                          value={formValues.pdf}
                        />
                      </div>
                      {/* {documentFormError.pdf && (
                        <p className="errormsg">{documentFormError.pdf}</p>
                      )} */}
                    </>
                  ) : (
                    <>
                      <div className="w-100 ">
                        <div className="uk-position-relative">
                          <input
                            style={{ fontSize: "13px" }}
                            type="text"
                            className="form-control form-control-sm "
                            value={files}
                            name="ext"
                            disabled
                          />
                          <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => {
                              setIsUploaded(false);
                              setTypeFile(null);
                              setFile("");
                              formValues.ext = "";
                            }}
                            style={{
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                              height: " 15px",
                              right: "0",
                              backdropFilter: "invert(1)",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        {/* {documentFormError.ext && (
                          <p className="errormsg">{documentFormError.ext}</p>
                        )} */}
                      </div>
                    </>
                  )}

                  {/* {documentFormError.pdf && (
                          <p className="errormsg">{documentFormError.pdf}</p>
                        )} */}
                </div>
              </div>
            </div>
          </div>

          <div className="ln-popUpFooter">
            <div className="row  mt-1 mb-1">
              <div>
                <button
                  type="button"
                  className="uk-button approve-btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="uk-button cancel-btn"
                  onClick={closePopUp}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
