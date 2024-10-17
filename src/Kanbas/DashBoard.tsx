import { Link } from "react-router-dom";
import "./Dashboard.css";
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
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

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  alt="CS1234 React JS course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">
                    Term: Fall 2024 | Section: 01
                    <br />
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home"
              >
                <img
                  src="/images/5001.jpg"
                  width="100%"
                  alt="CS5001 Python course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5001 Python
                  </h5>
                  <p className="card-text">
                    Term: Fall 2024 | Section: 02
                    <br />
                    Python
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5200/Home"
              >
                <img
                  src="/images/5200.jpg"
                  width="100%"
                  alt="CS5200 DataBase course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5200 DataBase
                  </h5>
                  <p className="card-text">
                    Term: Fall 2024 | Section: 02
                    <br />
                    Data Base Foundation
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5500/Home"
              >
                <img
                  src="/images/5500.jpg"
                  width="100%"
                  alt="CS5500 Software Engineering course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5500 Software Engineering
                  </h5>
                  <p className="card-text">
                    Term: Fall 2024 | Section: 02
                    <br />
                    Software Engineering Foundation
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/6620/Home"
              >
                <img
                  src="/images/6620.jpg"
                  width="100%"
                  alt="CS6620 Cloud Computing course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6620 Cloud Computing
                  </h5>
                  <p className="card-text">
                    Term: Fall 2024 | Section: 02
                    <br />
                    AWS
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5004/Home"
              >
                <img
                  src="/images/5004.jpg"
                  width="100%"
                  alt="CS5004 Java course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5004 Java
                  </h5>
                  <p className="card-text">
                    Term: Fall 2024 | Section: 02
                    <br />
                    OOD
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5008/Home"
              >
                <img
                  src="/images/5008.jpg"
                  width="100%"
                  alt="CS5008 C++ course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5008 C++
                  </h5>
                  <p className="card-text">
                    Term: Fall 2024 | Section: 02
                    <br />
                    Data Structure
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
