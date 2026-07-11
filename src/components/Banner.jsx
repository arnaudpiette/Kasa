function Banner({ image, title, modifier = '' }) {
  const className = `banner${modifier ? ` banner--${modifier}` : ''}`;

  return (
    <section
      className={className}
      style={{ '--banner-image': `url(${image})` }}
      aria-label={title || 'Bannière Kasa'}
    >
      {title && <h1>{title}</h1>}
    </section>
  );
}

export default Banner;
