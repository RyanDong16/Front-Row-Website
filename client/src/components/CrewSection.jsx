import "../css/CrewSection.css";

import julianRodriguezImage from "../photo assets/Crew Page/Julian headshot.jpg";
import sydneySimmonsImage from "../photo assets/Crew Page/Sydney Simmons headshot.jpeg";
import lucasBuckImage from "../photo assets/Crew Page/Lucas Buck headshot.jpg";

const CrewSection = () => {
    return (
        <section className="crew-section">
            <div className="crew-spotlight"></div>

            <div className="crew-content">
                <p className="crew-kicker">Behind the Laughs</p>
                <h1 className="crew-title">Crew</h1>

                <div className="crew-grid">
                    <article className="crew-card director-card">
                        <div className="crew-card-header">
                            <div className="crew-icon">🎬</div>
                            <div>
                                <h2>Julian Rodriguez</h2>
                                <p className="crew-role">Director / Writer</p>
                            </div>
                        </div>

                        <div className="crew-member-layout">
                            <div className="crew-member-image-wrapper">
                                <img
                                    src={julianRodriguezImage}
                                    alt="Julian Rodriguez"
                                    className="crew-member-image"
                                />
                            </div>

                            <div className="crew-member-text">
                                <p>
                                    Julian Rodriguez is a filmmaker based in San Diego with a
                                    passion for telling stories that thrill and inspire audiences.
                                    He studies filmmaking at San Diego State University with a
                                    focus on screenwriting and directing.
                                </p>

                                <p>
                                    Throughout his academic career, Rodriguez has written
                                    and directed numerous films in a variety of genres
                                    including horror, drama, and comedy. As a student, he had
                                    the opportunity to be a Film Publicity and Promotions
                                    Intern at Allied Global Marketing, in which he promoted
                                    major blockbusters on radio, television, and at live events.
                                    Rodriguez also taught filmmaking to children and
                                    teenagers at Media Arts Center San Diego.
                                </p>

                                <p>
                                    Overall, Julian Rodriguez is driven to entertain audiences
                                    and make every short film feel epic.
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="crew-card">
                        <div className="crew-card-header">
                            <div className="crew-icon">🎟</div>
                            <div>
                                <h2>Sydney Simmons</h2>
                                <p className="crew-role">Producer</p>
                            </div>
                        </div>

                        <div className="crew-member-image-wrapper">
                            <img
                                src={sydneySimmonsImage}
                                alt="Sydney Simmons"
                                className="crew-member-image"
                            />
                        </div>

                        <p>
                            Sydney Simmons is a senior graduating with a degree in Television, Film & New Media with a production emphasis. Her passions in film are producing and writing. What she loves most about film is how she is able to help people tell their stories and work in such a creative environment where people are able to express themselves.
                        </p>

                        <p>
                            In the Fall 2024 semester, she had the opportunity to study abroad in England at the University of Leicester. She learned more about global cinema and creative writing. After graduating she will continue her academic journey by pursuing a masters degree in project management at Kingston University London. She hopes you enjoy the film as much as she enjoyed the experience!
                        </p>
                    </article>

                    <article className="crew-card">
                        <div className="crew-card-header">
                            <div className="crew-icon">🎻</div>
                            <div>
                                <h2>Lucas Buck</h2>
                                <p className="crew-role">Composer</p>
                            </div>
                        </div>

                        <div className="crew-member-image-wrapper">
                            <img
                                src={lucasBuckImage}
                                alt="Lucas Buck"
                                className="crew-member-image"
                            />
                        </div>

                        <p>
                            Award-winning composer Lucas Buck is a Los Angeles–based composer, producer, and cellist known for his vibrant textures, evocative soundscapes, and mixed instrumental music. He gained wide recognition for composing the score for the award-winning short film "Fragility of Flesh" (2023), which received multiple awards, including Best Original Score.
                        </p>

                        <p>
                            Lucas has frequently collaborated with director Julian Rodriguez, composing scores for his films, including "Good Night Jessie" (2023), "Forever Yours" (2024), "OCD" (2024), and his latest film, "Front Row" (2025), marking yet another collaboration between the two. Lucas is currently in his final semester studying Commercial Music with a focus in film scoring.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default CrewSection;