import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard/DashBoard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  // const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // const fetchCourses = async () => {
  //   try {
  //     if (currentUser) {
  //       const userCourses = await userClient.findMyCourses(); // 获取用户的注册课程
  //       setCourses(userCourses); // 更新到本地状态
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch user courses:", error);
  //   }
  // };

  interface Enrollment {
    userId: string;
    courseId: string;
  }
  
  interface Course {
    _id: string;
    name: string;
    description?: string;
  }

  const fetchCourses = async () => {
    if (!currentUser) return; // 用户未登录时跳过
    try {
      const enrollments: Enrollment[] = await userClient.findMyEnrollments();
      console.log("Fetched Enrollments:", enrollments);

      const allCourses: Course[] = await courseClient.fetchAllCourses();
      console.log("Fetched All Courses:", allCourses);

      const enrolledCourses = allCourses.filter((course) =>
        enrollments.some((enrollment) => enrollment.courseId === course._id)
      );
      console.log("Filtered Enrolled Courses:", enrolledCourses);
      
      setCourses(enrolledCourses); // 更新本地状态
    } catch (error) {
      console.error("Failed to fetch courses or enrollments:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    fetchCourses={fetchCourses} // 将 fetchCourses 传递到 Dashboard
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
