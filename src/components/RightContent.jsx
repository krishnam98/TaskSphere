import Header from "./header";
import Hero from "./Hero";
import styles from "./RightContent.module.css";
import TaskCount from "./TaskCount";
import TodayTask from "./TodaysComp";

const RightContent = () => {
  return (
    <div className={styles["rightContent"]}>
      <Header />
      <Hero />
      <TaskCount />
      <TodayTask />
    </div>
  );
};

export default RightContent;
