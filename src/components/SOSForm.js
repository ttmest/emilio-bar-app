import React, { useState } from "react";
import "../styles/SOSForm.css";

export default function SOSForm({ onClose }) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    setErrorMessage("");

    if (!name.trim() || !note.trim()) {
      setErrorMessage("Prosím, vyplňte obě pole.");
      return;
    }

    try {
      const response = await fetch("https://tjxw40qbpe.execute-api.eu-central-1.amazonaws.com/prod/sosMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, note }),
      });

      if (!response.ok) {
        throw new Error("Chyba při odesílání zprávy.");
      }

      const data = await response.json();
      alert(data.message);
      onClose();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Chyba při odesílání zprávy. Zkuste to znovu.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>SOS Formulář</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="form-group">
          <label htmlFor="name">Jméno:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="note">Poznámka:</label>
          <textarea
            id="note"
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        <button className="submit-button" onClick={handleSubmit}>Odeslat zprávu</button>
        <button className="close-button" onClick={onClose}>
          Zavřít
        </button>
      </div>
    </div>
  );
}
