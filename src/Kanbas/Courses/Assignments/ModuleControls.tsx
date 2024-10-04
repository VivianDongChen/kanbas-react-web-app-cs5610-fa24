import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex align-items-center">
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
      <button className="btn btn-secondary me-2">
        <FaPlus className="me-2" /> Group
      </button>
      <button className="btn btn-danger">
        <FaPlus className="me-2" /> Assignment
      </button>
    </div>
  );
}

