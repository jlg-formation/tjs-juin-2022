import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Gérer efficacement votre stock !</h1>
      <div className="jumbo">
        <Link to="/stock">
          <button className="primary">Voir le stock</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
