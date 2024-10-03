import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { BsCalendar3, BsInbox, BsGear } from "react-icons/bs";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center" rel="noreferrer"
      >
        <img src="/images/NEU.png" width="75px" />
      </a><br />

      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </Link>

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>

      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>

      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <BsCalendar3 className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <BsInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>

      <Link
        to="/Kanbas/Labs"
        id="wd-labs-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <BsGear className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
      
    </div>
  );
}
