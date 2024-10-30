import { Link } from "react-router-dom";
import "../styles.css";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation">
      <Link
        to={`/Kanbas/Account/Signin`}
        id="wd-account-signin-link"
        className="list-group-item active border border-0"
      >
        {" "}
        Signin{" "}
      </Link>{" "}
      <br />
      <Link
        to={`/Kanbas/Account/Signup`}
        id="wd-account-signup-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Signup{" "}
      </Link>{" "}
      <br />
      <Link
        to={`/Kanbas/Account/Profile`}
        id="wd-account-profile-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Profile{" "}
      </Link>{" "}
      <br />
    </div>
  );
}
