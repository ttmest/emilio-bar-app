import React from "react";
import '../App.css';
import qr from '../assets/images/qr-kod.png';

export default function Footer() {
    
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="message-container">
                <p className="cocktail-message">
                    Každý koktejl, který namíchám, znamená míň hraček pro mé děti. Přispějte, ať si můžu koupit nejen nové
                    ingredience, ale i jejich úsměv!
                </p>
                <img src={qr} className="qr-code" alt="QR code" />
                <p className="donation-text">Pro případné dary můžete použít QR kód</p>
            </div>
            <div style={{ marginTop: "20px", fontSize: "12px", color: "#888" }}>
                <p>© {currentYear} emiliobar </p>
                <p>Poslední aktualizace stránek: 1. ledna 2025</p>
            </div>
        </>
    );
}