import Banner from '../components/Banner';
import Card from '../components/Card';
import accommodations from '../data/logements.json';

const homeBanner = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/kasa-banner.jpg';

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
