import AccommodationCard from '../components/AccommodationCard';
import accommodations from '../data/logements.json';

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section className="gallery" aria-label="Liste des logements">
        {accommodations.map((accommodation) => (
          <AccommodationCard key={accommodation.id} accommodation={accommodation} />
        ))}
      </section>
    </>
  );
}

export default Home;
