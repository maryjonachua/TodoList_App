import React from "react";
import TaskRow from "./TaskRow";

const TaskLists = ({
  tasks,
  handleTaskStatusChange,
  handleEditTask,
  handleDeleteTask,
}) => {
  return (
    <>
      <table>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <TaskRow
                name={task.name}
                status={task.status}
                _id={task._id}
                tasks={tasks}
                handleTaskStatusChange={handleTaskStatusChange}
                handleEditTask={handleEditTask}
                handleDeleteTask={handleDeleteTask}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskLists;
