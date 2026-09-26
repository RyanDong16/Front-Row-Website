import frontRowImage from "../photo assets/Home Page/fr title.jpg";
import "../css/Home.css";
import awardSAFilm from "../photo assets/Home Page/Not One of Us SAFilm IG Announcement.PNG";
import awardGreatFilmClub from "../photo assets/Home Page/Front Row Latino Cine Night v2.jpg";
import awardLaurel from "../photo assets/Home Page/official selection laurel wht.png";

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

                <img
                    src={awardSAFilm}
                    alt="SA Film Selection"
                    className="front-row-selection-image"
                />
                <img
                    src={awardGreatFilmClub}
                    alt="TGFC Selection"
                    className="front-row-latino-cine-image"
                />
                <img
                    src={awardLaurel}
                    alt="Laurel Selection"
                    className="front-row-laurel-image"
                />
            </div>
        </section>
    )
}

export default Home;