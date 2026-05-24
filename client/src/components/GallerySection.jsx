import "../css/GallerySection.css";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1648808678096-18f488fd6858?auto=format&fit=crop&q=80&w=1400",
        alt: "Open mic stage with neon lights",
        title: "Open Mic Energy",
        label: "Featured"
    },
    {
        src: "https://images.unsplash.com/photo-1580188928585-0ef5c1a5c4dd?auto=format&fit=crop&q=80&w=1000",
        alt: "Microphone on stage",
        title: "Center Stage",
        label: "Comedy"
    },
    {
        src: "https://images.unsplash.com/photo-1641903806973-17eaf2d2634f?auto=format&fit=crop&q=80&w=1000",
        alt: "Microphone stand against a brick wall",
        title: "The First Joke",
        label: "Mic"
    },
    {
        src: "https://images.unsplash.com/photo-1769761341012-526493327ac7?auto=format&fit=crop&q=80&w=1000",
        alt: "Neon sign in a performance venue",
        title: "Yes, And...",
        label: "Improv"
    },
    {
        src: "https://images.unsplash.com/photo-1676638281470-94102958b8e7?auto=format&fit=crop&q=80&w=1000",
        alt: "Small stage with microphone",
        title: "Front Row Seat",
        label: "Spotlight"
    },
    {
        src: "https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?auto=format&fit=crop&q=80&w=1000",
        alt: "Crowd under nightclub stage lights",
        title: "Crowd Heat",
        label: "Nightclub"
    },
    {
        src: "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?auto=format&fit=crop&q=80&w=1000",
        alt: "Nightclub crowd under colorful lights",
        title: "Late Night Lights",
        label: "Club"
    },
    {
        src: "https://images.unsplash.com/photo-1687511844598-165c1fc387cc?auto=format&fit=crop&q=80&w=1000",
        alt: "Audience under colorful concert lighting",
        title: "The Big Laugh",
        label: "Audience"
    }
];

const GallerySection = () => {
    const mainImage = galleryImages[0];
    const gridImages = galleryImages.slice(1);

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
                        <img src={mainImage.src} alt={mainImage.alt} />

                        <div className="gallery-main-caption">
                            <span>{mainImage.label}</span>
                            <h2>{mainImage.title}</h2>
                        </div>
                    </article>

                    <div className="gallery-grid">
                        {gridImages.map((image, index) => (
                            <article className="gallery-item" key={index}>
                                <img src={image.src} alt={image.alt} />

                                <div className="gallery-caption">
                                    <span>{image.label}</span>
                                    <h2>{image.title}</h2>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GallerySection;