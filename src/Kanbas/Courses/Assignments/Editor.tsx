export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-3" />
        
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea 
          id="wd-description" 
          className="form-control mb-3" 
          rows={10}>
          The assignment is available online. Submit a link to the landing page of your Web application.
        </textarea>
  
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input id="wd-points" value={100} className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
            <select id="wd-group" className="form-select">
              <option value="Group1">Group 1</option>
              <option value="Group2">Group 2</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  