import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.put(`${ENROLLMENTS_API}`, {
    userId,
    courseId,
  });
  return response.data;
};

export const unenrollCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}`, {
    data: { userId, courseId },
  });
  return response.data;
};