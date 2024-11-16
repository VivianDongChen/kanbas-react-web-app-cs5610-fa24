import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  const [module, setModule] = useState({
    id: 1,
    name: "Module Name 11111111",
    description: "Module Description 111111111",
    course: "2024-10-10",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      <h4>Modifying Score of Assignment</h4>
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score of Assignment
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <hr />

      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-modules"
        className="btn btn-danger"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>

      <h4>Retrieving Name of Module</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-danger"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <hr />


      <h4>Modifying Name of Module</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-danger float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name of Module
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) =>
          setModule({ ...module, name: e.target.value })
        }
      />
      <hr />

      <h4>Modifying Description of Module</h4>
      <a
        id="wd-update-module-description"
        className="btn btn-danger float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description of Module
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <hr />

    </div>
  );
}
