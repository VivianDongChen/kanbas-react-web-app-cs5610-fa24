import { FaEllipsisV } from "react-icons/fa";

export default function TwoVerticalDots() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100%" }}>
      <FaEllipsisV className="fs-5" />
      <FaEllipsisV className="fs-5" />
    </div>
  );
}
