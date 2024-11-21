import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// export const USERS_API = `${REMOTE_SERVER}/api/users`;

// export const fetchAllCourses = async () => {
//   const { data } = await axiosWithCredentials.get(COURSES_API);
//   return data;
// };

// export const createCourse = async (course: any) => {
//   const { data } = await axiosWithCredentials.post(
//     `${USERS_API}/current/courses`,
//     course
//   );
//   return data;
// };

// export const deleteCourse = async (id: string) => {
//   const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
//   return data;
// };

// export const updateCourse = async (course: any) => {
//   const { data } = await axiosWithCredentials.put(
//     `${COURSES_API}/${course._id}`,
//     course
//   );
//   return data;
// };

// export const findModulesForCourse = async (courseId: string) => {
//   const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
//   return response.data;
// };

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${courseId}/assignments`);
  return response.data;
};

// export const createModuleForCourse = async (courseId: string, module: any) => {
//   const response = await axiosWithCredentials.post(
//   `${COURSES_API}/${courseId}/modules`,
//   module
//   );
//   return response.data;
// };