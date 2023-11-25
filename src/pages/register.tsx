const Register = () =>{
    return (
        <div style={{
            display : "flex",
            flex : 1,
            flexDirection : "column",
            justifyContent : "center",
            alignItems : "center"
        }}>
            <form>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="password"/>
            </form>

        </div>
    )
}
export default Register