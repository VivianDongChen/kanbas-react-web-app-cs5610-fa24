import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./DashBoard";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <h1>Kanbas</h1>
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
