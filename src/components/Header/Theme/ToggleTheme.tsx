import { ToggleThemeType } from "../../../App";
import classes from "./ToggleTheme.module.css";

type ToggleThemeProps = {
  theme: string;
  setToggleTheme: React.Dispatch<React.SetStateAction<ToggleThemeType>>;
};

const ToggleTheme = ({ theme, setToggleTheme }: ToggleThemeProps) => {
  const toggleThemeHandler = () => {
    theme === "light" ? setToggleTheme("dark") : setToggleTheme("light");
    console.log(theme);
  };

  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={toggleThemeHandler} />
      <span className={`${classes.slider} ${classes.sliderRound}`}></span>
    </label>
  );
};

export default ToggleTheme;
