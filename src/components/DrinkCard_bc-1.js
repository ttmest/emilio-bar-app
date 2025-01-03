import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTranslatedCategory } from "../utils/translate";
import "../App.css";
import drinksData from "../data/drinky.json";

export default function DrinkCard({ category }) {
  const [drinks, setDrinks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredDrinks = drinksData
      .map((drink) => ({
        drink: drink.drink.S,
        alcoholic: drink.alcoholic.BOOL,
        available: drink.available.BOOL,
        mainComponent: drink.mainComponent.S,
        component: drink.component.S,
        image: drink.image.S,
        category: drink.category.S,
      }))
      .filter((drink) => drink.category === category);

    setDrinks(filteredDrinks);
  }, [category]);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleOrder = (drink) => {
    navigate(`/order-form?drink=${encodeURIComponent(drink)}`);
  };

  const translatedCategory = getTranslatedCategory(category);

  return (
    <>
      <div className="category-header">
        <h2>{translatedCategory}</h2>
        <button className="toggle-icon" onClick={toggleSection}>
          {isOpen ? "−" : "+"}
        </button>
      </div>
      {isOpen && (
        <div className="top-drinks-content">
          <div className="container">
            {drinks.map((drink) => (
              <div className="drink-card" key={drink.drink}>
                <img
                  src={require(`../assets/images/${drink.image}`)}
                  alt={drink.drink}
                  className="highlight"
                />
                <div className="content">
                  <h3>{drink.drink}</h3>
                  <p>
                    <strong>Složení:</strong> {drink.mainComponent},{" "}
                    {drink.component}
                  </p>
                  {/* <p>
                    <strong>Dostupnost:</strong>{" "}
                    {drink.available ? "Dostupný" : "Nedostupný"}
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
            ))}
          </div>
        </div>
      )}
    </>
  );
}
