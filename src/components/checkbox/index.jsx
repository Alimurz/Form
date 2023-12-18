import React from "react";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./style.module.scss";
function CheckBx(props) {
  return (
    <div className={styles["Checkbox"]}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={props.label}
      />
      <Link>{props.text}</Link>
    </div>
  );
}
export default CheckBx;
