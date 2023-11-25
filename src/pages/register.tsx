import Button from "../components/button/button"
import Input from "../components/input/input"

const Register = () =>{
    return (
        <div style={{
            display : "flex",
            flex : 1,
            flexDirection : "column",
            justifyContent : "center",
            alignItems : "center"
        }}>
            <form className="form">
                <span>Welcome Back</span>
                <span>Enter your credentials to access your account</span>
                <Input></Input>
                <Input></Input>

                <Button onClick={() => {}}>
                    <span>Sginin</span>
                </Button>
            </form>
        </div>
    )
}
export default Register