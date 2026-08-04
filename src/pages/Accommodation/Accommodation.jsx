import { useLayoutEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import Slideshow from '../../components/Slideshow/Slideshow';
import accommodations from '../../data/logements.json';
import './Accommodation.scss';

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodations.find((item) => item.id === id);
  const detailsRef = useRef(null);
  const [detailsContentHeight, setDetailsContentHeight] = useState();

  useLayoutEffect(() => {
    const details = detailsRef.current;
    if (!details) return undefined;

    const contents = [...details.querySelectorAll('.collapse__content')];
    const measure = () => {
      const tallestContent = Math.max(
        ...contents.map((content) => content.firstElementChild?.scrollHeight ?? 0),
      );
      setDetailsContentHeight(tallestContent || undefined);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    contents.forEach((content) => {
      if (content.firstElementChild) resizeObserver.observe(content.firstElementChild);
    });

    return () => resizeObserver.disconnect();
  }, [id]);

  if (!accommodation) return <Navigate to="/404" replace />;

  return (
    <article className="accommodation">
      <Slideshow
        key={accommodation.id}
        pictures={accommodation.pictures}
        title={accommodation.title}
      />
      <div className="accommodation__heading">
        <div className="accommodation__summary">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <ul className="tags">
            {accommodation.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="accommodation__host-info">
          <div className="host">
            <span>{accommodation.host.name}</span>
            <img src={accommodation.host.picture} alt={accommodation.host.name} />
          </div>
          <Rating value={accommodation.rating} />
        </div>
      </div>
      <div className="accommodation__details" ref={detailsRef}>
        <Collapse
          title="Description"
          modifier="accommodation"
          contentMinHeight={detailsContentHeight}
        >
          <p>{accommodation.description}</p>
        </Collapse>
        <Collapse
          title="Équipements"
          modifier="accommodation"
          contentMinHeight={detailsContentHeight}
        >
          <ul>{accommodation.equipments.map((item) => <li key={item}>{item}</li>)}</ul>
        </Collapse>
      </div>
    </article>
  );
}

export default Accommodation;
