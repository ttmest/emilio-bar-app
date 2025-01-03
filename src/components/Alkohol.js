import React from "react";
import "../App.css";
// import "../styles/Menu.css";
import "../styles/Alkohol.css";
import bacardi from '../assets/images/alkohol/bacardi.png';
import gin from '../assets/images/alkohol/gin.png';
import havana from '../assets/images/alkohol/havana.png';
import likery from '../assets/images/alkohol/likery.png';
import ostatni from '../assets/images/alkohol/ostatni.png';

export default function Alkohol() {
    return (
        <>
            <div className="notice">
                Na své koktejly používám jen ty nejlepší ingredience. Pro rumové drinky nejčastěji sahám po Bacardi, ale mám také skvělou Havanu pro ty, kteří ocení jinou chuťovou variantu. Když míchám koktejly z ginu, vybírám mezi Bombay Sapphire nebo Beefeater, podle toho, co se nejlépe hodí k výsledné chuti. A pokud jde o vodkové koktejly, spoléhám na klasiku – Absolut. Každý drink je tak připraven s důrazem na kvalitní alkohol a chuťový zážitek.
            </div>
            <div className="alcohol-container" >
                <img src={bacardi} alt="Bacardi" className="alcohol-image" />
                <img src={gin} alt="Gin" className="alcohol-image" />
                <img src={havana} alt="Havana" className="alcohol-image" />
                <img src={likery} alt="Likéry" className="alcohol-image" />
                <img src={ostatni} alt="Ostatní alkohol" className="alcohol-image" />
            </div>
        </>

    );
}
