import { useState } from "react";
import "../css/GallerySection.css";

const galleryImageModules = import.meta.glob(
    [
        "../photo assets/Gallery Page/BTS/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
        "../photo assets/Gallery Page/Stills/DaVinci Stills/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
        "../photo assets/Gallery Page/Stills/Premiere Stills/*.{jpg,jpeg,png,JPG,JPEG,PNG}"
    ],
    {
        eager: true,
        query: "?url",
        import: "default"
    }
);

const galleryImages = Object.entries(galleryImageModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, imageUrl]) => imageUrl);

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

    if (galleryImages.length === 0) {
        return (
            <section className="gallery-section">
                <div className="gallery-content">
                    <h1 className="gallery-title">Gallery</h1>
                    <p className="gallery-intro">
                        No gallery images found. Add images to src/photo assets/Gallery Page/BTS/,
                        src/photo assets/Gallery Page/Stills/DaVinci Stills/, or
                        src/photo assets/Gallery Page/Stills/Premiere Stills/.
                    </p>
                </div>
            </section>
        );
    }

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
                                key={`${image}-${index}`}
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