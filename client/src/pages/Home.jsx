import frontRowImage from "../photo assets/Home Page/fr title.jpg";
import "../css/Home.css";
import selectionSAFilm from "../photo assets/Home Page/selectionSAFilm.png";
import selectionCoronado from "../photo assets/Home Page/selectionCoronado.png";
import selectionTGFC from "../photo assets/Home Page/selectionTGFC.png";

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
                    Welcome to the official Front Row Movie website
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
                    src={selectionSAFilm}
                    alt="SA Film Selection"
                    className="selection-SAFilm-image"
                />
                <img
                    src={selectionCoronado}
                    alt="Coronado Selection"
                    className="selection-Coronado-image"
                />
                <img
                    src={selectionTGFC}
                    alt="TGFC Selection"
                    className="selection-TGFC-image"
                />
            </div>
        </section>
    )
}

export default Home;