import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
    let {id} = useParams()
    let { data: blog , isPending, error } = useFetch("http://localhost:8000/blogs/" + id)
    let history = useHistory()
    

    let handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then (
            history.push("/")
        )
    }
    
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <span>{blog.author}</span>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;