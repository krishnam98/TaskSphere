import styles from "./Hero.module.css";
import HeroSub1 from "./heroSub1";
import HeroSub2 from "./heroSub2";
const Hero = () => {
  return (
    <div className={styles["hero"]}>
      {/* date and name*/}
      <HeroSub1 />
      {/* Clock */}
      <HeroSub2 />
    </div>
  );
};

export default Hero;
