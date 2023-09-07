import React from "react";
import TaskLists from "./TaskLists";

const DoneTasks = ({
  tasks,
  handleTaskStatusChange,
  handleEditTask,
  handleDeleteTask,
}) => {
  const doneTasks = tasks.filter((task) => task.status === "done");
  return (
    <>
      <p className="doneLabel">Done Tasks</p>

      {doneTasks.length === 0 ? (
        <table>
          <tbody>
            <tr>
              <td>No Done Tasks</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <>
          <TaskLists
            tasks={doneTasks}
            handleTaskStatusChange={handleTaskStatusChange}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
          <h5>Total: {doneTasks.length}</h5>
        </>
      )}
    </>
  );
};

export default DoneTasks;
