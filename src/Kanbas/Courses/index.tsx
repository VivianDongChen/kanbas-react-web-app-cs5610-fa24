// import { Navigate, Route, Routes } from "react-router-dom";
// import CoursesNavigation from "./Navigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./AssignmentEditor";
// import { FaAlignJustify } from "react-icons/fa";
// import PeopleTable from "./People/Table";

// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2 className="text-danger">
//         <FaAlignJustify className="me-4 fs-4 mb-1" />
//         Course 1234 </h2> <hr />
//       
//       </div>
//     </div>
//   );
// }
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./AssignmentEditor";
import PeopleTable from "./People/Table";
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";
import { Route, Routes, useParams } from "react-router";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}
      </h2>
      <div className="d-flex">
       <div className="d-none d-md-block">
         <CoursesNavigation />
       </div></div>
      <div className="flex-fill">
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="AssignmentEditor/:assignmentId"
            element={<AssignmentEditor />}
          />
          <Route path="People" element={<PeopleTable />} />
        </Routes>
      </div>
    </div>
  );
}
