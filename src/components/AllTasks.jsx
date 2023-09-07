import React from "react";
import TaskLists from "./TaskLists";

const AllTasks = ({
  tasks,
  handleTaskStatusChange,
  handleEditTask,
  handleDeleteTask,
}) => {
  return (
    <>
      {tasks.length === 0 ? (
        <table>
          <tbody>
            <tr>
              <td>No Task Available</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <>
          <p className="allTaskLabel">All Task Lists</p>
          <TaskLists
            tasks={tasks}
            handleTaskStatusChange={handleTaskStatusChange}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
        </>
      )}
    </>
  );
};

export default AllTasks;
