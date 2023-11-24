import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api"
interface IData {
    userId: number,
    id: number,
    title: string,
    body: string
}

const ProductItem = () => {
    const { id } = useParams<"id">();
    console.log(id);
    const [post, setPost] = useState<IData>()
    useEffect(() => {
        api.get(`posts/${id}`).then((response) => {
            console.log(response)
            setPost(response.data)
        })
    }, [])

    return (
        <>
            <h2>Post id is {id} </h2>
            {post &&
                <div>
                    <h2>{post.title}</h2>
                    <h2>{post.body}</h2>
                </div>
            }
        </>
    )
}

export default ProductItem;