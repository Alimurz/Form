import React from "react";
import styles from './style.module.scss'
import { Link } from "react-router-dom";

function SecTxt(props) {
    return(
        <div className={styles["text"]}>
            <span>Don’t have an account?</span>
            <Link to={props.path} className={styles['links']}>{props.direction}</Link>
        </div>
    )
}
export default SecTxt