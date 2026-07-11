const maximumRating = 5;

function Rating({ value }) {
  const rating = Math.min(maximumRating, Math.max(0, Number(value)));

  return (
    <div className="rating" aria-label={`Note : ${rating} sur ${maximumRating}`}>
      {Array.from({ length: maximumRating }, (_, index) => (
        <span
          key={index}
          className={index < rating ? 'rating__star rating__star--active' : 'rating__star'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
