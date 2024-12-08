import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link, useParams } from "react-router-dom";
import * as courseClient from "../client";

export default function PeopleTable({
  users: propUsers = [],
}: {
  users?: any[];
}) {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (propUsers && propUsers.length > 0) {
      setUsers(propUsers);
    } else if (cid) {
      const fetchUsersForCourse = async () => {
        try {
          const fetchedUsers = await courseClient.findUsersForCourse(cid);
          console.log("Fetched users for course:", fetchedUsers);
          setUsers(fetchedUsers);
        } catch (error) {
          console.error("Error fetching users for course:", error);
        }
      };
      fetchUsersForCourse();
    }
  }, [propUsers, cid]);

  useEffect(() => {
    console.log("propUsers:", propUsers);
    console.log("courseId:", cid);
    console.log("Current users:", users);
  }, [propUsers, cid, users]);

  console.log("Current courseId from URL:", cid);

  return (
    <div id="wd-people-table">
      <PeopleDetails />
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
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  to={`/Kanbas/Account/Users/${user._id}`}
                  className="text-decoration-none"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  {`${user.firstName} ${user.lastName}`}
                </Link>
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
