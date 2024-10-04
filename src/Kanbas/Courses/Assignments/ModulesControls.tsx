import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center mb-3">
      <div className="flex-grow-1 me-3">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-outline-secondary me-2">
          <FaPlus className="me-2" />
          Group
        </button>
        <button className="btn btn-danger">
          <FaPlus className="me-2" />
          Assignment
        </button>
      </div>
    </div>
  );
}
