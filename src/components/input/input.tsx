import { memo, useState, forwardRef } from "react";
import IInputProps from "./input.types";
import styles from './input.module.scss'


const Input = forwardRef<HTMLInputElement, IInputProps>((props: IInputProps, ref) => {
    const [secure, setSecure] = useState<boolean>(props.type === "password" ? true : false)
    const handelButton = () => {
        setSecure(!secure)
    }
    return (
        <div className={styles.input}>
            {props.label && <span className={styles.label}>{props.label}</span>}
            <div className={styles.input_container}>
                {props.icon && props.icon}
                <input ref={ref} {...props} type={secure ? "password" : "text"} />
                {props.type === "password" &&
                    <button className={styles.eyebtn} type="button" onClick={handelButton}>
                        {
                            secure ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                :  
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                    <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
                                    <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                                </svg>
                        }
                    </button>
                }
            </div>
            {props.error && <span className={styles.error}>{props.error}</span>}
        </div>
    )
})

export default memo(Input)