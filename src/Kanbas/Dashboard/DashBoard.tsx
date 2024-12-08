import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import ProtectedRouteFaculty from "../Account/ProtectedRouteFaculty";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer";
import ProtectedRouteStudent from "../Account/ProtectedRouteStudent";
import * as courseClient from "../Courses/client";
import * as enrollmentClient from "./client";

export default function Dashboard({
  courses,
  course,
  enrolling,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  fetchCourses,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  fetchCourses: () => Promise<void>;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentReducer.enrollments
  );

  // const handleEnroll = async (courseId: string) => {
  //   try {
  //     await enrollmentClient.enrollCourse(currentUser._id, courseId);
  //     dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
  //     await fetchCourses();
  //   } catch (error) {
  //     console.error("Failed to enroll in course:", error);
  //   }
  // };

  // const handleUnenroll = async (courseId: string) => {
  //   try {
  //     await enrollmentClient.unenrollCourse(currentUser._id, courseId);
  //     dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
  //     await fetchCourses();
  //   } catch (error) {
  //     console.error("Failed to unenroll from course:", error);
  //   }
  // };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>{" "}
      <hr />
      <ProtectedRouteFaculty>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={async () => {
              await addNewCourse();
              await fetchCourses();
            }}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={async () => {
              await updateCourse();
              await fetchCourses();
            }}
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
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
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
                  <img
                    src={course.image}
                    alt={course.name}
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled); 
                          }}
                          className={`btn ${
                            course.enrolled ? "btn-danger" : "btn-success"
                          } float-end`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>

                    {/* <ProtectedRouteStudent>
                      {enrollments.some(
                        (enrollment: any) =>
                          enrollment.course === course._id &&
                          enrollment.user === currentUser._id
                      ) ? (
                        <button
                          className="btn btn-danger float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(course._id);
                          }}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnroll(course._id);
                          }}
                        >
                          Enroll
                        </button>
                      )}
                    </ProtectedRouteStudent> */}

                    <ProtectedRouteFaculty>
                      <button
                        onClick={async (event) => {
                          event.preventDefault();
                          await deleteCourse(course._id);
                          await fetchCourses();
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
