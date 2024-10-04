import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; 

export default function AssignmentHeader() {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <button className="btn btn-danger btn-sm me-2">
        <BsPlus /> Assignment
      </button>
      <button className="btn btn-secondary btn-sm me-2">
        <BsPlus /> Group
      </button>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
