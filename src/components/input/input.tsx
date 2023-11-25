import { memo } from "react";
import IInputProps from "./input.types";
import styles from './input.module.scss'


const Input = (props: IInputProps) => {
    return (
        <div className={styles.input}>
            {props.label && <span className={styles.label}>{props.label}</span>}
            <div className={styles.input_container}>
                {props.icon && props.icon}
                <input {...props} />
            </div>
            {props.error && <span className={styles.error}>{props.error}</span>}
        </div>
    )
}

export default memo(Input)