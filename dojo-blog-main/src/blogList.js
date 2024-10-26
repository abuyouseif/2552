import { Link } from "react-router-dom";

const blogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            <div>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>written by {blog.author}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default blogList;