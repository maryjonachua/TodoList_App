import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import { v4 as uuidv4 } from "uuid";
import TaskLists from "./components/TaskLists";
import DoneTasks from "./components/DoneTasks";
import PendingTasks from "./components/PendingTasks";
import AllTasks from "./components/AllTasks";

function App() {
  // Retrieve tasks from local storage
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(
    storedTasks.length > 0
      ? storedTasks
      : [
          { _id: uuidv4(), name: "eat", status: "pending" },
          { _id: uuidv4(), name: "code", status: "pending" },
          { _id: uuidv4(), name: "sleep", status: "done" },
        ]
  );

  // State for new Task
  const [newTask, setNewTask] = useState("");

  // State for validation error
  const [error, setError] = useState("");

  // for changing the initial status from pending to done
  const handleTaskStatusChange = (_id, newStatus) => {
    // Update the tasks state based on _id and newStatus
    const updatedTasks = tasks.map((task) => {
      if (task._id === _id) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  // onChange for Task Name input
  const onChangeHandler = (e) => {
    setNewTask(e.target.value);
  };

  // function to save tasks to local storage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  //  save tasks whenever it changes
  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  // save a task
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask.trim()) {
      setError("This field is required.");
      return; //
    }

    // Check if the task with the same name already exists in the list
    if (tasks.some((task) => task.name === newTask)) {
      setError("Task already exists.");
      return;
    }

    const newAddTask = {
      _id: uuidv4(),
      name: newTask,
      status: "pending",
    };

    setTasks([...tasks, newAddTask]);

    // reset input field
    setNewTask("");

    // reset error message
    setError("");
  };

  //for editing a task
  const handleEditTask = (_id, newName) => {
    // Update the tasks state with the edited task name
    const updatedTasks = tasks.map((task) => {
      if (task._id === _id) {
        return { ...task, name: newName };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  // delete task
  const handleDeleteTask = (_id) => {
    // Remove the task from the tasks state
    const updatedTasks = tasks.filter((task) => task._id !== _id);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="content">
        <div className="todo-container">
          <h2>Todo List</h2>
          {/* Add form todo Tasks */}
          <AddTaskForm
            onChangeHandler={onChangeHandler}
            handleSubmit={handleSubmit}
            newTask={newTask}
            error={error}
          />

          <div className="todolist-container">
            <Routes>
              <Route
                path="/"
                element={
                  <AllTasks
                    tasks={tasks}
                    handleTaskStatusChange={handleTaskStatusChange}
                    handleEditTask={handleEditTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                }
              />
              <Route
                path="/pendingTasks"
                element={
                  <PendingTasks
                    tasks={tasks}
                    handleTaskStatusChange={handleTaskStatusChange}
                    handleEditTask={handleEditTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                }
              />
              <Route
                path="/doneTasks"
                element={
                  <DoneTasks
                    tasks={tasks}
                    handleTaskStatusChange={handleTaskStatusChange}
                    handleEditTask={handleEditTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                }
              />
            </Routes>
          </div>
        </div>
        <br />
        <hr />
        {/* for links */}
        <footer>
          <Link to="/">All Tasks</Link>
          <Link to="/pendingTasks">Pending Tasks</Link>
          <Link to="/doneTasks">Done Tasks</Link>
        </footer>
      </div>
    </>
  );
}

export default App;
