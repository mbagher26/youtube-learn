import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name : ""
    })
    useEffect(() =>{
        const user =localStorage.getItem('user')
        if(user){
            setUser(JSON.parse(user))
        }else{
            navigate("/login")
        }
    }, [])

 
    
    console.log("rerender")
    return(
        <>
            {
                user?.name &&
                <span>Welcome {user.name}</span>
            }
        </>
    )
}

export default Home