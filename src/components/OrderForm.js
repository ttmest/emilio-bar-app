import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/OrderForm.css";

function OrderForm() {
  const [name, setName] = useState("");
  const [drink, setDrink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isBarOpen, setIsBarOpen] = useState(true);
  const [isDrinkAvailable, setIsDrinkAvailable] = useState(true);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const selectedDrink = searchParams.get("drink");
    setDrink(selectedDrink || "");

    // Kontrola dostupnosti baru
    async function checkBarStatus() {
      try {
        const barStatusResponse = await fetch(
          "https://tjxw40qbpe.execute-api.eu-central-1.amazonaws.com/prod/barStatus?drink=OpenHours"
        );
        const barStatus = await barStatusResponse.json();
        setIsBarOpen(barStatus.current_available);

        const drinkAvailabilityResponse = await fetch(
          `https://tjxw40qbpe.execute-api.eu-central-1.amazonaws.com/prod/drinks/getDrink?drink=${encodeURIComponent(
            selectedDrink
          )}`
        );
        const drinkAvailability = await drinkAvailabilityResponse.json();
        setIsDrinkAvailable(drinkAvailability.available);
      } catch (error) {
        console.error("Error checking bar status or drink availability:", error);
      }
    }

    if (selectedDrink) {
      checkBarStatus();
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Zabráníme reloadu stránky
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Prosím, vyplňte své jméno.");
      return;
    }

    if (!isBarOpen) {
      alert("Omlouváme se, bar je momentálně zavřený.");
      return;
    }

    if (!isDrinkAvailable) {
      alert("Omlouváme se, tento drink není momentálně dostupný.");
      return;
    }

    try {
      const response = await fetch(
        "https://tjxw40qbpe.execute-api.eu-central-1.amazonaws.com/prod/orders/submitOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, drink }),
        }
      );

      if (!response.ok) {
        throw new Error("Chyba při odesílání objednávky.");
      }

      const data = await response.json();
      alert(data.message);
      setName(""); // Vyprázdní pole po odeslání
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Chyba při odesílání objednávky.");
    }
  };

  return (
    <div className="order-form-container">
      <h1>Objednávka</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Vaše jméno:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Zadejte své jméno"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="drink">Nápoj:</label>
          <input type="text" id="drink" value={drink} readOnly />
        </div>
        <button type="submit">Odeslat objednávku</button>
      </form>
    </div>
  );
}

export default OrderForm;
