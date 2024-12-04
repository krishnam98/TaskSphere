import { useSelector } from "react-redux";
import Taskdiv from "./TaskDiv";
import styles from "./TodaysComp.module.css";
const TodayTask = () => {
  const tasks = useSelector((store) => store.taskReducer);
  const isTodaysTask = (task) => {
    const currDate = new Date();
    return (
      task.dueDate.year === currDate.getFullYear() &&
      task.dueDate.month === currDate.getMonth() + 1 && // Months are 0-based, so add 1
      task.dueDate.day === currDate.getDate()
    );
  };

  const todaysTasks = tasks.filter(isTodaysTask);

  return (
    <div className={styles["todaysTask"]}>
      <span className={styles["todaysTask_heading"]}> Today's Tasks</span>
      <div className={styles["todaysTask_taskArea"]}>
        {todaysTasks.map((item) => (
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
export default TodayTask;
