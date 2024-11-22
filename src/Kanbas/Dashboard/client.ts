import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const unenrollCourse = async (userId: string, courseId: string) => {
  await axiosWithCredentials.delete(`${ENROLLMENTS_API}`, { data: { userId, courseId } });
};

export const enrollCourse = async (userId: string, courseId: string) => {
  await axiosWithCredentials.put(`${ENROLLMENTS_API}`, { userId, courseId });
};
