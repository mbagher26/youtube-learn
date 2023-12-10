import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input/input";
import Button from "../components/button/button";
import { login } from "../../service/auth";

const Login = () => {

    const navigate = useNavigate();
    const [errors, setErrores] = useState<{[key:string]: string}>({})
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handelSubmitForm = (e:FormEvent) =>{
        e.preventDefault()
        const Data = {
            "email": emailRef.current?.value,
            "password": passwordRef.current?.value
        }
        const errors:{[key:string]: string} ={}
        for(let [key, value] of Object.entries(Data)) {
            if(!value){
                errors [key] = `${key} is reguired`
            }
        }
    
        if(Object.keys(errors).length > 0){
            setErrores(errors)
            return
        }else{
            setErrores({})
        }
        
        login(Data).then((res) =>{
            console.log(res);
            if(res.status === 200){
                const data = res.data
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", JSON.stringify(data))
                navigate("/")
            }
        })
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
                <Link to="/register">Not user? go to  register</Link>
                <Button onClick={() => { }}>
                    <span>Login</span>
                </Button>
            </form>
        </div>
    )
}
export default Login