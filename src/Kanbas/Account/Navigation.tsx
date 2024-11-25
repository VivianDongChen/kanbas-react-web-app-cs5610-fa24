import { Link } from "react-router-dom";
import "../styles.css";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation">
      {links.includes("Signin") && (
        <Link
          to={`/Kanbas/Account/Signin`}
          id="wd-account-signin-link"
          className="list-group-item active border border-0"
        >
          Signin
        </Link>
      )}
      <br />

      {links.includes("Signup") && (
        <Link
          to={`/Kanbas/Account/Signup`}
          id="wd-account-signup-link"
          className="list-group-item text-danger border border-0"
        >
          Signup
        </Link>
      )}
      <br />

      {links.includes("Profile") && (
        <Link
          to={`/Kanbas/Account/Profile`}
          id="wd-account-profile-link"
          className="list-group-item text-danger border border-0"
        >
          Profile
        </Link>
      )}

      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}
    </div>
  );
}
