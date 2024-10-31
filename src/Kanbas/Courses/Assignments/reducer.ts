import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      // 如果已经存在 _id，表明这是更新操作而不是添加新的作业
      if (assignment._id) return;
    
      // 为新作业生成一个唯一 ID
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title || "",
        score: assignment.score || "",
        available_date: assignment.available_date || "",
        due_date: assignment.due_date || "",
        course: assignment.course || ""
      };
    
      state.assignments.push(newAssignment); // 使用 push 添加新作业
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? { ...m, ...assignment } : m
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
