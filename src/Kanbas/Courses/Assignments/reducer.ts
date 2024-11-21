import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments, //initial assignments imported from ../..Database
};
const assignmentsSlice = createSlice({ //createSlice function
  name: "assignments",
  initialState,
  reducers: {  

    // setModules: (state, action) => {
    //   state.modules = action.payload;
    //   },

    setAssignments: (state, action) => {
      state.assignments = action.payload;
      },

    addAssignment: (state, { payload: assignment }) => {
      // 为新作业生成一个唯一 ID，确保 course 和 _id 的唯一组合
      const newAssignment = {
          _id: `${assignment.course}-${new Date().getTime().toString()}`, // 包含 course 信息在内的唯一 ID
          title: assignment.title || "",
          score: assignment.score || "",
          available_date: assignment.available_date || "",
          due_date: assignment.due_date || "",
          course: assignment.course || "",
          modules: assignment.modules || ""
      };
  
      // 将新作业添加到 assignments 列表
      state.assignments.push(newAssignment);
  },


    //deletes an assignment from state.assignments by _id
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId
      );
    },

    //Updates an assignment from state.assignments by _id
    updateAssignment: (state, { payload: assignment }) => {

      // state.assignments = state.assignments.map((m: any) =>
      //   m._id === assignment._id ? { ...m, ...assignment } : m //if a match is found, it spreads both the existing assignment and the new data(assignment) into an updated object
      // ) as any;
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
