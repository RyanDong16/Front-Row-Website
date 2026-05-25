import { Link } from "react-router-dom";
import "../css/NotFound.css";

const NotFound = () => {
    return (
        <section className="not-found-section">
            <div className="not-found-spotlight"></div>

            <div className="not-found-content">
                <p className="not-found-kicker">404 Error</p>

                <h1 className="not-found-title">Page Not Found</h1>

                <p className="not-found-message">
                    Looks like this act missed the spotlight. The page you are looking for does not exist.
                </p>

                <Link className="not-found-link" to="/">
                    Go Back Home
                </Link>
            </div>
        </section>
    )
}

export default NotFound;