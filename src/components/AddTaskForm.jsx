import React from "react";

const AddTaskForm = ({ onChangeHandler, handleSubmit, newTask, error }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="nameInput"
          value={newTask}
          type="text"
          placeholder="Enter Task"
          autoFocus
          maxLength={60}
          onChange={onChangeHandler}
        />
        <br />
        {error && <h6 className="error">{error}</h6>}
        <button className="addTask" type="submit">
          + Add Task
        </button>
      </form>
    </>
  );
};

export default AddTaskForm;
