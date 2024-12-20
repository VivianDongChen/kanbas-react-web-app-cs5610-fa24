import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Import the BsPlus icon
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: 
  { moduleId: string; deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void } ) {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" /> {/* Add BsPlus icon with margin-right */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}