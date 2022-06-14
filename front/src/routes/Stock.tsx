import { Link } from "react-router-dom";

function Stock() {
  return (
    <main>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button>Rafraîchir</button>
          <Link to="add">
            <button>Ajouter</button>
          </Link>
          <button>Supprimer</button>
        </nav>
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">2.34 €</td>
              <td className="qty">567</td>
            </tr>
            <tr>
              <td className="name">Pelle</td>
              <td className="price">6.20 €</td>
              <td className="qty">34</td>
            </tr>
            <tr>
              <td className="name">Marteau</td>
              <td className="price">4.50 €</td>
              <td className="qty">123</td>
            </tr>
            <tr>
              <td className="name">Perceuse</td>
              <td className="price">25.00 €</td>
              <td className="qty">17</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Stock;
