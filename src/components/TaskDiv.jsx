import { useNavigate } from "react-router-dom";
import styles from "./TaskDiv.module.css";
const Taskdiv = ({ title, day, month, year, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles["taskDiv"]}
      onClick={() => {
        navigate(`/viewTask/${id}`);
      }}
    >
      {/* Title */}
      <div className={styles["taskDiv_title"]}>
        <span className={styles["taskDiv_title_Heading"]}>Title:</span>
        <span className={styles["taskDiv_title_Desc"]}>{title}</span>
      </div>
      {/* Due Date */}
      <div className={styles["taskDiv_Date"]}>
        <span className={styles["taskDiv_date_Heading"]}>Due Date:</span>
        <span
          className={styles["taskDiv_date_Desc"]}
        >{`${day}/${month}/${year}`}</span>
      </div>
    </div>
  );
};

export default Taskdiv;
