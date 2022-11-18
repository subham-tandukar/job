import React from "react";
import DataTable from "react-data-table-component";
import TableData from "./TableData";
import { AiFillPrinter } from "react-icons/ai";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { RiFileExcel2Fill } from "react-icons/ri";

const Dashboard = () => {
  const data = TableData;

  const columns = [
    {
      name: "S.N.",
      // grow: 0,
      width: "60px",
      center: true,
      cell: (row) => row.id,
    },
    {
      name: "Name",
      // grow: 2,
      width: "150px",
      selector: (row) => row.name,
    },
    {
      name: "Position",
      // grow: 0,
      center: true,
      selector: (row) => row.position,
    },
    {
      name: "Office",
      // grow: 0,
      center: true,
      selector: (row) => row.office,
    },
    {
      name: "Age",
      // grow: 0,
      center: true,
      selector: (row) => row.age,
    },
    {
      name: "Action",
      // grow: 0,
      center: true,
      selector: (row) => {
        return (
          <>
            <span className="uk-margin-right">
              <i className="fas fa-edit"></i>
            </span>
            <span>
              <i className="fas fa-trash-alt"></i>
            </span>
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className=" title uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
        <h4>
          <i className="fas fa-tachometer-alt uk-margin-small-right"></i>Dashboard
        </h4>
        <div>
          <button className="uk-button">+ Add New</button>
        </div>
      </div>

      <div className="content_wrapper">
        <DataTable
          columns={columns}
          data={data}
          // customStyles={customStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="335px"
          highlightOnHover
          pointerOnHover
          // progressPending={loading}
          responsive
          subHeader
          dense
          striped
          subHeaderComponent={
            <>
              <div className="filter uk-flex uk-flex-wrap">
                <div className="filter-option">
                  <select
                    style={{ fontSize: "11px" }}
                    name="snotifiaction"
                    // value={chooseDepartment}
                    // onChange={handleDepartment}
                    className="form-control form-control-sm searchField"
                  >
                    <option
                      value="0"
                      disabled
                      selected
                      style={{ fontSize: "11px" }}
                    >
                      Select Department
                    </option>
                    <option value="-1">Select All</option>
                  </select>
                </div>

                <div className="filter-option">
                  <select
                    style={{ fontSize: "11px" }}
                    name="snotifiaction"
                    // value={chooseSubDepartment}
                    // onChange={handleSubDepartment}
                    className="form-control form-control-sm searchField"
                  >
                    <option
                      value="0"
                      disabled
                      selected
                      style={{ fontSize: "11px" }}
                    >
                      Select Sub Department
                    </option>
                    <option value="-1">Select All</option>
                  </select>
                </div>

                <div className="filter-option">
                  <select
                    style={{ fontSize: "11px" }}
                    name="snotifiaction"
                    // value={chooseStaff}
                    // onChange={handleStaff}
                    className="form-control form-control-sm "
                  >
                    <option
                      value="0"
                      disabled
                      selected
                      style={{ fontSize: "11px" }}
                    >
                      Select Staff
                    </option>
                    <option value="-1">Select All</option>
                  </select>
                </div>
              </div>

              <div className="export-button uk-flex uk-flex-wrap">
                <div className="export-icon">
                  <RiFileExcel2Fill uk-tooltip="Excel" color="#136438" />
                </div>
                <div className="export-icon">
                  <BsFileEarmarkPdfFill uk-tooltip="Pdf" color="#ff0002" />
                </div>
                <div className="export-icon">
                  <AiFillPrinter uk-tooltip="Print" color="#22333F" />
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default Dashboard;
