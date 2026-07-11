import { Navigate, useParams } from 'react-router-dom';
import accommodations from '../data/logements.json';

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodations.find((item) => item.id === id);

  if (!accommodation) return <Navigate to="/404" replace />;

  return (
    <article className="accommodation">
      <img className="accommodation__cover" src={accommodation.cover} alt={accommodation.title} />
      <div className="accommodation__heading">
        <div>
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <ul className="tags">
            {accommodation.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="host">
          <span>{accommodation.host.name}</span>
          <img src={accommodation.host.picture} alt={accommodation.host.name} />
        </div>
      </div>
      <div className="accommodation__details">
        <details className="collapse" open>
          <summary>Description</summary>
          <p>{accommodation.description}</p>
        </details>
        <details className="collapse" open>
          <summary>Équipements</summary>
          <ul>{accommodation.equipments.map((item) => <li key={item}>{item}</li>)}</ul>
        </details>
      </div>
    </article>
  );
}

export default Accommodation;
