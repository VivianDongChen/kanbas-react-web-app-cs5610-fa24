export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The Landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevent source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="Group1">Group1</option>
              <option value="Group2">Group2</option>
              <option selected value="Assignment">
                ASSIGNMENT
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Score">Score</option>
              <option selected value="Percentage">
                Percentage
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="In person">In person</option>
              <option selected value="Online">
                Online
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-online-entry-options">
              Online Entry Options
            </label>
            <br />
            <input
              type="checkbox"
              name="online-entry-options"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="online-entry-options"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="online-entry-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="online-entry-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="online-entry-options"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">Files Uploads</label>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="text" id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="date" id="wd-due-date" value="2024-05-13" />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="date" id="wd-available-from" value="2024-05-06" />
          </td>
          <td>
            <input type="date" id="wd-available-until" value="2024-05-20" />
          </td>
        </tr>
        <br />
        <tr>
          <td style={{ borderTop: "2px solid black", width: "100%" }}>
            <div></div>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td></td>
          <td align="right" valign="top">
            <button type="button"> Cancel </button>
            <button type="button"> Save </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
