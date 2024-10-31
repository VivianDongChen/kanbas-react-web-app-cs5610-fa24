import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments, //initial assignments imported from ../..Database
};
const assignmentsSlice = createSlice({ //createSlice function
  name: "assignments",
  initialState,
  reducers: {  //reducer holds functions for manipulating the assignments state
    addAssignment: (state, { payload: assignment }) => {
      if (assignment._id) return;// If the assignment already has an _id, treat it as an update rather than a new addition.
    
      // creates a new assignment abject with a unique ID and default value for missing properties
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title || "",
        score: assignment.score || "",
        available_date: assignment.available_date || "",
        due_date: assignment.due_date || "",
        course: assignment.course || "",
        modules: assignment.modules || "" 
      };
    
      // adds the assignment to the state's assignments list.
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
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? { ...m, ...assignment } : m //if a match is found, it spreads both the existing assignment and the new data(assignment) into an updated object
      ) as any;
    },
  },
});

//
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;  //Actions (addAssignment, deleteAssignment, updateAssignment, and editAssignment) for use in other components.

export default assignmentsSlice.reducer; //The reducer is exported as the default, allowing it to be included in the Redux store configuration.
