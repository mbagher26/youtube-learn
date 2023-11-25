import { memo } from "react";
import IInputProps from "./input.types";
import styles from './input.module.scss'


const Input = (props: IInputProps) =>{
    return(
        <div className={styles.input}>
            <input {...props} />
        </div>
        
    )
}

export default memo(Input)