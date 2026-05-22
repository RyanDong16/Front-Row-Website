import "../css/AwardSection.css";

const AwardSection = () => {
    return (
        <section className="award-section">
            <div className="award-stage-light"></div>

            <div className="award-content">
                <p className="award-kicker">Official Selection & Recognition</p>

                <h1 className="award-title">Award Section</h1>

                <div className="award-marquee">
                    <span></span>
                    <h2>SDSU Emerging Filmmakers Showcase Fall 2025</h2>
                    <span></span>
                </div>

                <div className="award-list">
                    <article className="award-card">
                        <div className="award-icon">★</div>
                        <h3>Best Screenplay</h3>
                    </article>

                    <article className="award-card">
                        <div className="award-icon">★</div>
                        <h3>Best Producing</h3>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default AwardSection;