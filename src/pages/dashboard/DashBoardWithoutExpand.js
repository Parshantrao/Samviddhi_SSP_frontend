import React, { useState } from "react";
import "../dashboard/dashWithout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Simulation from "../dashboard/section/Simulation";

export default function DashBoardWithoutExpand(props) {
  const [showtab, setShowtab] = useState(1);
//   const [open, setOpen] = useState(false);
  const handletab = (e) => {
    setShowtab(e);
  };

  return (
    <div className="dashboard__page-container">
      <div className="dashboard__page-sideNav">
        <div className="">
          <p className="text-logo">LOGO</p>
          <button className="nav-button" onClick={()=>{props.onClickExpand(props.open)}}>
            <img
              className="leftArrowImage"
              src="/images/SideBarIcons/left Arrow.svg"
              alt="Back"
            />
          </button>
        </div>
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={showtab === 1 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(1)}
            >
              <div className="nav-content">
                <img
                  className="navBarImage"
                  src="/images/SideBarIcons/newmodel.svg"
                  alt="New Model"
                />
              </div>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={showtab === 2 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(2)}
            >
              <div className="nav-content">
                <img
                  className="navBarImage"
                  src="/images/SideBarIcons/Loadmodel.svg"
                  alt="New Model"
                />
              </div>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={showtab === 3 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(3)}
            >
              <div className="nav-content">
                <img
                  className="navBarImage"
                  src="/images/SideBarIcons/Simulation.svg"
                  alt="New Model"
                />
              </div>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={showtab === 4 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(4)}
            >
              <div className="nav-content">
                <img
                  className="navBarImage"
                  src="/images/SideBarIcons/Optimization.svg"
                  alt="New Model"
                />
              </div>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={showtab === 5 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(5)}
            >
              <div className="nav-content">
                <img
                  className="navBarImage"
                  src="/images/SideBarIcons/Database.svg"
                  alt="New Model"
                />
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className="dashboard__page-content page-content tab-content">
        <div
          className={
            showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"
          }
        >
          <div className="dashboard__page-text">
            <p>New Model</p>
          </div>
        </div>
        <div
          className={
            showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="dashboard__page-text">
            <p>Load Model</p>
          </div>
        </div>
        <div
          className={
            showtab === 3 ? "tab-pane fade show active" : "tab-pane fade show"
          }
        >
          <Simulation />
        </div>
        <div
          className={
            showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="dashboard__page-text">
            <p>Optimization</p>
          </div>
        </div>
        <div
          className={
            showtab === 5 ? "tab-pane fade show active" : "tab-pane fade show"
          }
        >
          <div className="dashboard__page-text">
            <p>Database</p>
          </div>
        </div>
      </div>
    </div>
  );
}
