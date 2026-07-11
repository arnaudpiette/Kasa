import { useState } from 'react';

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;
  const hasMultiplePictures = total > 1;

  if (total === 0) return null;

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + total) % total);
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % total);
  };

  return (
    <section className="slideshow" aria-label={`Photos du logement ${title}`}>
      <img
        key={pictures[currentIndex]}
        className="slideshow__image"
        src={pictures[currentIndex]}
        alt={`${title} — photo ${currentIndex + 1} sur ${total}`}
      />

      {hasMultiplePictures && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--previous"
            type="button"
            onClick={showPrevious}
            aria-label="Afficher la photo précédente"
          />
          <button
            className="slideshow__arrow slideshow__arrow--next"
            type="button"
            onClick={showNext}
            aria-label="Afficher la photo suivante"
          />
          <p className="slideshow__counter" aria-live="polite">
            {currentIndex + 1}/{total}
          </p>
        </>
      )}
    </section>
  );
}

export default Slideshow;
