import { useState, useEffect } from "react";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

export default function Users() {
  const { uid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    const allUsers = await client.findAllUsers();
    setUsers(allUsers);
  };

  const filterUsers = async (updatedRole: string, updatedName: string) => {
    if (!updatedRole && !updatedName) {
      fetchUsers();
    } else {
      const filteredUsers = await client.findUsersByFilters(
        updatedRole,
        updatedName
      );
      setUsers(filteredUsers);
    }
  };

  const handleFilterChange = (newRole: string, newName: string) => {
    setRole(newRole);
    setName(newName);
    filterUsers(newRole, newName);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

  return (
    <div>
      <h3>Users</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => handleFilterChange(role, e.target.value)}
          placeholder="Search by name"
          className="form-control"
          style={{ flex: 1 }} // Adjust width as needed
        />

        <select
          value={role}
          onChange={(e) => handleFilterChange(e.target.value, name)}
          className="form-select"
          style={{ flex: 1 }} // Adjust width as needed
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>

        <button
          onClick={createUser}
          className="float-end btn btn-danger wd-add-people"
        >
          <FaPlus className="me-2" />
          Users
        </button>
      </div>

      <PeopleTable users={users} />
    </div>
  );
}
