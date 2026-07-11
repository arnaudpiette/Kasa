import Banner from '../components/Banner';
import Card from '../components/Card';
import homeBanner from '../assets/Images/Image-Header.png';
import accommodations from '../data/logements.json';

function Home() {
  return (
    <>
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
      <section className="gallery" aria-label="Liste des logements">
        {accommodations.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </section>
    </>
  );
}

export default Home;
