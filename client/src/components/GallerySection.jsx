import { useState } from "react";
import "../css/GallerySection.css";

const galleryImages = [
    "https://images.unsplash.com/photo-1648808678096-18f488fd6858?auto=format&fit=crop&q=80&w=1400",
    "https://images.unsplash.com/photo-1580188928585-0ef5c1a5c4dd?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1641903806973-17eaf2d2634f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1769761341012-526493327ac7?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1676638281470-94102958b8e7?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1687511844598-165c1fc387cc?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1000"
];

const GallerySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isEnlarged, setIsEnlarged] = useState(false);

    const mainImage = galleryImages[activeIndex];
    const galleryColumnCount = Math.min(galleryImages.length, 8);

    const showPreviousImage = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
        );
    };

    const showNextImage = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <section className="gallery-section">
            <div className="gallery-spotlight"></div>

            <div className="gallery-content">
                <p className="gallery-kicker">Behind the Scenes</p>
                <h1 className="gallery-title">Gallery</h1>

                <p className="gallery-intro">
                    A neon-lit look into the stage, the crowd, the microphone, and the late-night
                    comedy club energy behind Front Row.
                </p>

                <div className="gallery-frame">
                    <article className="gallery-main-feature">
                        <img
                            src={mainImage}
                            alt={`Featured gallery image ${activeIndex + 1}`}
                            loading="eager"
                        />

                        <div className="gallery-arrow-controls">
                            <button
                                className="gallery-arrow gallery-arrow-left"
                                type="button"
                                onClick={showPreviousImage}
                                aria-label="Show previous image"
                            >
                                ‹
                            </button>

                            <button
                                className="gallery-arrow gallery-arrow-right"
                                type="button"
                                onClick={showNextImage}
                                aria-label="Show next image"
                            >
                                ›
                            </button>
                        </div>

                        <button
                            className="gallery-enlarge-button"
                            type="button"
                            onClick={() => setIsEnlarged(true)}
                            aria-label="Enlarge image"
                        >
                            ⛶
                        </button>
                    </article>

                    <div
                        className="gallery-grid"
                        style={{ "--gallery-column-count": String(galleryColumnCount) }}
                    >
                        {galleryImages.map((image, index) => (
                            <button
                                className={
                                    index === activeIndex
                                        ? "gallery-item gallery-item-active"
                                        : "gallery-item"
                                }
                                key={index}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show gallery image ${index + 1}`}
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {isEnlarged && (
                <div className="gallery-lightbox" role="dialog" aria-modal="true">
                    <button
                        className="gallery-lightbox-close"
                        type="button"
                        onClick={() => setIsEnlarged(false)}
                        aria-label="Close enlarged image"
                    >
                        ×
                    </button>

                    <button
                        className="gallery-lightbox-arrow gallery-lightbox-arrow-left"
                        type="button"
                        onClick={showPreviousImage}
                        aria-label="Show previous enlarged image"
                    >
                        ‹
                    </button>

                    <img
                        src={mainImage}
                        alt={`Enlarged gallery image ${activeIndex + 1}`}
                    />

                    <button
                        className="gallery-lightbox-arrow gallery-lightbox-arrow-right"
                        type="button"
                        onClick={showNextImage}
                        aria-label="Show next enlarged image"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    )
}

export default GallerySection;