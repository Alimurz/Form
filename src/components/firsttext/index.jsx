import React from "react";
import styles from "./style.module.scss";

function FirstTxtBlock(props) {
  return (
    <div className={styles["login-text"]}>
      <h3>{props.title}</h3>
      <span>{props.subtitle}</span>
    </div>
  );
}
export default FirstTxtBlock;
