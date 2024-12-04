import styles from "./TaskCount.module.css";
import TaskCountSub from "./TaskCountSub";
const TaskCount = () => {
  return (
    <div className={styles["taskCount"]}>
      <TaskCountSub type="All Tasks" />
      <TaskCountSub type="Completed" />
      <TaskCountSub type="Pending" />
      <TaskCountSub type="OverDue" />
    </div>
  );
};

export default TaskCount;
