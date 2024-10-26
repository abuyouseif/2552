import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>the page can't be found</p>
            <Link to="/">Go to home page</Link>
        </div>
    );
}

export default NotFound;