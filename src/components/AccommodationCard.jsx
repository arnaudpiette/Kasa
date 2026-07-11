import { Link } from 'react-router-dom';

function AccommodationCard({ accommodation }) {
  return (
    <article className="card">
      <Link to={`/logement/${accommodation.id}`}>
        <img src={accommodation.cover} alt="" />
        <h2>{accommodation.title}</h2>
      </Link>
    </article>
  );
}

export default AccommodationCard;
