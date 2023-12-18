import React from "react";
import styles from "./style.module.scss";
function Btn(props) {
  return (
    <input
      type="submit"
      variant="contained"
      className={styles["input"]}
      value={props.value}
      style={{backgroundColor: props.disabled ? 'red' : 'blue'}}
    />
  );
}
export default Btn;
