import { FormEvent, useRef, useState } from "react"
import Button from "../components/button/button"
import Input from "../components/input/input"


const Register = () => {
    const [errors, setErrores] = useState<{[key:string]: string}>({})
    const lastnameRef = useRef<HTMLInputElement>(null)
    const firstnameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handelSubmitForm = (e:FormEvent) =>{
        e.preventDefault()
        const Data = {
            "lastname": lastnameRef.current?.value,
            "firstname": firstnameRef.current?.value,
            "email": emailRef.current?.value,
            "password": passwordRef.current?.value
        }
        const errors:{[key:string]: string} ={}
        for(let [key, value] of Object.entries(Data)) {
            if(!value){
                errors [key] = `${key} is reguired`
            }
        }
        if(Data.password && Data.password.length < 8){
            errors["password"] = "Password is week"
        }
        if(Object.keys(errors).length > 0){
            setErrores(errors)
            return
        }else{
            setErrores({})
        }
        
        console.log(Data);
    }
    return (
        <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <form onSubmit={handelSubmitForm} className="form">
                <span>Welcome Back</span>
                <span>Enter your credentials to access your account</span>
                <Input
                    ref={emailRef}
                    placeholder="Enter your Eamil"
                    label="Email Address"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    }
                    error={errors["email"]}
                />
                
                
                <Input
                    ref={firstnameRef}
                    placeholder="Enter your first name"
                    label="First name"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                    }
                    error={errors["firstname"]}
                />
                <Input
                    ref={lastnameRef}
                    placeholder="Enter your last name"
                    label="Last name"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                    }
                    error={errors["lastname"]}
                />
                <Input
                    
                    ref={passwordRef}
                    type="password"
                    placeholder="Enter your Password"
                    label="Password"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                    </svg>
                    }
                    error={errors["password"]}
                />
                <Button onClick={() => { }}>
                    <span>Register</span>
                </Button>
            </form>
        </div>
    )
}
export default Register