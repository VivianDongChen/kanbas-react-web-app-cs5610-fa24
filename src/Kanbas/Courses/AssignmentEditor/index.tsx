import React from "react";

export default function AssignmentEditor() {
  return (
    <div className="p-4">
      {/* Assignment Name */}
      <div>
        <label htmlFor="assignmentName">Assignment Name</label>
        <input type="text" id="assignmentName" className="form-control" defaultValue="A1" />
      </div>
      <br />

      {/* Instructions */}
      <div>
        <label>Instructions</label>
        <div className="border p-3">
          <p>The assignment is <a href="#">available online</a></p>
          <p>Submit a link to the landing page of your Web application running on Netlify.</p>
          <br />
          <p>The landing page should include the following:</p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <br />
          <p>The Kanbas application should include a link to navigate back to the landing page.</p>
        </div>
      </div>
      <br />

      {/* Points */}
      <div>
        <label>Points</label>
        <input type="number" className="form-control" defaultValue="100" />
      </div>
      <br />

      {/* Assignment Group */}
      <div>
        <label>Assignment Group</label>
        <select className="form-control">
          <option>Assignments</option>
        </select>
      </div>
      <br />

      {/* Display Grade as */}
      <div>
        <label>Display Grade as</label>
        <select className="form-control">
          <option>Percentage</option>
        </select>
      </div>
      <br />

      {/* Submission Type */}
      <div>
        <label>Submission Type</label>
        <select className="form-control">
          <option>Online</option>
        </select>
        <br />
        <label>Online Entry Options</label>
        <div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="websiteUrl" defaultChecked />
            <label className="form-check-label" htmlFor="websiteUrl">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="mediaRecordings" />
            <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="studentAnnotation" />
            <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="fileUploads" />
            <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
          </div>
        </div>
      </div>
      <br />

      {/* Assign to */}
      <div>
        <label>Assign to</label>
        <select className="form-control">
          <option>Everyone</option>
        </select>
      </div>
      <br />

      {/* Dates */}
      <div>
        <label>Due</label>
        <input type="datetime-local" className="form-control" defaultValue="2024-05-13T23:59" />
      </div>
      <br />
      <div className="row">
        <div className="col">
          <label>Available from</label>
          <input type="datetime-local" className="form-control" defaultValue="2024-05-06T12:00" />
        </div>
        <div className="col">
          <label>Until</label>
          <input type="datetime-local" className="form-control" />
        </div>
      </div>
      <br />

      {/* Action Buttons */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}


