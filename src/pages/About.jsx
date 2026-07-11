import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutBanner from '../assets/Images/Image-a_propos.png';

const values = [
  ['Fiabilité', 'Les annonces postées sur Kasa garantissent une fiabilité totale.'],
  ['Respect', 'La bienveillance fait partie des valeurs fondatrices de Kasa.'],
  ['Service', 'Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite.'],
  ['Sécurité', 'La sécurité est la priorité de Kasa pour ses hôtes comme pour les voyageurs.'],
];

function About() {
  return (
    <>
      <Banner image={aboutBanner} modifier="about" />
      <section className="about">
        <h1 className="visually-hidden">À propos</h1>
        {values.map(([title, text]) => (
          <Collapse key={title} title={title} modifier="about">
            <p>{text}</p>
          </Collapse>
        ))}
      </section>
    </>
  );
}

export default About;
