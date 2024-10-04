import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function ModulesControls() {
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
      <button
        id="wd-add-module-btn"
        className="btn btn-lg me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>

      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
