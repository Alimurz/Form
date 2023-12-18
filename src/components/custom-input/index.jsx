import React from "react";
import styles from "./style.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";

const CustomInput = (props) => {
  return (
    <div className={styles["inputs"]}>
      <label className={styles["label"]}>{props.label}</label>
      <Input.Password
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        className={styles["input"]}
        onBlur={props.onBlur}
        style={{border: props.hasError ? '1px solid red': '1px solid lightgray'}}
        onChange={(e) => props.onChangeInput(e.target.value)}
      />
    </div>
  );
};
export default CustomInput;
