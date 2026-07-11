import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <section className="error-page" aria-labelledby="error-title">
      <h1 id="error-title">404</h1>
      <p>Oups ! La page que vous demandez n’existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default ErrorPage;
