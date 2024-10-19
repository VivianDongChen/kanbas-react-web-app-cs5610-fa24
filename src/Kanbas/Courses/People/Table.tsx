// import React from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { useParams } from "react-router-dom";
// import * as db from "../../Database";

// export default function PeopleTable() {
//   const { cid } = useParams();
//   const { users, enrollments } = db;

//   const enrolledParticipants = enrollments
//     .filter((enrollment) => enrollment.course === cid)
//     .map((enrollment) => users.find((user) => user._id === enrollment.user))
//     .filter(Boolean); // 确保用户存在

//   return (
//     <div id="wd-people-table">
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Tony</span>{" "}
//               <span className="wd-last-name">Stark</span>
//             </td>
//             <td className="wd-login-id">001234561S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-01T00:00:00.000Z</td>
//             <td className="wd-total-activity">10:21:32</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Bruce</span>{" "}
//               <span className="wd-last-name">Wayne</span>
//             </td>
//             <td className="wd-login-id">001234562S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-11-02T00:00:00.000Z</td>
//             <td className="wd-total-activity">15:32:43</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Steve</span>{" "}
//               <span className="wd-last-name">Rogers</span>
//             </td>
//             <td className="wd-login-id">001234563S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-02T00:00:00.000Z</td>
//             <td className="wd-total-activity">23:32:43</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Natasha</span>{" "}
//               <span className="wd-last-name">Romanoff</span>
//             </td>
//             <td className="wd-login-id">001234564S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">TA</td>
//             <td className="wd-last-activity">2020-11-05T00:00:00.000Z</td>
//             <td className="wd-total-activity">13:23:34</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}