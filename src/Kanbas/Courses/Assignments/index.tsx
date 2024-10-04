import React from 'react';
import ModulesControls from './ModulesControls';
import AssignmentListItem from './AssignmentListItem';
import { FaEllipsisV } from "react-icons/fa";

export default function Assignments() {
  return (
    <div className="container mt-4">
      <ModulesControls />
      
      <div className="card">
        <div className="card-header bg-light d-flex justify-content-between align-items-center">
          <h4 className="mb-0">
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
          </h4>
          <span className="badge bg-secondary">40% of Total</span>
        </div>
        <div className="card-body">
          <AssignmentListItem
            title="A1"
            modules="Multiple Modules"
            availableDate="May 6 at 12:00am"
            dueDate="May 13 at 11:59pm"
            points="100"
          />
          <AssignmentListItem
            title="A2"
            modules="Multiple Modules"
            availableDate="May 13 at 12:00am"
            dueDate="May 20 at 11:59pm"
            points="100"
          />
          <AssignmentListItem
            title="A3"
            modules="Multiple Modules"
            availableDate="May 20 at 12:00am"
            dueDate="May 27 at 11:59pm"
            points="100"
          />
        </div>
      </div>
    </div>
  );
}
