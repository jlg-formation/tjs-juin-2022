import { useState } from "react";
import { Article, NewArticle } from "../interfaces/Article";
import api from "../services/api";

function Add() {
  const [name, setName] = useState("Truc");
  const [price, setPrice] = useState(1);
  const [qty, setQty] = useState(1);

  return (
    <main>
      <h1>Ajouter un article</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          (async () => {
            try {
              const article: NewArticle = {
                name,
                price,
                qty,
              };
              await api.addArticle(article);
            } catch (err) {
              console.log("err: ", err);
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
              console.log("event: ", event);
              const newName = event.target.value;
              console.log("newName: ", newName);
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
              console.log("event: ", event);
              const newPrice = +event.target.value;
              console.log("newPrice: ", newPrice);
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
        <button className="primary">Ajouter</button>
      </form>
      <span>name: {name}</span>
      <span>price: {price}</span>
      <span>qty: {qty}</span>
    </main>
  );
}

export default Add;
