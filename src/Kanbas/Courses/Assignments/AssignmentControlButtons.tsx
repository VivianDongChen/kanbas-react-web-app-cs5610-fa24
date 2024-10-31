import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDeleteEditor from "./AssignmentDeleteEditor";

export default function AssignmentControlButtons({assignmentId, deleteAssignment}:{
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void}) {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal"
        data-bs-target={`#delete-dialog-${assignmentId}`} /> 
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4 ms-2" />

      <AssignmentDeleteEditor
        dialogTitle="Are you sure to remove the assignment?"
        assignmentId={assignmentId}
        deleteAssignment={deleteAssignment}
      />
    </div>
  );
}

