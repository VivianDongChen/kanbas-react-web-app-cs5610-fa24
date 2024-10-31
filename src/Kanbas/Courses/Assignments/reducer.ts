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
      // Check if assignment already exists by _id to prevent duplicates
      const isExistingAssignment = state.assignments.some(a => a._id === assignment._id);
      if (!isExistingAssignment) {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        score: assignment.score,
        available_date: assignment.available_date,
        due_date: assignment.due_date,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    }
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
