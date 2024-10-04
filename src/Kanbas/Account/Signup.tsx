import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";

export default function Account() {
  return (
    <div id="wd-account-screen" className="container-fluid">
      <div className="row">
        {/* Account Navigation Column */}
        <div className="col-md-1"> {/* Further reduced width for AccountNavigation */}
          <AccountNavigation />
        </div>

        {/* Spacer and Main Content */}
        <div className="col-md-4 offset-md-1"> {/* Further reduced width and offset for content */}
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
