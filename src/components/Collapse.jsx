import { useId, useState } from 'react';

function Collapse({ title, children, defaultOpen = false, modifier = '' }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const className = [
    'collapse',
    isOpen && 'collapse--open',
    modifier && `collapse--${modifier}`,
  ].filter(Boolean).join(' ');

  return (
    <section className={className}>
      <button
        className="collapse__trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{title}</span>
        <span className="collapse__arrow" aria-hidden="true" />
      </button>
      <div className="collapse__animation">
        <div className="collapse__content" id={contentId} aria-hidden={!isOpen}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default Collapse;
