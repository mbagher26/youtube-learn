import { memo } from "react";
import IInputProps from "./input.types";
import styles from './input.module.scss'


const Input = (props: IInputProps) => {
    return (
        <div className={styles.input}>
            <div className={styles.input_container}>
                {props.icon && props.icon}
                <input {...props} />
            </div>
        </div>
    )
}

export default memo(Input)