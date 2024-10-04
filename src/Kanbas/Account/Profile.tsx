import { Link } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "alice",
    password: "123",
    firstName: "Alice",
    lastName: "Wonderland",
    dob: "", // Date of Birth field
    email: "alice@wonderland.com",
    role: "User"
  });

  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h1>Profile</h1>
      <input
        id="wd-username"
        placeholder={profile.username}
        className="form-control mb-2"
        value={profile.username}
      />
      <input
        type="password"
        id="wd-password"
        placeholder={profile.password}
        className="form-control mb-2"
        value={profile.password}
      />
      <input
        id="wd-first-name"
        placeholder={profile.firstName}
        className="form-control mb-2"
        value={profile.firstName}
      />
      <input
        id="wd-last-name"
        placeholder={profile.lastName}
        className="form-control mb-2"
        value={profile.lastName}
      />
      <input
        type="date"
        id="wd-dob"
        placeholder="mm/dd/yyyy"
        className="form-control mb-2"
        value={profile.dob}
      />
      <input
        type="email"
        id="wd-email"
        placeholder={profile.email}
        className="form-control mb-2"
        value={profile.email}
      />
      <input
        id="wd-role"
        placeholder={profile.role}
        className="form-control mb-2"
        value={profile.role}
      />
      <Link
        id="wd-profile-btn"
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100"
      >
        Signout
      </Link>
    </div>
  );
}
