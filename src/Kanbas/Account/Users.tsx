import { useState, useEffect } from "react";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";

export default function Users() {
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
      const filteredUsers = await client.findUsersByFilters(updatedRole, updatedName);
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

  return (
    <div>
      <h3>Users</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => handleFilterChange(role, e.target.value)} 
        placeholder="Search by name"
        className="form-control float-start w-25 me-2 wd-filter-by-name"
      />

       <select
        value={role}
        onChange={(e) => handleFilterChange(e.target.value, name)} 
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} />
    </div>
  );
}
