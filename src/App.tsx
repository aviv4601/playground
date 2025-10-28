import { useState } from "react";
import Header from "../src/components/Header/Header";
import classes from "./App.module.css";
import { TodoList } from "./components/TodoList";

export type ToggleThemeType = "light" | "dark";

function App() {
  const [theme, setToggleTheme] = useState<ToggleThemeType>("light");

  return (
    <div className={theme === "light" ? classes.lightTheme : classes.darkTheme}>
      <Header theme={theme} setToggleTheme={setToggleTheme}></Header>
      <TodoList theme={theme}></TodoList>
    </div>
  );
}

export default App;
