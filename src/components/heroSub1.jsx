import { useEffect, useState } from "react";
import styles from "./heroSub1.module.css";
import { useSelector } from "react-redux";

const HeroSub1 = () => {
  const [date, setDate] = useState([]);
  const time = useSelector((store) => store.setTime);

  const options = { weekday: "long", day: "numeric", month: "long" };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", options);
    setDate(formattedDate.split(" "));
  }, [time]);

  return (
    <div className={styles["herosub1"]}>
      {/* Date */}
      <div className={styles["hs1_Date"]}>
        {`${date[0]}, ${date[1]} ${date[2]}`}
      </div>
      {/* name */}
      <div className={styles["hs1_name"]}>Hello, Krishnam</div>
    </div>
  );
};

export default HeroSub1;
