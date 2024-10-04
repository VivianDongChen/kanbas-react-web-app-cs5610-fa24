import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex align-items-center justify-content-between">
      {/* Search Input */}
      <div className="input-group me-3" style={{ flexGrow: 1 }}>
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
        />
      </div>

      {/* Group and Assignment Buttons */}
      <button
        id="wd-add-group-btn"
        className="btn btn-outline-secondary me-2"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <button
        id="wd-add-assignment-btn"
        className="btn btn-danger"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}


