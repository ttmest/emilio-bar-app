import React from "react";
import logo from './assets/images/emilio-bar-logo.png';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Message from './components/Message';
import Footer from './components/Footer';
import DrinkCard from './components/DrinkCard';
import TopDrinks from './components/TopDrinks';
import Menu from './components/Menu';
import OrderForm from "./components/OrderForm";
import AboutMe from "./components/AboutMe";
import Alkohol from "./components/Alkohol";

function App() {
    return (
        <Router>
            <div className="header-container">
                <img className='logo' src={logo} alt="Emilio Bar Logo" />
            </div>
            <Menu />
            <Message />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <TopDrinks subcategory="TOP" />
                            <DrinkCard category="Rum" />
                            <DrinkCard category="Vodka" />
                            <DrinkCard category="Gin" />
                            <DrinkCard category="Other" />
                            <DrinkCard category="Non-Alcoholic" />
                        </>
                    }
                />
                <Route path="/order-form" element={<OrderForm />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/alkohol" element={<Alkohol />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
