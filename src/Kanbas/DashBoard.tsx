import { Link } from "react-router-dom";
import "./Dashboard.css";
import * as db from "./Database";
import React,{useState} from "react";

export default function Dashboard() {
  // const courses = db.courses;
  const [courses, setCourses] = useState<any[]>(db.courses);

  const course: any = {
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
    // create a course object with default values
    };

  const addNewCourse = () => {
    const newCourse = { ...course,
    _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
    };

  return (
    <div className = "p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <h5>New Course
      <button className="btn btn-primary float-end"
      id="wd-add-new-course-click"
      onClick={addNewCourse} > Add </button>
      </h5><hr />
      
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div className="row" id="wd-dashboard-courses">
      <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
            <div className="card">


                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={course.image} alt={course.name} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
