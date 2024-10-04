import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="mx-3"></div>
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
    </div>
  );
}
