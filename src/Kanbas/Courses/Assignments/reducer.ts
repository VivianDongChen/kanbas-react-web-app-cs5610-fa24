import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments, //initial assignments imported from ../..Database
};
const assignmentsSlice = createSlice({ //createSlice function
  name: "assignments",
  initialState,
  reducers: {  

    setAssignments: (state, action) => {
      state.assignments = action.payload;
      },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
          _id: `${assignment.course}-${new Date().getTime().toString()}`, // 包含 course 信息在内的唯一 ID
          title: assignment.title || "",
          score: assignment.score || "",
          available_date: assignment.available_date || "",
          due_date: assignment.due_date || "",
          course: assignment.course || "",
          modules: assignment.modules || ""
      };
  
      state.assignments.push(newAssignment);
  },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: assignment }) => {

      state.assignments = state.assignments.map((m: any) => 
        m._id === assignment._id && m.course === assignment.course ? { ...m, ...assignment } : m
      ) as any;

    },
  },
});

//
export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;  

export default assignmentsSlice.reducer; 
