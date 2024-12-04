import { useEffect, useRef, useState } from "react";
import styles from "./AddTask.module.css";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../store/TaskSlice";
import { useNavigate } from "react-router-dom";
const AddTask = () => {
  const titleRef = useRef("");
  const descRef = useRef("");
  const dateRef = useRef("");
  const [disabled, setDisabled] = useState(false);
  const alltasks = useSelector((store) => store.taskReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const date = dateRef.current.value.split("-");
    const year = date[0];
    const month = date[1];
    const day = date[2];

    const newTask = {
      id: alltasks.length + 1,
      title: title,
      description: desc,
      dueDate: { day: day, month: month, year: year },
      completed: false,
    };
    dispatch(taskActions.AddTask({ task: newTask }));

    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";

    const title1 = titleRef.current.value;
    const desc1 = descRef.current.value;
    const date1 = dateRef.current.value;
    setDisabled(!title1 && !desc1 && !date1);
  };

  console.log(alltasks);
  return (
    <div className={styles["container"]}>
      <SideBar />
      <div className={styles["AddTaskComp"]}>
        <button
          className={styles["addTask_btns"]}
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Go To DashBoard
        </button>
        <input
          className={styles["taskTitle"]}
          placeholder="Title"
          ref={titleRef}
        />
        <textarea
          className={styles["taskDesc"]}
          rows="10"
          placeholder="Description"
          ref={descRef}
        ></textarea>

        <input type="date" className={styles["taskDate"]} ref={dateRef} />
        <button
          className={styles["addTask_btns"]}
          onClick={handleAdd}
          disabled={disabled}
        >
          {" "}
          ADD TASKS
        </button>
      </div>
    </div>
  );
};

export default AddTask;
