import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

import "../css/GallerySection.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop",
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="gallery-section">
      {/* Header */}
      <div className="gallery-header">
        <p className="gallery-tag">Late Night Laughs & Neon Nights</p>
        <h1>Comedy Club Gallery</h1>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img
          src={galleryImages[currentIndex]}
          alt="Featured comedy club"
          className="featured-image"
        />

        {/* Left Arrow */}
        <button className="gallery-arrow left-arrow" onClick={prevImage}>
          <ChevronLeft size={40} />
        </button>

        {/* Right Arrow */}
        <button className="gallery-arrow right-arrow" onClick={nextImage}>
          <ChevronRight size={40} />
        </button>

        {/* Enlarge Button */}
        <button
          className="expand-button"
          onClick={() => setIsExpanded(true)}
        >
          <Maximize2 size={28} />
        </button>

        {/* Overlay */}
        <div className="featured-overlay">
          <h2>Saturday Spotlight</h2>
          <p>
            Electric crowds, neon vibes, unforgettable stand-up performances,
            and nonstop nightlife energy.
          </p>
        </div>
      </div>

      {/* Expanded Fullscreen View */}
      {isExpanded && (
        <div className="fullscreen-overlay">
          {/* Close Button */}
          <button
            className="close-fullscreen"
            onClick={() => setIsExpanded(false)}
          >
            <X size={38} />
          </button>

          {/* Fullscreen Image */}
          <img
            src={galleryImages[currentIndex]}
            alt="Expanded gallery"
            className="fullscreen-image"
          />

          {/* Fullscreen Arrows */}
          <button
            className="gallery-arrow fullscreen-left"
            onClick={prevImage}
          >
            <ChevronLeft size={45} />
          </button>

          <button
            className="gallery-arrow fullscreen-right"
            onClick={nextImage}
          >
            <ChevronRight size={45} />
          </button>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`gallery-card ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;