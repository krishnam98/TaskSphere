import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { TbPencilSearch } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../store/SidebarSlice";
const Header = () => {
  const navigate = useNavigate();
  const side = useSelector((store) => store.sidebarReducer);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(sidebarActions.toggleSide(!side));
  };
  console.log(side);
  return (
    <div className={styles["header"]}>
      <button className={styles["header_Arrow"]} onClick={handleClick}>
        {">"}
      </button>
      {/* search Bar */}
      <input
        type="Text"
        placeholder="Search Task Here"
        className={styles["header_input"]}
      />

      {/* SearchButton */}
      <button className={styles["header_search"]}>
        <TbPencilSearch />
      </button>
      <div className={styles["header_empty"]}></div>

      <button
        className={styles["header_addTask"]}
        onClick={() => {
          navigate("/addTask");
        }}
      >
        {" "}
        ADD TASKS
      </button>
    </div>
  );
};

export default Header;
