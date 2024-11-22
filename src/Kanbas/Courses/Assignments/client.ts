import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
    `${ASSIGNMENTS_API}/${courseId}/assignments`,
    assignment
    );
    return response.data;
  };

export const updateAssignmentData = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
  };

//   export const deleteModule = async (moduleId: string) => {
//     const response = await axiosWithCredentials.delete(
//       `${MODULES_API}/${moduleId}`
//     );
//     return response.data;
//   };


export const removeAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(
      `${ASSIGNMENTS_API}/${assignmentId}`
    );
    return response.data;
  };
