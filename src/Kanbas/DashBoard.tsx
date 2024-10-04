// import { Link } from "react-router-dom";

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img src="/images/reactjs.jpg" width="100%" alt="CS1234 React JS course"/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1234 React JS
//                   </h5>
//                   <p className="card-text">Full Stack software developer</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//           <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/5001/Home"
//               >
//                 <img src="/images/5001.jpg" width="100%" alt="CS5001 Python course"/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5001 Python 
//                   </h5>
//                   <p className="card-text">Python</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//           <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/5200/Home"
//               >
//                 <img src="/images/5200.jpg" width="100%" alt="CS5200 DataBase course"/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5200 DataBase 
//                   </h5>
//                   <p className="card-text">Data Base Foundation</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//           <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/5500/Home"
//               >
//                 <img src="/images/5500.jpg" width="100%" alt="CS5500 Software Engineering course"/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5500 Software Engineering 
//                   </h5>
//                   <p className="card-text">Software Engineering Foundation</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//             </div>
//             <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//           <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/6620/Home"
//               >
//                 <img src="/images/6620.jpg" width="100%" alt="CS6620 Cloud Computing course"/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS6620 Cloud Computing 
//                   </h5>
//                   <p className="card-text">AWS</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//           <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/5004/Home"
//               >
//                 <img src="/images/5004.jpg" width="100%" alt="CS5004 Java course"/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5004 Java
//                   </h5>
//                   <p className="card-text">OOD</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//           <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/5008/Home"
//               >
//                 <img src="/images/5008.jpg" width="100%" alt="CS5008 C++ course"/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5008 C++
//                   </h5>
//                   <p className="card-text">Data Structure</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//     </div>
//     </div></div>
//   );
// }


import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Add your custom styles for any additional adjustments

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="container">
        <div className="row g-4" style={{ marginLeft: "110px" }}> {/* Adjusts spacing to the right of the sidebar */}
          <div
            className="col-12 col-md-4 col-lg-2"
            style={{ width: "250px", marginBottom: "40px" }}
          >
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  className="card-img-top"
                  alt="CS1234 React JS course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Term: Fall 2024 | Section: 01</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="col-12 col-md-4 col-lg-2"
            style={{ width: "250px", marginBottom: "40px" }}
          >
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home"
              >
                <img
                  src="/images/5001.jpg"
                  className="card-img-top"
                  alt="CS5001 Python course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5001 Python
                  </h5>
                  <p className="card-text">Term: Fall 2024 | Section: 02</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="col-12 col-md-4 col-lg-2"
            style={{ width: "250px", marginBottom: "40px" }}
          >
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5200/Home"
              >
                <img
                  src="/images/5200.jpg"
                  className="card-img-top"
                  alt="CS5200 DataBase course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5200 DataBase
                  </h5>
                  <p className="card-text">Term: Spring 2024 | Section: 03</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="col-12 col-md-4 col-lg-2"
            style={{ width: "250px", marginBottom: "40px" }}
          >
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5500/Home"
              >
                <img
                  src="/images/5500.jpg"
                  className="card-img-top"
                  alt="CS5500 Software Engineering course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5500 Software Engineering
                  </h5>
                  <p className="card-text">Term: Fall 2024 | Section: 04</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="col-12 col-md-4 col-lg-2"
            style={{ width: "250px", marginBottom: "40px" }}
          >
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/6620/Home"
              >
                <img
                  src="/images/6620.jpg"
                  className="card-img-top"
                  alt="CS6620 Cloud Computing course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6620 Cloud Computing
                  </h5>
                  <p className="card-text">Term: Spring 2025 | Section: 01</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="col-12 col-md-4 col-lg-2"
            style={{ width: "250px", marginBottom: "40px" }}
          >
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5004/Home"
              >
                <img
                  src="/images/5004.jpg"
                  className="card-img-top"
                  alt="CS5004 Java course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5004 Java
                  </h5>
                  <p className="card-text">Term: Fall 2024 | Section: 03</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="col-12 col-md-4 col-lg-2"
            style={{ width: "250px", marginBottom: "40px" }}
          >
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5008/Home"
              >
                <img
                  src="/images/5008.jpg"
                  className="card-img-top"
                  alt="CS5008 C++ course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5008 C++
                  </h5>
                  <p className="card-text">Term: Spring 2024 | Section: 01</p>
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
