import "../css/AboutSection.css";
import frontRowPoster from "../photo assets/About Page/Front Row Poster -1.jpg";

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-overlay">
                <div className="about-content">
                    <h1 className="about-title">About</h1>

                    <div className="about-text-section featured-section">
                        <h2>Logline</h2>
                        <p>
                            A sound guy at a comedy club remembers his late brother’s
                            advice to overcome his fear of doing stand-up.
                        </p>
                    </div>

                    <div className="poster-marquee">
                        <div className="poster-bulbs poster-bulbs-top"></div>

                        <img
                            src={frontRowPoster}
                            alt="Front Row official film poster"
                            className="about-poster"
                        />

                        <div className="poster-bulbs poster-bulbs-bottom"></div>
                    </div>

                    <div className="about-text-section synopsis-section">
                        <h2>Synopsis</h2>
                        <p>
                            A young comedian is about to perform at his first open mic, but suddenly
                            receives news that his brother died in an accident. Two years later, this
                            young man has given up his dream to do comedy, but now works as a
                            sound guy at his favorite comedy club. One night, a famous headliner
                            comes to the club, but is arrogant, drunk, and out of control. The
                            headliner drunkenly crashes out onstage. The manager storms the
                            headliner out of the room, leaving Alex alone with the crowd. Alex steps
                            onstage and tries to calm the angry audience. All of a sudden, he notices
                            an empty chair in the front and can hear his brother's encouraging voice.
                            He starts telling jokes and the audience can't take their eyes off of him. At
                            the end of his set, Alex realizes that although his brother passed, he will
                            always be watching in the front row.
                        </p>
                    </div>

                    <div className="about-text-section inspiration-section">
                        <h2>Inspiration</h2>
                        <p>
                            “I’ve always had a passion for comedy. I grew up watching Chris
                            Rock, Mel Brooks, and other amazing comedians. In 2024, I
                            started working at Mic Drop Comedy and on my first day of work,
                            I knew I had to make a film there. The vibrant purple stage,
                            elegant seating, and fantastic lighting made the room feel like a
                            comedy wonderland. I stayed behind the scenes as a floor staff
                            member and sound guy. I dreamed of being behind the
                            microphone but was too frightened of what others would think. I
                            decided to write a story about what it could be like if I did take
                            that chance but gave it a dramatic twist. This idea transformed
                            into the screenplay of “Front Row”, the San Diego State film we
                            are all proud of today. I wanted to tell a story of confidence and
                            how to turn tragedy into comedy. I am thankful for the dedicated
                            cast and crew who made this film exactly how I envisioned. To
                            anyone who watches this film, all I can say is grab a front row seat
                            to a story that is uplifting, bittersweet, and full of surprises.”
                        </p>
                    </div>

                    <div className="film-details">
                        <div className="detail-item">
                            <h3>Running Time</h3>
                            <p>18 minutes and 15 seconds</p>
                        </div>

                        <div className="detail-item">
                            <h3>Written and Directed by</h3>
                            <p>Julian Rodriguez</p>
                        </div>

                        <div className="detail-item">
                            <h3>Produced by</h3>
                            <p>Sydney Simmons</p>
                        </div>

                        <div className="detail-item">
                            <h3>Music by</h3>
                            <p>Lucas Buck</p>
                        </div>

                        <div className="detail-item">
                            <h3>Production Company</h3>
                            <p>Cruise Films</p>
                        </div>

                        <div className="detail-item">
                            <h3>School</h3>
                            <p>San Diego State University</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;