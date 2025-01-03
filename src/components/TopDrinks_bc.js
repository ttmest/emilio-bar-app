import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import drinksData from "../data/drinky.json"; // Import JSON dat

export default function TopDrinks({ subcategory }) {
  const [drinks, setDrinks] = useState([]); // State pro drinky
  const navigate = useNavigate();

  useEffect(() => {
    // Mapujeme JSON na správný formát a kontrolujeme existenci atributů
    const filteredDrinks = drinksData
      .map((drink) => ({
        drink: drink.drink?.S || "N/A",
        alcoholic: drink.alcoholic?.BOOL || false,
        available: drink.available?.BOOL || false,
        mainComponent: drink.mainComponent?.S || "N/A",
        component: drink.component?.S || "N/A",
        image: drink.image?.S || "N/A",
        category: drink.category?.S || "N/A",
        subCategory: drink.subCategory?.S || null, // Pokud `subCategory` neexistuje, vrátí `null`
      }))
      .filter((drink) => drink.subCategory === subcategory); // Filtrujeme pouze podle zadané subCategory

    setDrinks(filteredDrinks);
  }, [subcategory]); // Znovu se spustí, pokud se změní prop `subcategory`

  const handleOrder = (drinkName) => {
    navigate(`/order-form?drink=${encodeURIComponent(drinkName)}`);
  };

  return (
    <>
      <h2 className="top-drinks-title">{subcategory} koktejly</h2>
      <div className="top-drinks-content">
        <div className="container">
          {drinks.length > 0 ? (
            drinks.map((drink) => (
              <div className="drink-card" key={drink.drink}>
                <img
                  src={require(`../assets/images/${drink.image}`)} // Dynamický import obrázku
                  alt={drink.drink}
                  className="highlight"
                />
                <div className="content">
                  <h3>{drink.drink}</h3>
                  <p>
                    <strong>Složení:</strong> {drink.mainComponent}, {drink.component}
                  </p>
                  {/* <p>
                    <strong>Dostupnost:</strong> {drink.available ? "Dostupný" : "Nedostupný"}
                  </p> */}
                  <button
                    className={`order-button ${!drink.available ? "disabled" : ""}`}
                    disabled={!drink.available}
                    onClick={() => handleOrder(drink.drink)}
                  >
                    Objednat
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Žádné koktejly v kategorii {subcategory} nebyly nalezeny.</p>
          )}
        </div>
      </div>
    </>
  );
}
