import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import AssignmentEditor from "../AssignmentEditor";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentsControls({
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  assignmentName: string;
  setAssignmentName: (title: string) => void;
  addAssignment: () => void;
}) {
  const { cid } = useParams();
  return (
    <div
      id="wd-modules-controls"
      className="d-flex align-items-center justify-content-between"
    >
      {/* Search Input */}
      <div className="input-group me-3" style={{ flexGrow: 1 }}>
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>

      {/* Group and Assignment Buttons */}
      <div className="d-flex align-items-center">
        <button
          id="wd-add-group-btn"
          className="btn btn-outline-secondary d-flex align-items-center me-2"
          style={{ height: "100%" }}
        >
          <FaPlus className="me-2" />
          Group
        </button>

        <Link
            className="wd-assignment-link"
            to={`/Kanbas/Courses/${cid}/AssignmentEditor/`}
            >
        <button
          id="wd-add-assignment-btn"
          className="btn btn-danger d-flex align-items-center"
          style={{ height: "100%" }}
        >
          <FaPlus className="me-2" />
          Assignment
        </button>
        </Link>

        {/* <Link
          to={`/Kanbas/Courses/${cid}/AssignmentEditor/`}
          className="btn btn-danger d-flex align-items-center wd-assignment-link"
          style={{ height: "100%" }}
          id="wd-add-assignment-btn"
        >
          <FaPlus className="me-2" />
          Assignment
        </Link> */}
        
      </div>
    </div>
  );
}
