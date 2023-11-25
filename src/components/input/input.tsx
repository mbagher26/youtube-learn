import { memo } from "react";
import IInputProps from "./input.types";
import styles from './input.module.scss'


const Input = (props: IInputProps) =>{
    return(
        
            <input {...props} className={styles.input}/>
        
    )
}

export default memo(Input)