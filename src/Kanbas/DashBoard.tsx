import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import React, { useState } from "react";
import ProtectedRouteFaculty from "./Account/ProtectedRouteFaculty";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer";
import ProtectedRouteStudent from "./Account/ProtectedRouteStudent";
import { enrollments } from "./Database"; // 导入 assignments 数据

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const enrollments = useSelector((state: any) => state.enrollmentReducer); // Current enrollment state
  const dispatch = useDispatch();

  console.log("Dashboard Component Loaded"); // 检查组件是否正常加载
  console.log("Current User:", currentUser);
  console.log("Enrollments:", enrollments);

  const [showAllCourses, setShowAllCourses] = useState(false); // a boolean state that toggles between displaying all courses or only enrolled courses for students.

  const handleToggleEnrollments = () => {
    setShowAllCourses((prev) => !prev); //This function toggles showAllCourses between true and false
  };

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ user: currentUser._id, course: courseId })); // Dispatch action to enroll course from the student’s enrollment list, using the course’s ID as a parameter.
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ user: currentUser._id, course: courseId })); // Dispatch action to unenroll course from the student’s enrollment list, using the course’s ID as a parameter.
  };

  // This filters courses based on showAllCourses.
  // If showAllCourses is true, all courses are displayed.
  // Otherwise, only courses that the student is enrolled in are displayed.

  // const filteredCourses = showAllCourses
  //   ? courses
  //   : courses.filter((course) =>
  //       enrollments.some(
  //         (enrollment: any) =>
  //           enrollment.course === course._id &&
  //           enrollment.user === currentUser._id // Check that the enrollment matches the current user
  //       )
  //     );

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) =>
        enrollments?.some(
          // Use optional chaining
          (enrollment: any) =>
            enrollment.course === course._id &&
            enrollment.user === currentUser._id
        )
      );

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <ProtectedRouteFaculty>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Image URL (optional)"
          value={course.image}
          onChange={(e) => setCourse({ ...course, image: e.target.value })}
        />
        <hr />
      </ProtectedRouteFaculty>
      {/* Enrollments Button for Students */}
      <ProtectedRouteStudent>
        <button
          className="btn btn-primary float-end"
          onClick={handleToggleEnrollments}
        >
          {showAllCourses ? "Show Enrolled" : "Show All Courses"}
        </button>
      </ProtectedRouteStudent>
      <h2 id="wd-dashboard-published">
        Published Courses{" "}
        <ProtectedRouteFaculty>({courses.length})</ProtectedRouteFaculty>
      </h2>
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src={course.image}
                    alt={course.name}
                    width="100%"
                    height={160}
                  />
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

                    {/* Enroll and Unenroll Buttons for Students */}
                    <ProtectedRouteStudent>
                      {enrollments.some(
                        (enrollment: any) =>
                          enrollment.course === course._id &&
                          enrollment.user === currentUser._id // Only show Unenroll if this user is enrolled
                      ) ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => handleUnenroll(course._id)}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() => handleEnroll(course._id)}
                        >
                          Enroll
                        </button>
                      )}
                    </ProtectedRouteStudent>

                    <ProtectedRouteFaculty>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>

                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </ProtectedRouteFaculty>
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
