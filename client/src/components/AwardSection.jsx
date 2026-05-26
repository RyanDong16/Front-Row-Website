import { useState } from "react";
import "../css/AwardSection.css";

const awardImageModules = import.meta.glob(
    "../photo assets/Award Page/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    {
        eager: true,
        query: "?url",
        import: "default"
    }
);

const awardImages = Object.entries(awardImageModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, imageUrl]) => imageUrl);

const AwardSection = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const showPreviousImage = () => {
        setActiveImageIndex((currentIndex) =>
            currentIndex === 0 ? awardImages.length - 1 : currentIndex - 1
        );
    };

    const showNextImage = () => {
        setActiveImageIndex((currentIndex) =>
            currentIndex === awardImages.length - 1 ? 0 : currentIndex + 1
        );
    };

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

                {awardImages.length > 0 && (
                    <div className="award-carousel">
                        <button
                            className="award-carousel-arrow award-carousel-arrow-left"
                            type="button"
                            onClick={showPreviousImage}
                            aria-label="Show previous award image"
                        >
                            ‹
                        </button>

                        <div className="award-carousel-image-wrapper">
                            <img
                                src={awardImages[activeImageIndex]}
                                alt={`Award event image ${activeImageIndex + 1}`}
                                className="award-carousel-image"
                            />
                        </div>

                        <button
                            className="award-carousel-arrow award-carousel-arrow-right"
                            type="button"
                            onClick={showNextImage}
                            aria-label="Show next award image"
                        >
                            ›
                        </button>

                        <div className="award-carousel-dots">
                            {awardImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={
                                        index === activeImageIndex
                                            ? "award-carousel-dot award-carousel-dot-active"
                                            : "award-carousel-dot"
                                    }
                                    type="button"
                                    onClick={() => setActiveImageIndex(index)}
                                    aria-label={`Show award image ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default AwardSection;