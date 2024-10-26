import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    let [title, setTitle] = useState("")
    let [body, setBody] = useState("")
    let [author, setAuthor] = useState("mario")
    let [isPending, setIsPending] = useState(false)
    let history = useHistory()

    let handelClick = (e) => {
        e.preventDefault()
        let blog = {title, body, author}

        setIsPending(true)

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then (() => {
            setIsPending(false)
            history.push("/")
        })
    }

    return ( 
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit={handelClick}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="youshi">Youshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;