import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import homeBanner from '../../assets/Images/Image-Header.jpg';
import accommodations from '../../data/logements.json';
import './Home.scss';

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
