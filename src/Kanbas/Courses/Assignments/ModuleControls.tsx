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
      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Group
        </button>
      </div>

      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-danger dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Assignment
        </button>
      </div>
    </div>
  );
}
