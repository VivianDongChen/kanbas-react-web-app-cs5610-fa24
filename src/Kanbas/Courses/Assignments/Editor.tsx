import React from "react";
import ModuleControls from "./ModuleControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";

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
          <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />
          <span>
              <BsGripVertical className="me-2 fs-4" /> ASSIGNMENTS
            </span> 
            <AssignmentControlButtons />
            </div>
          <ul className="wd-assignments list-group rounded-0">
            <li className="wd-assignment list-group-item d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-5" />
                <span>A1</span>
                <small className="text-muted d-block">
                  Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                </small>
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment list-group-item d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-5" />
                <span>A2</span>
                <small className="text-muted d-block">
                  Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
                </small>
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment list-group-item d-flex justify-content-between align-items-center">
            <div>
                <BsGripVertical className="me-2 fs-5" />
                <span>A3</span>
                <small className="text-muted d-block">
                  Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
                </small>
              </div>
              <AssignmentControlButtons />
              </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
