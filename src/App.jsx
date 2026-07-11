import { useEffect, useState } from 'react';
import logementsData from './data/logements.json';

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <main>
      <h1>Kasa</h1>
      <p>Projet React initialisé avec les données JSON.</p>
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>{logement.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
