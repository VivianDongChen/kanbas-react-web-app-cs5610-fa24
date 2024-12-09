import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer"; // Use your reducer functions
import { useEffect } from "react";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer); 

  const existingAssignment =
    aid !== "new"
      ? assignments.find((a: any) => a.course === cid && a._id === aid)
      : null;

  const [assignmentData, setAssignmentData] = useState({
    title: "",
    score: "",
    available_date: "",
    until_date: "",
    due_date: "",
    assignmentGroup: "",
    displayGradeAs: "",
    course: cid,
    instructions: `
          The assignment is available online.
          Submit a link to the landing page of your Web application running on Netlify.
          The landing page should include the following:
          - Your full name and section
          - Links to each of the lab assignments
          - Link to the Kanbas application
          - Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.
        `,
  }); 

  useEffect(() => {
    console.log("Current assignment data:", assignmentData);
    if (aid !== "new" && existingAssignment) {
      setAssignmentData(existingAssignment);  // Updates assignmentData if an existing assignment is found
    }
  }, [existingAssignment, aid]); 

  const handleChange = (e: any) => { 
    const { name, value } = e.target;
    setAssignmentData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const createAssignmentForCourse = async (cid: string, assignmentData: any) => {
    if (!cid) throw new Error("Course ID is required");
    const assignment = await coursesClient.createAssignmentForCourse(cid, assignmentData);
    return assignment;
  };

  const updateAssignmentData = async (assignmentData: any) => {
    const assignment = await assignmentsClient.updateAssignment(assignmentData);
    return assignment;
  };
  
  const handleSave = async () => {

    if (!cid) {
      console.error("Course ID is missing");
      return; 
    }
  
    if (aid === "new") {
      const newAssignment = await createAssignmentForCourse(cid, assignmentData); 
      if (newAssignment) {
        dispatch(addAssignment(newAssignment)); 
      }
    } else {
      const assignmentUpdated = await updateAssignmentData(assignmentData);
      if (assignmentUpdated) {
        dispatch(updateAssignment({ ...assignmentUpdated, _id: aid })); 
      }
      
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`); 
  };

  if (aid !== "new" && !existingAssignment) {
    return <h2>Assignment not found</h2>;
  }

  return (
    <div className="p-4">
      {/* Assignment Name */}
      <div className="form-group">
        <label htmlFor="assignmentName">Assignment Name</label>
        <input
          type="text"
          id="assignmentTitle"
          name="title"
          className="form-control"
          value={assignmentData.title}
          onChange={handleChange}
        />
      </div>
      <br />

      {/* Instructions */}
      <div className="form-group">
        <label>Instructions</label>
        <textarea
          name="instructions"
          className="form-control"
          rows={8}
          value={assignmentData.instructions}
          onChange={handleChange}
        />
      </div>
      <br />

      {/* Points */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-end">Points</label>
        <div className="col-sm-10">
          <input
            type="number"
            name="score"
            className="form-control"
            value={assignmentData.score}
            onChange={handleChange}
          />
        </div>
      </div>
      <br />

      {/* Assignment Group */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select
            name="assignmentGroup"
            className="form-select"
            value={assignmentData.assignmentGroup}
            onChange={handleChange}
          >
            <option>ASSIGNMENT</option>
            <option>Quizzes</option>
            <option>Labs</option>
            <option>Projects</option>
          </select>
        </div>
      </div>
      <br />

      {/* Display Grade as */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-end">
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select
            className="form-select"
            name="displayGradeAs"
            value={assignmentData.displayGradeAs}
            onChange={handleChange}
          >
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
            <option>Letter Grade</option>
          </select>
        </div>
      </div>
      <br />

      {/* Submission Type */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-end">
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="border p-3">
            <select className="form-select">
              <option>Online</option>
              <option>In-person</option>
            </select>
            <br />

            <label>Online Entry Options</label>
            <div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="websiteUrl"
                />
                <label className="form-check-label" htmlFor="websiteUrl">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="mediaRecordings"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="mediaRecordings">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="studentAnnotation"
                />
                <label className="form-check-label" htmlFor="studentAnnotation">
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="fileUploads"
                />
                <label className="form-check-label" htmlFor="fileUploads">
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="fileUploads2"
                />
                <label className="form-check-label" htmlFor="fileUploads2">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Assign to */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-end">Assign</label>
        <div className="col-sm-10 border p-3">
          <div className="form-group">
            <label>Assign to</label>
            <select className="form-control"></select>
          </div>

          <div className="form-group">
            <label>Due</label>
            <input
              type="datetime-local"
              name="due_date"
              className="form-control"
              value={assignmentData.due_date}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col">
              <label>Available from</label>
              <input
                type="datetime-local"
                className="form-control"
                name="available_date"
                value={assignmentData.available_date}
                onChange={handleChange}
              />
            </div>

            <div className="col">
              <label>Until</label>
              <input
                type="datetime-local"
                className="form-control"
                name="until_date"
                value={assignmentData.until_date}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Action Buttons */}
      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
