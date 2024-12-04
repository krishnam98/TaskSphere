import { useNavigate, useParams } from "react-router-dom";
import styles from "./ViewTask.module.css";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import { taskActions } from "../store/TaskSlice";

const ViewTask = () => {
  const { id } = useParams();
  const alltasks = useSelector((store) => store.taskReducer);
  console.log(alltasks);
  const currTasksArr = alltasks.filter((item) => item.id == id);
  const currTask = currTasksArr[0];
  console.log(currTask);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(taskActions.DeleteTask(id));
    navigate("/");
  };
  const handleComplete = () => {
    console.log("clicked");
    const updatedTask = {
      id: id,
      title: currTask.title,
      description: currTask.description,
      dueDate: currTask.dueDate,
      completed: true,
    };

    dispatch(taskActions.CompleteTask({ id: id, task: updatedTask }));
  };
  return (
    <div className={styles["container"]}>
      <SideBar />
      <div className={styles["taskviewer"]}>
        <span className={styles["heading"]}>Title</span>
        <div className={styles["taskTitle"]}>{currTask.title}</div>
        <span className={styles["heading"]}>Description</span>
        <div className={styles["taskDesc"]}>{currTask.description}</div>
        <span className={styles["heading"]}>Date</span>
        <div
          className={styles["taskDate"]}
        >{`${currTask.dueDate.day}/${currTask.dueDate.month}/${currTask.dueDate.year}`}</div>
        <span className={styles["heading"]}>Status</span>
        <div className={styles["status"]}>
          {currTask.completed ? "Completed" : "Not Completed"}
        </div>
      </div>
      <div className={styles["Control_btns_div"]}>
        <button
          disabled={currTask.completed}
          className={
            styles[`Control_btns${currTask.completed ? "_disabled" : ""}`]
          }
          onClick={handleComplete}
        >
          Mark As Completed
        </button>
        <button className={styles["Control_btns"]} onClick={handleDelete}>
          {" "}
          Delete Task
        </button>
        <button
          className={styles["Control_btns"]}
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Go To DashBoard
        </button>
      </div>
    </div>
  );
};

export default ViewTask;
