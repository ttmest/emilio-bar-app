import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { getTranslatedCategory } from "../utils/translate";
// import "../App.css";
import "../styles/TopDrinks.css";

export default function TopDrinks({ subcategory }) {
  const [drinks, setDrinks] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        // Načtení kompletního seznamu drinků z API
        const response = await fetch("https://tjxw40qbpe.execute-api.eu-central-1.amazonaws.com/prod/drinks/getDrink");
        const data = await response.json();

        // Filtrování drinků podle kategorie
        const filteredDrinks = data.filter((drink) => drink.subCategory === subcategory);
        setDrinks(filteredDrinks);
      } catch (error) {
        console.error("Chyba při načítání drinků z API:", error);
      }
    };

    fetchDrinks();
  }, [subcategory]);

  // const toggleSection = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleOrder = (drink) => {
    navigate(`/order-form?drink=${encodeURIComponent(drink)}`);
  };

  // const translatedCategory = getTranslatedCategory(subcategory);

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
