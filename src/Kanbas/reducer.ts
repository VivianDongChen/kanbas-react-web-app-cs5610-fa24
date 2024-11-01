import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database"; 

// Enrollment interface定义
interface Enrollment {
_id: string;
user: string;
course: string;
}

const getInitialEnrollments = (): Enrollment[] => {
try {
const savedEnrollments = localStorage.getItem("enrollments");
if (savedEnrollments) {
return JSON.parse(savedEnrollments);
} else {
// 如果localStorage中没有数据，返回初始的数据库enrollments或空数组
return initialEnrollments.length ? initialEnrollments : [];
}
} catch (error) {
console.error("Error parsing enrollments from localStorage", error);
return initialEnrollments.length ? initialEnrollments : []; // 避免空白页面，返回一个有效数组
}
};

const initialState = {
enrollments: getInitialEnrollments(),
};

const enrollmentSlice = createSlice({
name: "enrollments",
initialState,
reducers: {
enrollCourse: (state, { payload }: PayloadAction<{ user: string; course: string }>) => {
const { user, course } = payload;
const isEnrolled = state.enrollments.some(
(enrollment) => enrollment.user === user && enrollment.course === course
);

if (!isEnrolled) {
state.enrollments.push({
_id: String(Date.now()), // 生成唯一_id
user,
course,
});
localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
}
},
unenrollCourse: (state, { payload }: PayloadAction<{ user: string; course: string }>) => {
const { user, course } = payload;
state.enrollments = state.enrollments.filter(
(enrollment) => !(enrollment.user === user && enrollment.course === course)
);
localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
},
setEnrollments: (state, { payload: enrollments }: PayloadAction<Enrollment[]>) => {
state.enrollments = enrollments;
localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
}
},
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;



// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { enrollments as initialEnrollments } from "./Database"; 

// // Enrollment interface定义
// interface Enrollment {
// _id: string;
// user: string;
// course: string;
// }

// // 初始化 enrollments，不使用 localStorage，仅从初始数据库导入
// const initialState = {
// enrollments: initialEnrollments|| [], // 直接使用导入的初始 enrollments 数据
// };

// const enrollmentSlice = createSlice({
// name: "enrollments",
// initialState,
// reducers: {
// enrollCourse: (state, { payload }: PayloadAction<{ user: string; course: string }>) => {
// const { user, course } = payload;
// const isEnrolled = state.enrollments.some(
// (enrollment) => enrollment.user === user && enrollment.course === course
// );

// if (!isEnrolled) {
// state.enrollments.push({
// _id: String(Date.now()), // 生成唯一_id
// user,
// course,
// });
// }
// },

// unenrollCourse: (state, { payload }: PayloadAction<{ user: string; course: string }>) => {
// const { user, course } = payload;
// state.enrollments = state.enrollments.filter(
// (enrollment) => !(enrollment.user === user && enrollment.course === course)
// );
// },
// setEnrollments: (state, { payload: enrollments }: PayloadAction<Enrollment[]>) => {
// state.enrollments = enrollments;
// }
// },
// });

// export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentSlice.actions;
// export default enrollmentSlice.reducer;
