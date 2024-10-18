import React from "react";
import { useParams } from "react-router-dom";
import * as db from "../../Database"; 

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const assignments = db.assignments;

  const assignment = assignments.find(
    (a) => a.course === cid && a._id === aid
  );

  if (!assignment) {
    return <h2>Assignment not found</h2>;
  }


  return (
    <div className="p-4">
      {/* Assignment Name */}
      <div className="form-group">
        <label htmlFor="assignmentName">Assignment Name</label>
        <input type="text" id="assignmentName" className="form-control" defaultValue={assignment.title} />
      </div>
      <br />

      {/* Instructions */}
      <div className="form-group">
        <label>Instructions</label>
        <div className="border p-3">
          <p>The assignment is <span style={{ color: "red" }}>available online</span></p>
          <p>Submit a link to the landing page of your Web application running on <span style={{ color: "black" }}>Netlify</span>.</p>
          <p>The landing page should include the following:</p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the <span style={{ color: "black" }}>Kanbas</span> application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p>The <span style={{ color: "black" }}>Kanbas</span> application should include a link to navigate back to the landing page.</p>
        </div>
      </div>
      <br />

      {/* Points */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-end">Points</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" defaultValue={assignment.score} />
        </div>
      </div>
      <br />

      {/* Assignment Group */}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label text-end">Assignment Group</label>
        <div className="col-sm-10">
          <select className="form-select">
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
        <label className="col-sm-2 col-form-label text-end">Display Grade as</label>
        <div className="col-sm-10">
          <select className="form-select">
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
        <label className="col-sm-2 col-form-label text-end">Submission Type</label>
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
        <label className="col-sm-2 col-form-label text-end">Assign</label>
        <div className="col-sm-10 border p-3">
          <div className="form-group">
            <label>Assign to</label>
            <select className="form-control">
              <option>Everyone</option>
            </select>
          </div>
          <div className="form-group">
            <label>Due</label>
            <input type="datetime-local" className="form-control" defaultValue={assignment.due_date} />
          </div>
          <div className="row">
            <div className="col">
              <label>Available from</label>
              <input type="datetime-local" className="form-control" defaultValue={assignment.available_date} />
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



// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import * as db from "../../Database"; // 导入数据库

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams(); // 从 URL 中解析课程ID和作业ID
//   const assignments = db.assignments || []; // 防止 assignments 为 undefined
//   const [assignment, setAssignment] = useState(null); // 用于存储当前作业的数据

//   // 根据作业ID找到对应的作业信息
//   useEffect(() => {
//     const selectedAssignment = assignments.find((a) => a._id === aid);
//     if (selectedAssignment) {
//       setAssignment(selectedAssignment);
//     }
//   }, [aid, assignments]);

//   if (!assignment) return <div>Loading...</div>; // 在数据加载前显示 Loading...

//   return (
//     <div className="p-4">
//       {/* 作业名称 */}
//       <div className="form-group">
//         <label htmlFor="assignmentName">Assignment Name</label>
//         <input
//           type="text"
//           id="assignmentName"
//           className="form-control"
//           defaultValue={assignment?.title || ""}
//         />
//       </div>
//       <br />

//       {/* Points */}
//       <div className="form-group row">
//         <label className="col-sm-2 col-form-label text-end">Points</label>
//         <div className="col-sm-10">
//           <input
//             type="number"
//             className="form-control"
//             defaultValue={typeof assignment?.score === "string" 
//               ? assignment.score.replace("pt", "") 
//               : ""}
//           />
//         </div>
//       </div>
//       <br />

//       {/* Due Date */}
//       <div className="form-group row">
//         <label className="col-sm-2 col-form-label text-end">Due Date</label>
//         <div className="col-sm-10">
//           <input
//             type="datetime-local"
//             className="form-control"
//             defaultValue={assignment?.due_date ? formatDateTime(assignment.due_date) : ""}
//           />
//         </div>
//       </div>
//       <br />

//       {/* Available Date */}
//       <div className="form-group row">
//         <label className="col-sm-2 col-form-label text-end">Available Date</label>
//         <div className="col-sm-10">
//           <input
//             type="datetime-local"
//             className="form-control"
//             defaultValue={assignment?.available_date ? formatDateTime(assignment.available_date) : ""}
//           />
//         </div>
//       </div>
//       <br />

//       {/* Action Buttons */}
//       <hr />
//       <div className="d-flex justify-content-end">
//         <Link to={`/Kanbas/Courses/${cid}`} className="btn btn-secondary me-2">
//           Cancel
//         </Link>
//         <Link to={`/Kanbas/Courses/${cid}`} className="btn btn-danger">
//           Save
//         </Link>
//       </div>
//     </div>
//   );
// }

// // 辅助函数：将日期格式转换为 HTML5 datetime-local 格式
// function formatDateTime(dateString) {
//   if (!dateString) return ""; // 如果日期不存在，返回空字符串
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   return `${year}-${month}-${day}T${hours}:${minutes}`;
// }
