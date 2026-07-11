import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/logement/${id}`} aria-label={`Voir le logement : ${title}`}>
        <img src={cover} alt="" />
        <h2>{title}</h2>
      </Link>
    </article>
  );
}

export default Card;
