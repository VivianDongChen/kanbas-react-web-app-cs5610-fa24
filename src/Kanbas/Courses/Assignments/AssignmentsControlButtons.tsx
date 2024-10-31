import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; 
import { FaTrash } from "react-icons/fa";

export default function AssignmentsControlButtons({assignmentId, deleteAssignment}:{
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void}) {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
      <BsPlus className="fs-4 me-2" /> {/* Add BsPlus icon with margin-right */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}