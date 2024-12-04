import { useSelector } from "react-redux";
import tasks from "../store/SampleTasks";
import styles from "./TaskCountSub.module.css";
const TaskCountSub = ({ type }) => {
  const tasks = useSelector((store) => store.taskReducer);
  let count = 0;
  if (type === "All Tasks") {
    count = tasks.length;
  } else if (type === "Completed") {
    tasks.forEach((item) => {
      if (item.completed) {
        count++;
      }
    });
  } else if (type === "Pending") {
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

    count = pendingTasks.length;
  } else if (type === "OverDue") {
    // Current date
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

    count = overDueTasks.length;
  }
  return (
    <div className={styles["TaskCountSub"]}>
      {/* heading */}
      <span>{type}</span>
      <span>{count}</span>
      {/* Count */}
    </div>
  );
};
export default TaskCountSub;
