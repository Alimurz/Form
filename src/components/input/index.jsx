import React from "react";
import styles from "./style.module.scss";

function Input(props) {
  return (
    <div className={styles["inputs"]}>
      <label className={styles["label"]}>{props.label}</label>
      <input
        type={props.type}
        style={{border: props.hasError ? '1px solid red': '1px solid lightgray'}}
        className={styles["input"]}
        onBlur={props.onBlur}
        onChange={(e) => props.onChangeInput(e.target.value)}
      />
      
      
    </div>
  );
}
export default Input;
