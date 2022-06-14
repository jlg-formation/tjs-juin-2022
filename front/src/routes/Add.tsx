import { useState } from "react";

function Add() {
  const [name, setName] = useState("xxx");

  return (
    <main>
      <h1>Ajouter un article</h1>
      <form>
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
          <input type="text" />
        </label>
        <label>
          <div>Quantité</div>
          <input type="text" />
        </label>
        <button className="primary">Ajouter</button>
      </form>
      <span>name: {name}</span>
    </main>
  );
}

export default Add;
