import React from "react";
import TaskLists from "./TaskLists";

const PendingTasks = ({
  tasks,
  handleTaskStatusChange,
  handleEditTask,
  handleDeleteTask,
}) => {
  const pendingTasks = tasks.filter((task) => task.status === "pending");
  return (
    <>
      <p className="pendingLabel">Pending Tasks</p>
      {pendingTasks.length === 0 ? (
        <table>
          <tbody>
            <tr>
              <td>No Pending Tasks</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <>
          <TaskLists
            tasks={pendingTasks}
            handleTaskStatusChange={handleTaskStatusChange}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
          <h5>Total: {pendingTasks.length}</h5>
        </>
      )}
    </>
  );
};

export default PendingTasks;
