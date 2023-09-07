import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { SaveButton } from "./SaveButton";

const TaskRow = ({
  name,
  status,
  _id,
  tasks,
  handleTaskStatusChange,
  handleEditTask,
  handleDeleteTask,
}) => {
  // state for the checkbox
  const [isChecked, setIsChecked] = useState(status === "done");

  //onChange of checkbox
  const handleCheckBoxChecked = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    //changing the status depending whether it is checked or not
    handleTaskStatusChange(_id, checked ? "done" : "pending");
  };
  //state when it is editing by the user
  const [isEditing, setIsEditing] = useState(false);

  //state for the new updated name
  const [editedName, setEditedName] = useState(name);
  const [error, setError] = useState("");

  //onCLick of delete btn
  const handleDeleteClick = () => {
    handleDeleteTask(_id);
  };

  //onCLick of edit btn
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // save of edited name
  const handleSaveClick = () => {
    if (!editedName.trim()) {
      setError("This field is required.");
      return; //
    }

    if (editedName !== name && tasks.some((task) => task.name === editedName)) {
      setError("This name already exists.");
      return;
    }

    handleEditTask(_id, editedName);
    setIsEditing(false);
    setError("");
  };

  return (
    <>
      <td className="tasks">
        <div className="todo-task">
          {isEditing ? (
            <div className="forEdit-container">
              <input
                className="edit-input"
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              {error && <h6 className="error">{error}</h6>}
            </div>
          ) : (
            <>
              <input
                className="checkbox-input"
                type="checkbox"
                checked={isChecked}
                name={name}
                id={_id}
                onChange={handleCheckBoxChecked}
              />
              <label className={isChecked ? "strikethrough" : ""}>
                {isEditing ? null : name}
              </label>
            </>
          )}
        </div>
      </td>
      <td className="btn-edit-delete">
        {isEditing ? (
          <SaveButton handleSaveClick={handleSaveClick} />
        ) : (
          <>
            <EditButton handleEditClick={handleEditClick} />
            <DeleteButton handleDeleteClick={handleDeleteClick} />
          </>
        )}
      </td>
    </>
  );
};

export default TaskRow;
