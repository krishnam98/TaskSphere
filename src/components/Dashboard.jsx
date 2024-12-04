import styles from "./Dashboard.module.css";
import RightContent from "./RightContent";
import SideBar from "./SideBar";
const DashBoard = () => {
  return (
    <div className={styles["dashboard"]}>
      {/* left Side Bar */}
      <SideBar />
      {/* Right Content */}
      <RightContent />
    </div>
  );
};

export default DashBoard;
