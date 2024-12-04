import { useDispatch, useSelector } from "react-redux";
import styles from "./SideBar.module.css";
import Taskdiv from "./TaskDiv";
import { useEffect, useState } from "react";
import { sidebarActions } from "../store/SidebarSlice";
const SideBar = () => {
  const [filter, setFilter] = useState("All_Tasks");
  const tasks = useSelector((store) => store.taskReducer);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const side = useSelector((store) => store.sidebarReducer);
  const dispatch = useDispatch();
  const handleSideClick = () => {
    dispatch(sidebarActions.toggleSide(!side));
  };

  const handleClick = (type) => {
    filter === type ? setFilter("All_Tasks") : setFilter(type);
  };
  console.log(filter);

  useEffect(() => {
    // All Tasks
    if (filter === "All_Tasks") {
      setFilteredTasks(tasks);
      console.log(filteredTasks);
    }
    // Completed Tasks
    else if (filter === "Completed") {
      const completedTasks = tasks.filter((item) => item.completed);
      setFilteredTasks(completedTasks);
    }
    // Pending Tasks
    else if (filter === "Pending") {
      // Current date
      const currentDate = new Date();

      // Function to check if the task is pending
      const isPendingTask = (task) => {
        const taskDate = new Date(
          task.dueDate.year,
          task.dueDate.month - 1,
          task.dueDate.day
        );
        return taskDate > currentDate && !task.completed; // Check if due date is in the future and task is not completed
      };

      // Filter pending tasks
      const pendingTasks = tasks.filter(isPendingTask);
      setFilteredTasks(pendingTasks);
      console.log(filteredTasks);
    } else if (filter === "Overdue") {
      const currentDate = new Date();

      // Function to check if the task is pending
      const isOverDueTask = (task) => {
        const taskDate = new Date(
          task.dueDate.year,
          task.dueDate.month - 1,
          task.dueDate.day
        );
        return taskDate < currentDate && !task.completed; // Check if due date is in the future and task is not completed
      };

      // Filter pending tasks
      const overDueTasks = tasks.filter(isOverDueTask);
      setFilteredTasks(overDueTasks);
    }
  }, [filter, tasks]);

  return (
    <div className={styles[`SideBar${side ? "_opened" : ""}`]}>
      <button
        className={styles[`closeBar${side ? "_opened" : ""}`]}
        onClick={handleSideClick}
      >
        {"<"}
      </button>

      {/* title */}
      <div className={styles["SideBar_Title"]}>
        {" "}
        <div className={styles["title_text"]}> Task Sphere</div>{" "}
      </div>
      {/* Filter Buttons */}
      <div className={styles["filter_buttons_div"]}>
        <button
          className={
            styles[`filter_button${filter === "All_Tasks" ? "_selected" : ""}`]
          }
          onClick={() => {
            handleClick("All_Tasks");
          }}
        >
          All Tasks
        </button>
        <button
          className={
            styles[`filter_button${filter === "Completed" ? "_selected" : ""}`]
          }
          onClick={() => {
            handleClick("Completed");
          }}
        >
          Competed
        </button>
        <button
          className={
            styles[`filter_button${filter === "Pending" ? "_selected" : ""}`]
          }
          onClick={() => {
            handleClick("Pending");
          }}
        >
          Pending
        </button>
        <button
          className={
            styles[`filter_button${filter === "Overdue" ? "_selected" : ""}`]
          }
          onClick={() => {
            handleClick("Overdue");
          }}
        >
          Overdue
        </button>
      </div>
      <div className={styles["Filtered_Task_div"]}>
        {filteredTasks.map((item) => (
          <Taskdiv
            title={item.title}
            day={item.dueDate.day}
            month={item.dueDate.month}
            year={item.dueDate.year}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
export default SideBar;
