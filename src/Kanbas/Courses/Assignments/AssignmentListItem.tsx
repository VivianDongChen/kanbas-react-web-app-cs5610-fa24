import React from 'react';
import { FaEllipsisV } from "react-icons/fa";
import AssignmentControlButtons from './AssignmentControlButtons';

interface AssignmentListItemProps {
  title: string;
  modules: string;
  availableDate: string;
  dueDate: string;
  points: string;
}

export default function AssignmentListItem({
  title,
  modules,
  availableDate,
  dueDate,
  points
}: AssignmentListItemProps) {
  return (
    <div className="d-flex align-items-center border-start border-success border-3 ps-2 py-2">
      <div className="me-2">
        <FaEllipsisV className="text-muted" />
      </div>
      <div className="flex-grow-1">
        <div className="d-flex align-items-center">
          <h5 className="mb-0 me-2">{title}</h5>
          <span className="text-muted small">{modules}</span>
        </div>
        <div className="text-muted small">
          Not available until {availableDate} | Due {dueDate} | {points} pts
        </div>
      </div>
      <AssignmentControlButtons />
    </div>
  );
}
