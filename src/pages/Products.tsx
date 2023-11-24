import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import api from "../../service/api"
interface IData {
    userId : number,
    id : number,
    title : string,
    body : string
}

const Products = () => {
    const [posts, setPosts] = useState<IData[]>([])
    console.log({posts})
    useEffect(() => {
        api.get("posts").then((response) =>{
            setPosts(response.data)
            
        })
    }, [])
    console.log("render");
    return (
        <>
            <h2>Posts</h2>
            {
                posts.map((res) => 
                     
                        <div key={res.id}>
                            <Link to={`/posts/${res.id}`}>{res.title}</Link>
                            <h2>"id:"{res.id}</h2>
                            <h2>"userId:"{res.userId}</h2>
                            <h2>"body:"{res.body}</h2>
                        </div>
                )
            }
        </>
    )
}
export default Products;