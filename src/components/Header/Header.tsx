import { ToggleThemeType } from "../../App";
import classes from "./Header.module.css";
import ToggleTheme from "./Theme/ToggleTheme";

type HeaderProps = {
  theme: string;
  setToggleTheme: React.Dispatch<React.SetStateAction<ToggleThemeType>>;
};

const Header = ({ theme, setToggleTheme }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <h1>Todo List App</h1>
      <ToggleTheme setToggleTheme={setToggleTheme} theme={theme}></ToggleTheme>
    </header>
  );
};

export default Header;
