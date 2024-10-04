import React from "react";
import "./AssignmentEditor.css"; // Assuming you have a CSS file for additional styles

export default function AssignmentEditor() {
  return (
    <div className="p-4 assignment-editor">
      {/* Assignment Name */}
      <div className="form-group row">
        <label htmlFor="assignmentName" className="col-sm-2 col-form-label text-right">Assignment Name</label>
        <div className="col-sm-10">
          <input type="text" id="assignmentName" className="form-control" defaultValue="A1" />
        </div>
      </div>
      <br />

      {/* Instructions */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-right">Instructions</label>
        <div className="col-sm-10">
          <div className="border p-3">
            <p>The assignment is <span className="text-danger">available online</span></p>
            <p>Submit a link to the landing page of your Web application running on <span className="text-danger">Netlify</span>.</p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the <span className="text-danger">Kanbas</span> application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>The <span className="text-danger">Kanbas</span> application should include a link to navigate back to the landing page.</p>
          </div>
        </div>
      </div>
      <br />

      {/* Points */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-right">Points</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" defaultValue="100" />
        </div>
      </div>
      <br />

      {/* Assignment Group */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-right">Assignment Group</label>
        <div className="col-sm-10">
          <select className="form-control">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <br />

      {/* Display Grade as */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-right">Display Grade as</label>
        <div className="col-sm-10">
          <select className="form-control">
            <option>Percentage</option>
          </select>
        </div>
      </div>
      <br />

      {/* Submission Type */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-right">Submission Type</label>
        <div className="col-sm-10">
          <div className="border p-3">
            <select className="form-control">
              <option>Online</option>
            </select>
            <br />
            <label>Online Entry Options</label>
            <div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="websiteUrl" />
                <label className="form-check-label" htmlFor="websiteUrl">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="mediaRecordings" defaultChecked />
                <label className="form-check-label" htmlFor="mediaRecordings">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="studentAnnotation" />
                <label className="form-check-label" htmlFor="studentAnnotation">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="fileUploads" />
                <label className="form-check-label" htmlFor="fileUploads">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="fileUploads2" />
                <label className="form-check-label" htmlFor="fileUploads2">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Assign to */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-right">Assign</label>
        <div className="col-sm-10 border p-3">
          <div className="form-group">
            <label>Assign to</label>
            <select className="form-control">
              <option>Everyone</option>
            </select>
          </div>
          <div className="form-group">
            <label>Due</label>
            <input type="datetime-local" className="form-control" defaultValue="2024-05-13T23:59" />
          </div>
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
        </div>
      </div>
      <br />

      {/* Action Buttons */}
      <hr />
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}



