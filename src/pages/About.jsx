const values = [
  ['Fiabilité', 'Les annonces postées sur Kasa garantissent une fiabilité totale.'],
  ['Respect', 'La bienveillance fait partie des valeurs fondatrices de Kasa.'],
  ['Service', 'Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite.'],
  ['Sécurité', 'La sécurité est la priorité de Kasa pour ses hôtes comme pour les voyageurs.'],
];

function About() {
  return (
    <>
      <section className="hero hero--about" aria-label="À propos de Kasa" />
      <section className="about">
        <h1 className="visually-hidden">À propos</h1>
        {values.map(([title, text]) => (
          <details key={title} className="collapse">
            <summary>{title}</summary>
            <p>{text}</p>
          </details>
        ))}
      </section>
    </>
  );
}

export default About;
