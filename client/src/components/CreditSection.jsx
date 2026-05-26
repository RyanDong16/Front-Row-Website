import "../css/CreditSection.css";

const CreditSection = () => {
    return (
        <section className="credit-section">
            <div className="credit-spotlight"></div>

            <div className="credit-content">
                <p className="credit-kicker">Behind the Curtain</p>
                <h1 className="credit-title">Credits</h1>

                <div className="credit-feature-grid">
                    <article className="credit-feature-card">
                        <h2>Written and Directed by</h2>
                        <p>Julian Rodriguez</p>
                    </article>

                    <article className="credit-feature-card">
                        <h2>Produced by</h2>
                        <p>Sydney Simmons</p>
                    </article>

                    <article className="credit-feature-card">
                        <h2>Cinematography by</h2>
                        <p>Oliver Castillo</p>
                    </article>

                    <article className="credit-feature-card">
                        <h2>Sound Design by</h2>
                        <p>Noah Hernandez</p>
                    </article>

                    <article className="credit-feature-card">
                        <h2>Music by</h2>
                        <p>Lucas Buck</p>
                    </article>

                    <article className="credit-feature-card">
                        <h2>Production Design by</h2>
                        <p>Lauren Chiecuto</p>
                    </article>

                    <article className="credit-feature-card">
                        <h2>Edited by</h2>
                        <p>Julian Rodriguez</p>
                    </article>
                </div>

                <div className="credit-card">
                    <h3>Additional Credits</h3>

                    <div className="credit-list">
                        <div className="credit-row">
                            <h4>Assistant Director</h4>
                            <p>Sydney Simmons</p>
                        </div>

                        <div className="credit-row">
                            <h4>DIT</h4>
                            <p>Giancarlo Acosta</p>
                        </div>

                        <div className="credit-row">
                            <h4>Assistant Production Design</h4>
                            <p>Alana Davis</p>
                        </div>

                        <div className="credit-row">
                            <h4>Visual Effects by</h4>
                            <p>Marisa Molina</p>
                        </div>

                        <div className="credit-row">
                            <h4>Script Supervisor</h4>
                            <p>Lauren Chiecuto</p>
                        </div>

                        <div className="credit-row">
                            <h4>Artwork by</h4>
                            <p>Maximo Gutierrez and Samuel Castillo</p>
                        </div>
                    </div>
                </div>

                <div className="credit-card executive-card">
                    <h3>Executive Producers</h3>

                    <div className="producer-grid">
                        <p>Steve & Christine Simmons</p>
                        <p>Cindy & Daniel Salazar</p>
                        <p>Sheila Davis</p>
                        <p>Thomas Stark</p>
                        <p>Beatriz Chapman</p>
                        <p>Adrian Samson</p>
                        <p>Alex Verdugo Jr.</p>
                        <p>Michael Verdugo</p>
                    </div>
                </div>

                <div className="department-grid">
                    <article className="department-card">
                        <h3>Camera Department</h3>

                        <div className="credit-row">
                            <h4>1st AC</h4>
                            <p>Geoffrey Buck & Alex Ulloa</p>
                        </div>

                        <div className="credit-row">
                            <h4>2nd AC</h4>
                            <p>Maximo Gutierrez, Noah Hernandez, Sydney Simmons</p>
                        </div>

                        <div className="credit-row">
                            <h4>Camera Operators</h4>
                            <p>Jalen Banks, Quinn Niekrasz, Kevin Valderrama-Garcia</p>
                        </div>
                    </article>

                    <article className="department-card">
                        <h3>Sound Department</h3>

                        <div className="credit-row">
                            <h4>Sound Mixer</h4>
                            <p>Noah Hernandez</p>
                        </div>

                        <div className="credit-row">
                            <h4>Assistant Sound</h4>
                            <p>Tawny Takahashi & Sydney Simmons</p>
                        </div>
                    </article>

                    <article className="department-card">
                        <h3>Grip Department</h3>

                        <div className="credit-row">
                            <h4>Gaffers</h4>
                            <p>Brian Miske, Sumanta Mandar, Griffin Edwards</p>
                        </div>

                        <div className="credit-row">
                            <h4>Grips</h4>
                            <p>Brandon Portal, Geoffrey Buck, Alana Davis, Benjamin Menard, Alex Ulloa</p>
                        </div>
                    </article>

                    <article className="department-card">
                        <h3>BTS / Social Media</h3>

                        <div className="credit-row">
                            <h4>BTS Photographers</h4>
                            <p>Jaylynn Vega & Sydney Simmons</p>
                        </div>

                        <div className="credit-row">
                            <h4>Social Media Manager</h4>
                            <p>Alana Davis</p>
                        </div>

                        <div className="credit-row">
                            <h4>Graphic Designer</h4>
                            <p>Maximo Gutierrez</p>
                        </div>
                    </article>
                </div>

                <div className="catering-card">
                    <h2>Catering by</h2>
                    <p>Birdie's Craft Services</p>
                </div>

                <div className="developer-card">
                    <h2>Website Developed by</h2>
                    <p>Ryan Dong</p>
                </div>
            </div>
        </section>
    )
}

export default CreditSection;