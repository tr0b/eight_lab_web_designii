import React, { useState } from "react";
function Task() {
  const taskAttributes = [
    { name: "id", type: "text" },
    { name: "owner", type: "text" },
    { name: "task", type: "text" },
    { name: "finished", type: "checkbox" },
  ];
  const [task, setTask] = useState(
    taskAttributes.reduce((task, it) => ((task[it.name] = ""), task), {})
  );
  const renderTaskForm = task.map((attr) => {
    return (
      <input
        type={attr.type}
        placeholder={attr.name}
        onChange={(input) =>
          setTask({ ...task, [attr.name]: input.target.value })
        }
      ></input>
    );
  });

  return (
    <div>
      <div className="card">
        <div className="card-header">Datos Tarea</div>
        <div className="card-body">{renderTaskForm}</div>
        <div className="card-footer">
          <button className="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  );
}
export default Task;
