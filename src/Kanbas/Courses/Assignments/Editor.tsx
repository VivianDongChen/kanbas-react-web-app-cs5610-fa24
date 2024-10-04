import React from "react";
import ModuleControls from "./ModuleControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div>
      <ModuleControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment-editor" className="list-group rounded-0">
        <li className="wd-assignment-editor list-group-item p-0 mb-3 fs-5 border-gray">
          <div
            className="wd-title d-flex justify-content-between align-items-center p-3 bg-light"
            data-bs-toggle="collapse"
            data-bs-target="#assignmentCollapse"
            aria-expanded="true"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4 text-secondary" />

              <div className="dropdown d-inline me-1 float-end">
                <span
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  &#9660;
                </span>
                <button
                  id="wd-publish-all-btn"
                  className="btn btn-lg"
                  type="button"
                >
                  ASSIGNMENTS
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              {/* Oval Box - 40% of Total */}
              <span className="badge bg-light text-dark border rounded-pill px-3 me-3">
                40% of Total
              </span>
              <AssignmentsControlButtons />
            </div>
          </div>
          <div id="assignmentCollapse" className="collapse show">
            <ul className="wd-assignments list-group list-group-flush">
              {/* Assignment A1 */}
              <li className="wd-assignment list-group-item d-flex justify-content-between align-items-center ps-3 border-light border-start border-success border-3">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-5" />
                  <FaFileAlt className="me-2 fs-5 text-success" />
                  <div>
                    <span>A1</span>
                    <small className="text-muted d-block">
                      <span className="text-danger">Multiple Modules</span> |
                      Not available until May 6 at 12:00am | Due May 13 at
                      11:59pm | 100 pts
                    </small>
                  </div>
                </div>
                <AssignmentControlButtons />
              </li>

              {/* Assignment A2 */}
              <li className="wd-assignment list-group-item d-flex justify-content-between align-items-center ps-3 border-light border-start border-success border-3">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-5" />
                  <FaFileAlt className="me-2 fs-5 text-success" />
                  <div>
                    <span>A2</span>
                    <small className="text-muted d-block">
                      <span className="text-danger">Multiple Modules</span> |
                      Not available until May 13 at 12:00am | Due May 20 at
                      11:59pm | 100 pts
                    </small>
                  </div>
                </div>
                <AssignmentControlButtons />
              </li>

              {/* Assignment A3 */}
              <li className="wd-assignment list-group-item d-flex justify-content-between align-items-center ps-3 border-light border-start border-success border-3">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-5" />
                  <FaFileAlt className="me-2 fs-5 text-success" />
                  <div>
                    <span>A3</span>
                    <small className="text-muted d-block">
                      <span className="text-danger">Multiple Modules</span> |
                      Not available until May 20 at 12:00am | Due May 27 at
                      11:59pm | 100 pts
                    </small>
                  </div>
                </div>
                <AssignmentControlButtons />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
