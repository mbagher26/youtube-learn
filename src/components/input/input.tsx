import { memo } from "react";
import IInput from "./input.types";
import styles from './input.module.scss'


const Input = ({children, title, onClick, isLoding }:IInput) =>{
    return(
        
            <input className={styles.input}/>
        
    )
}

export default memo(Input)