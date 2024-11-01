import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "../../styles.css";
import React, { useEffect, useState } from "react";
import ProtectedRoute1 from "../../Account/ProtectedRoute1";
import { useSelector, useDispatch } from "react-redux";
import {deleteAssignment} from "./reducer";
import AssignmentsControls from "./AssignmentsControls";

export default function Assignments() {
  const { cid } = useParams(); // course ID extracted from the URL using useParams
  const [assignmentName, setAssignmentName] = useState(""); // State for storing the name of a new assignment, managed with setAssignmentName
  const { assignments } = useSelector((state: any) => state.assignmentsReducer); // Retrieved from the Redux store’s assignmentsReducer
  const dispatch = useDispatch(); // dispatch function from Redux for dispatching actions like addAssignment and deleteAssignment

  return (
    <div>
      <ProtectedRoute1>
        <AssignmentsControls/>
      </ProtectedRoute1>
      <br />
      <ul id="wd-assignment-editor" className="list-group rounded-0">
        <li className="wd-assignment-editor list-group-item p-0 mb-3 fs-5 border-gray">
          <div
            className="wd-title d-flex justify-content-between align-items-center p-3 bg-light"
            data-bs-toggle="collapse" //a clickable area that enables users to hide (collapse) or show (expand) the list of assignments beneath it.
            data-bs-target="#assignmentCollapse" //a Bootstrap attribute that links the clickable element (in this case, a header or button) to another HTML element with the ID assignmentCollapse.
            aria-expanded="true"  //the element is currently expanded and visible.
            style={{ cursor: "pointer" }} //makes the cursor display as a hand icon, which is typically used to indicate that the element is clickable
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4 text-secondary" />
              <div className="dropdown d-inline me-1 float-end">
                <span
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                ></span>
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
              <ProtectedRoute1>
                <span className="badge bg-light text-dark border rounded-pill px-3 me-3">
                  40% of Total
                </span>
                <AssignmentsControlButtons />
              </ProtectedRoute1>
            </div>
          </div>
          <div id="assignmentCollapse" className="collapse show">
            {/* Bootstrap’s list-group and list-group-flush classes to give it a list appearance without borders around each item */}
            <ul className="wd-assignments list-group list-group-flush"> 
              {assignments
                .filter((module: any) => module.course === cid) //Filters assignments to display only those that match the current course ID.
                .map((module: any) => (
                  <li
                    key={module._id}
                    className="wd-assignment-editor list-group-item p-0 mb-3 fs-5 border-gray"
                  >
                    <div className="wd-title d-flex align-items-start p-3 bg-light">
                      <BsGripVertical className="me-2 fs-3" />
                      <FaFileAlt className="me-2 fs-5 text-success" />

                      <div className="text-start flex-grow-1">
                        <Link
                          className="wd-assignment-link"
                          to={`/Kanbas/Courses/${cid}/AssignmentEditor/${module._id}`}
                        >
                          <span>{module.title}</span>
                        </Link>
                        <br />
                        {module.modules && (
                          <span className="text-danger">{module.modules}</span>
                        )}
                        {module.available_date && (
                          <span>
                            | Not available until {module.available_date}
                          </span>
                        )}
                        {module.due_date && (
                          <span> | Due {module.due_date}</span>
                        )}
                        {module.score && ` | ${module.score}pt`}
                      </div>

                      <ProtectedRoute1>
                        <AssignmentControlButtons
                          assignmentId={module._id}
                          deleteAssignment={(assignmentId) =>
                            dispatch(deleteAssignment(assignmentId))
                          }
                        />
                      </ProtectedRoute1>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
