import { memo } from "react";
import IButton from "./button.types";
import styles from './button.module.scss'


const Button = (props:IButton) =>{
    const {children, title, onClick, isLoding } = props;
    return(
        <button className={styles.button} onClick={onClick} disabled={isLoding}>
            {isLoding ? (
                <span>isloding...</span>
            ) :
                (
                    <>{children ? children : <span>{title}</span>}</>
                )
            }
        </button>
    )
}

export default memo(Button)