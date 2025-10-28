import { ReactNode } from "react";
import classes from "./Card.module.css";

type Props = {
  children: ReactNode;
  theme: string;
};

export const Card = ({ children, theme }: Props) => {
  return (
    <div
      className={`${classes.card} ${
        theme === "light" ? classes.lightMode : classes.darkMode
      } `}
    >
      {children}
    </div>
  );
};
