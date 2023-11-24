import { useState , useMemo, useRef} from "react"

const Home = () => {
    const [birthdate, setBirthdate] = useState<number>()
    const myInput = useRef<any>()

    const handelBirthdateSubmit = () =>{
        console.log("setBirthdate")
        setBirthdate(myInput.current.value)
    }

    const calculator = useMemo(() => {
        console.log("calculation hapend")
        const currentYear = new Date().getFullYear()
        if(birthdate){
            return currentYear - birthdate
        }
    },[birthdate])
    
    console.log("rerender")
    return(
        <>
            <h2>Age calculator</h2>
            <input ref={myInput} placeholder="enter your birthdate"/>
            <button onClick={handelBirthdateSubmit}>submit</button>
            <br/>
            your age is {calculator}
        </>
    )
}

export default Home