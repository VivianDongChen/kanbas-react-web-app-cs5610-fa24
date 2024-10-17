// import { Link, NavLink } from "react-router-dom"; // Use NavLink for active links
// import { AiOutlineDashboard } from "react-icons/ai";
// import { LiaBookSolid } from "react-icons/lia";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { BsCalendar3, BsInbox, BsGear } from "react-icons/bs";

// export default function KanbasNavigation() {
//   return (
//     <div
//       id="wd-kanbas-navigation"
//       className="list-group rounded-0 position-fixed top-0 bottom-0 d-none d-md-block z-2 bg-black"
//       style={{ width: 110 }} // Sidebar width set to 110px
//     >
//       <a
//         id="wd-neu-link"
//         target="_blank"
//         href="https://www.northeastern.edu/"
//         className="list-group-item bg-black border-0 text-center"
//         rel="noreferrer"
//       >
//         <img src="/images/NEU.png" width="75px" alt="Northeastern University Logo" />
//       </a>

//       <NavLink
//         to="/Kanbas/Account"
//         id="wd-account-link"
//         className={({ isActive }) =>
//           `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
//         }
//       >
//         <FaRegCircleUser className="fs-1 text-white" /> {/* Account icon in white */}
//         <br />
//         Account
//       </NavLink>

//       <NavLink
//         to="/Kanbas/Dashboard"
//         id="wd-dashboard-link"
//         className={({ isActive }) =>
//           `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
//         }
//       >
//         <AiOutlineDashboard className="fs-1 text-danger" /> {/* Dashboard icon in red */}
//         <br />
//         Dashboard
//       </NavLink>

//       <NavLink
//         to="/Kanbas/Courses"
//         id="wd-course-link"
//         className={({ isActive }) =>
//           `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
//         }
//       >
//         <LiaBookSolid className="fs-1 text-danger" /> {/* Courses icon in red */}
//         <br />
//         Courses
//       </NavLink>

//       <NavLink
//         to="/Kanbas/Calendar"
//         id="wd-calendar-link"
//         className={({ isActive }) =>
//           `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
//         }
//       >
//         <BsCalendar3 className="fs-1 text-danger" /> {/* Calendar icon in red */}
//         <br />
//         Calendar
//       </NavLink>
      
//       <NavLink
//         to="/Kanbas/Inbox"
//         id="wd-inbox-link"
//         className={({ isActive }) =>
//           `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
//         }
//       >
//         <BsInbox className="fs-1 text-danger" /> {/* Inbox icon in red */}
//         <br />
//         Inbox
//       </NavLink>

//       <NavLink
//         to="/Labs"
//         id="wd-labs-link"
//         className={({ isActive }) =>
//           `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
//         }
//       >
//         <BsGear className="fs-1 text-danger" /> {/* Labs icon in red */}
//         <br />
//         Labs
//       </NavLink>
      
//     </div>
//   );
// }


import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
const { pathname } = useLocation();
const links = [
{ label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
{ label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
{ label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
{ label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
{ label: "Labs", path: "/Labs", icon: LiaCogSolid },
];
return (
<div id="wd-kanbas-navigation" style={{width: 120}}
className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
<a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
className="list-group-item bg-black border-0 text-center">
<img src="/images/NEU.png" width="75px" /></a>
<Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
<FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
<br />
Account
</Link>
{links.map((link) => (
<Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
{link.icon({ className: "fs-1 text-danger"})}
<br />
{link.label}
</Link>
))}
</div>
);}