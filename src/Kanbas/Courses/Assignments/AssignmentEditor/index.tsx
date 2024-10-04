import React from "react";

export default function AssignmentEditor() {
  return (
    <div className="p-4">
      <div>
        <label htmlFor="assignmentName">Assignment Name</label>
        <input type="text" id="assignmentName" className="form-control" defaultValue="A1" />
      </div>
      <br />
      <div>
        <label>Instructions</label>
        <div className="border p-3">
          <p>The assignment is <a href="#">available online</a></p>
          <p>Submit a link to the landing page of your Web application running on Netlify.</p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
        </div>
      </div>
      <br />
      <div>
        <label>Points</label>
        <input type="number" className="form-control" defaultValue="100" />
      </div>
      <br />
      <div>
        <label>Assignment Group</label>
        <select className="form-control">
          <option>Assignments</option>
        </select>
      </div>
      <br />
      <div>
        <label>Display Grade as</label>
        <select className="form-control">
          <option>Percentage</option>
        </select>
      </div>
      <br />
      <div>
        <label>Submission Type</label>
        <select className="form-control">
          <option>Online</option>
        </select>
      </div>
      <br />
      <div>
        <label>Assign to</label>
        <select className="form-control">
          <option>Everyone</option>
        </select>
      </div>
      <br />
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}
