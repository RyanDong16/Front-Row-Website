import "../css/CastSection.css";

const CastSection = () => {
    return (
        <section className="cast-section">
            <div className="cast-spotlight"></div>

            <div className="cast-content">
                <p className="cast-kicker">Meet the Performers</p>
                <h1 className="cast-title">Cast</h1>

                <div className="cast-grid">
                    <article className="cast-card">
                        <div className="cast-card-header">
                            <div className="cast-icon">🎙</div>
                            <h2>
                                <span>Angel Huerta</span>
                                <small>as “Alex Portillo”</small>
                            </h2>
                        </div>

                        <p>
                            “My name is Angel Huerta and I am an actor out of Chula Vista,
                            California. I’m 24 years old but I will always be a kid at heart. I love
                            to read, write and watch movies and my favorite sports team to suffer
                            with is the SAN DIEGO Chargers. My goal as an actor is to fully embrace
                            my characters through physical touch, emotion and thoughts. If I’m not
                            making you laugh, cry or smile, I hope I’m still finding a way to stay in
                            your heart or mind. As a kid, I’ve always wanted to be an actor but
                            didn’t have the confidence to do it. Needing an extra class in community
                            college caused me to finally take a shot at the craft and ever since then
                            I’ve only fallen more in love with acting. I have been extremely blessed
                            throughout my entire career with multiple acting opportunities in student
                            films, agency interests and becoming SAG-Eligible.”
                        </p>
                    </article>

                    <article className="cast-card">
                        <div className="cast-card-header">
                            <div className="cast-icon">🎙</div>
                            <h2>
                                <span>Alex Petit</span>
                                <small>as “Joe Terry”</small>
                            </h2>
                        </div>

                        <p>
                            Alex Petit, a hilarious San Diego-based stand-up comic is the host and
                            producer of San Diego’s two largest monthly independent comedy shows,
                            Duck Foot Comedy Night and Abnormal Nights Comedy. He is also the Roast
                            Master presiding over the Mic Drop Comedy ROAST WARS and has been
                            performing stand-up comedy in San Diego for over seven years. He has
                            performed at Mic Drop Comedy, The La Jolla Comedy Store, The Laugh
                            Factory, American Comedy Company, and Mockingbird Improv.
                        </p>
                    </article>

                    <article className="cast-card">
                        <div className="cast-card-header">
                            <div className="cast-icon">🎙</div>
                            <h2>
                                <span>Keala Nunes</span>
                                <small>as “Naomi Wright”</small>
                            </h2>
                        </div>

                        <p>
                            “My name is Keala Nunes, I am an actor and aspiring filmmaker studying
                            at San Diego State University, with a deep love for storytelling that
                            extends behind the camera. My passion for cinematography shapes how I
                            act and influences how I use movement, stillness, and presence to support
                            the story. In “Front Row”, I portray Naomi, an emotionally intelligent
                            and witty character who navigates her world with awareness, humor, and
                            confidence. Acting is a vital part of my creative process. It sharpens
                            my awareness on set and deepens my understanding of how performance,
                            camera, and storytelling come together.”
                        </p>
                    </article>

                    <article className="cast-card">
                        <div className="cast-card-header">
                            <div className="cast-icon">🎙</div>
                            <h2>
                                <span>Julián Flores</span>
                                <small>as “George Portillo”</small>
                            </h2>
                        </div>

                        <p>
                            Julián Flores is an actor from Tijuana who recently graduated with a
                            Bachelor’s degree in Theatre Arts from the University of San Diego where
                            he performed in shows such as Anon(ymous) and The Curious Incident of
                            the Dog in the Night-Time portraying Anon and Ed in them respectively.
                            His most recent projects were performing in War Diaries and Los Alebrijes
                            at The Old Globe’s 2026 Power of New Voices Festival, and Novios, a piece
                            for La Jolla Playhouse’s 2025 Latinx New Play Festival. Other credits
                            include La Llorona On The Blue Line (Tuyo Theatre), Masa (Onstage
                            Playhouse), Barbecue (Coronado Playhouse).
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default CastSection;