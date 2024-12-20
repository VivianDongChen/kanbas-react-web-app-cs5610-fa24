import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentsControls(){
  const { cid } = useParams(); //Extracts the cid parameter from the URL
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
          to={`/Kanbas/Courses/${cid}/AssignmentEditor/new`}
          className="btn btn-danger d-flex align-items-center wd-assignment-link"
          style={{ height: "100%" }}
          id="wd-add-assignment-btn"
        >
          <FaPlus className="me-2" />
          Assignment
        </Link>
        
      </div>
    </div>
  );
}
