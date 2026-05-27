import frontRowImage from "../photo assets/Home Page/fr title.jpg";
import "../css/Home.css";

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-spotlight"></div>

            <div className="home-content">
                <img
                    src={frontRowImage}
                    alt="Front Row movie title"
                    className="front-row-image"
                />

                <p className="home-tagline">
                    Welcome to the official Front Row Movie website.
                </p>

                <a
                    className="trailer-link-btn"
                    href="https://www.youtube.com/watch?v=cAPhktecank"
                    target="_blank"
                    rel="noreferrer"
                >
                    Watch Trailer
                </a>
            </div>
        </section>
    )
}

export default Home;