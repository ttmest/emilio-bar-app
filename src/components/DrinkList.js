import React from "react";
import DrinkCard from "./DrinkCard_bc";

const drinks = [
  { name: "Cuba Libre", buttonId: "cuba-libre-button", image: "images/cuba_libre.jpg", ingredients: "Bacardi, Coca Cola, limeta" },
  { name: "Mojito", buttonId: "mojito-button", image: "images/mojito.jpg", ingredients: "Bacardi, máta, limeta, sodovka" },
  // Přidej další drinky...
];

const DrinkList = ({ isOpen }) => {
  return (
    <div className="container">
      {drinks.map((drink) => (
        <DrinkCard key={drink.buttonId} drink={drink} isOpen={isOpen} />
      ))}
    </div>
  );
};

export default DrinkList;
