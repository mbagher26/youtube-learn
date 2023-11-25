import { memo, useState } from "react";
import IInputProps from "./input.types";
import styles from './input.module.scss'


const Input = (props: IInputProps) => {
    const [secure, setSecure] = useState<boolean>(props.type === "password" ? true : false)
    return (
        <div className={styles.input}>
            {props.label && <span className={styles.label}>{props.label}</span>}
            <div className={styles.input_container}>
                {props.icon && props.icon}
                <input {...props} type={secure ? "password" : "text"}/>
            </div>
            {props.error && <span className={styles.error}>{props.error}</span>}
        </div>
    )
}

export default memo(Input)