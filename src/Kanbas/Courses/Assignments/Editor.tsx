export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description"cols ={30} rows={10}>
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The Landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevent source code repositories The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
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
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id ="wd-assignment-group">
            <option value="Group1">Group1</option>
            <option value="Group2">Group2</option>
            <option selected value="Assignment">ASSIGNMENT</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
}
