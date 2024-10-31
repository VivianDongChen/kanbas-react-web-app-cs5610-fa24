import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; 

export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
      <BsPlus className="fs-4 me-2" /> {/* Add BsPlus icon with margin-right */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}