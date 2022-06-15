import { faCircleNotch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewArticle } from "../interfaces/Article";
import api from "../services/api";

function Add() {
  const [name, setName] = useState("Truc");
  const [price, setPrice] = useState(1);
  const [qty, setQty] = useState(1);

  const [isAdding, setIsAdding] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  return (
    <main>
      <h1>Ajouter un article</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          (async () => {
            try {
              setIsAdding(true);
              const article: NewArticle = {
                name,
                price,
                qty,
              };
              await api.addArticle(article);
              navigate("/stock");
            } catch (err) {
              setIsAdding(false);
              if (err instanceof Error) {
                setErrorMsg(err.message);
              }
            }
          })();
        }}
      >
        <label>
          <div>Nom</div>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              const newName = event.target.value;

              setName(newName);
            }}
          />
        </label>
        <label>
          <div>Prix</div>
          <input
            type="number"
            value={price}
            onChange={(event) => {
              const newPrice = +event.target.value;

              setPrice(newPrice);
            }}
          />
        </label>
        <label>
          <div>Quantité</div>
          <input
            type="number"
            value={qty}
            onChange={(event) => setQty(+event.target.value)}
          />
        </label>
        <button className="primary" disabled={isAdding}>
          <FontAwesomeIcon
            icon={isAdding ? faCircleNotch : faPlus}
            spin={isAdding}
          />
          <span>Ajouter</span>
        </button>
      </form>
      <span>{errorMsg}</span>
    </main>
  );
}

export default Add;
