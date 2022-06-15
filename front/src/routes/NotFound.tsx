import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1>Oups... Page non trouvée. (404)</h1>
      <Link to="/">
        <button className="primary">Retour Accueil</button>
      </Link>
    </main>
  );
}

export default NotFound;
