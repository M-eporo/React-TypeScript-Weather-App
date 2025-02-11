import { useContext } from "react";
import { AppContext } from "../context";
import type { AppContextType } from "../types/types";
import type { ButtonType } from "../types/types";
import styles from "../styles/button.module.css";

const Button = ({ btnType, text, width, margin, padding, context }: ButtonType) => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  const handleClick = () => {
    if (context && contextValues?.clearData) {
      contextValues?.clearData();
    }
  };
  return (
    <button className={styles.button} type={btnType}
      style={{
        width: width,
        margin: margin,
        padding: padding,
      }}
      onClick={context ? handleClick : undefined}
    >{text}</button>
  );
};

export default Button;