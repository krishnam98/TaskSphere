import { useEffect, useState } from "react";
import styles from "./heroSub2.module.css";
import { useDispatch } from "react-redux";
import { TimeActions } from "../store/TimeSlice";

const HeroSub2 = () => {
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const Interval_id = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(newTime);
      dispatch(TimeActions.setvalues({ time: newTime }));
    }, 1000);

    return () => {
      clearInterval(Interval_id);
    };
  }, []);
  return <div className={styles["hs2"]}> {time}</div>;
};

export default HeroSub2;
