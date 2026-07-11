import { Navigate, useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
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
        <Collapse title="Description" modifier="accommodation">
          <p>{accommodation.description}</p>
        </Collapse>
        <Collapse title="Équipements" modifier="accommodation">
          <ul>{accommodation.equipments.map((item) => <li key={item}>{item}</li>)}</ul>
        </Collapse>
      </div>
    </article>
  );
}

export default Accommodation;
