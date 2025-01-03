import React from "react";
// import "../App.css";
// import "../styles/Menu.css";
import "../styles/AboutMe.css";
import emilio from '../assets/images/emilio.png';
import kufr from '../assets/images/kufr.png';
import batoh from '../assets/images/batoh.png';
import kniha from '../assets/images/kniha.png';

export default function AboutMe() {
  return (
    <div className="about-me">
      {/* <div className="menu">
        <ul>
          <li>
            <a href="/about-me">O mně</a>
          </li>
          {<li>
            <a href="/alkohol">Alkohol</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>}
        </ul>
      </div> */}
      <h2>
        <img
          src={emilio}
          alt="Emil"
          className="profile-pic"
          title="Emilio Estevez"
        />
      </h2>
      <h2>O mně</h2>
      <p>
        Jmenuji se Emil, ale přátelé mi říkají Emilio – jako herec{" "}
        <a
          href="https://www.youtube.com/watch?v=v2fOMWpmQLA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emilio Estevez
        </a>
        . Je mi 41 let a mou vášeň pro míchání koktejlů jsem objevil zcela
        nečekaně na své 40. narozeniny. Tenkrát jsem od svého nejlepšího
        kamaráda dostal barmanský kufřík. Když jsem ho poprvé otevřel, netušil
        jsem, k čemu většina nástrojů vůbec slouží. Postupem času jsem si je
        však osvojil a míchání drinků se stalo mojí skutečnou vášní. K tomu mi
        pomohla i kniha "100 nejlepších koktejlů", i když na začátku bylo téměř
        nemožné si některý z nich namíchat, protože jsem neměl většinu potřebných
        ingrediencí. Dnes už dokážu připravit téměř všechny z nich a mohu je
        nabídnout mým kamarádům z Jesenice. Mám své vlastní webové stránky a
        brzy se chystám vstoupit i na Instagram, kde budu sdílet své koktejlové
        kreace. Tak držte palce.
      </p>
      <h2>Koncept Emilio Baru</h2>
      <p>
        Emilio Bar vznikl jako způsob, jak přinést koktejlové zážitky blíž mým
        přátelům a sousedům. Koncept je jednoduchý, ale unikátní – pokud
        bydlíte v našem domě nebo blízkém okolí, můžete si objednat skvělý
        koktejl, který vám připravím na míru a osobně donesu až domů. Ať už
        máte chuť na osvěžující Mojito, elegantní Martini, nebo něco speciálního
        podle vašich přání, jsem tu pro vás. Mimo to také rád pomáhám na
        narozeninových oslavách a dalších akcích. Pokud plánujete oslavu a chcete
        přidat špetku originality, mohu vám připravit širokou škálu drinků
        přímo na místě. Vše s vášní, pečlivostí a úsměvem. 😊 Cílem Emilio Baru
        je nejen míchání skvělých koktejlů, ale i sdílení radosti z dobrého
        pití. Pokud jste z Jesenice nebo okolí a chcete si zpříjemnit večer,
        neváhejte mě kontaktovat. Rád se o vaše koktejlové zážitky postarám!
      </p>
      <div className="image-container">
        <h3>Můj barmanský kufřík</h3>
        <img
          src={kufr}
          alt="Barmanský kufřík"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="image-container">
        <h3>Můj barmanský batůžek</h3>
        <img
          src={batoh}
          alt="Barmanský batůžek"
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>
      <div className="image-container">
        <h3>Kniha, která byla součástí</h3>
        <img
          src={kniha}
          alt="Kniha o míchání drinků"
          style={{ maxWidth: "30%", height: "auto" }}
        />
      </div>
      {/* <div className="back-to-home">
        <a href="/">Zpět na hlavní stránku</a>
      </div>
      <div style={{ marginTop: "20px", fontSize: "12px", color: "#888" }}>
        <p>Poslední aktualizace stránek: 1. ledna 2025</p>
      </div> */}
    </div>
  );
}
