import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTranslatedCategory } from "../utils/translate";
import "../styles/DrinkCard.css";

export default function DrinkCard({ category }) {
  const [drinks, setDrinks] = useState([]);
  const [translatedCategory, setTranslatedCategory] = useState(category);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null); // Stav pro modální okno
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch("https://tjxw40qbpe.execute-api.eu-central-1.amazonaws.com/prod/drinks/getDrink");
        const data = await response.json();

        const filteredDrinks = data.filter((drink) => drink.category === category);
        setDrinks(filteredDrinks);
      } catch (error) {
        console.error("Chyba při načítání drinků z API:", error);
      }
    };

    const fetchTranslation = async () => {
      const translation = await getTranslatedCategory(category);
      setTranslatedCategory(translation);
    };

    fetchDrinks();
    fetchTranslation();
  }, [category]);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleOrder = (drink) => {
    navigate(`/order-form?drink=${encodeURIComponent(drink)}`);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

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
                  onClick={() => openModal(require(`../assets/images/${drink.image}`))} // Otevření modálu
                />
                <div className="content">
                  <h3>{drink.drink}</h3>
                  <p>
                    <strong>Složení:</strong> {drink.mainComponent},{" "}
                    {drink.component}
                  </p>
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
      {modalImage && ( // Modální okno
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Drink" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}
