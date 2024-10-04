import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport, BiHome, BiBarChart } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineNotification } from "react-icons/ai";
import { MdOutlineAnnouncement } from "react-icons/md";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiHome className="me-2 fs-5" /> Choose Home Page
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiBarChart className="me-2 fs-5" /> View course Screen
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdOutlineAnnouncement className="me-2 fs-5" /> New Announcement
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiBarChart className="me-2 fs-5" /> New Analytics
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineNotification className="me-2 fs-5" /> View Course Notifications
      </button>
    </div>
  );
}
