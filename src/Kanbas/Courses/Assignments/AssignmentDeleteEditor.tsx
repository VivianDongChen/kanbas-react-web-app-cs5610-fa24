import * as assignmentsClient from "./client";

export default function AssignmentDeleteEditor({
    dialogTitle,
    assignmentId,
    deleteAssignment,
  }: {
    dialogTitle: string;
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
  }) {

    const handleDelete = async (assignmentId: string) => {
      try {
        await assignmentsClient.removeAssignment(assignmentId);
        deleteAssignment(assignmentId);
      } catch (error) {
        console.error("Failed to delete assignment:", error);
        alert("Failed to delete the assignment. Please try again.");
      }
    };

    return (
      <div
        id={`delete-dialog-${assignmentId}`}
        className="modal fade"
        tabIndex={-1} // 使每个删除对话框唯一
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{dialogTitle}</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
  
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal" // 点击 No 后关闭对话框
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal" // 点击 Yes 后关闭对话框
                onClick={() => handleDelete(assignmentId)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  