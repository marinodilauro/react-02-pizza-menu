import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Main App
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header component
function Header() {
  return (
    <header className="header">
      <h1 >Virtual DOMinos Pizza</h1>
    </header>
  );
}

// Menu component
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza name={pizzaData[0].name} ingredients={pizzaData[0].ingredients} imgSrc={pizzaData[0].photoName} price={pizzaData[0].price} />
      <Pizza name={pizzaData[1].name} ingredients={pizzaData[1].ingredients} imgSrc={pizzaData[1].photoName} price={pizzaData[1].price} />
      <Pizza name={pizzaData[2].name} ingredients={pizzaData[2].ingredients} imgSrc={pizzaData[2].photoName} price={pizzaData[2].price} />
      <Pizza name={pizzaData[3].name} ingredients={pizzaData[3].ingredients} imgSrc={pizzaData[3].photoName} price={pizzaData[3].price} />
      <Pizza name={pizzaData[4].name} ingredients={pizzaData[4].ingredients} imgSrc={pizzaData[4].photoName} price={pizzaData[4].price} />
      <Pizza name={pizzaData[5].name} ingredients={pizzaData[5].ingredients} imgSrc={pizzaData[5].photoName} price={pizzaData[5].price} />
    </main>
  );
}

// Pizza component
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.imgSrc} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

// Footer component 
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /*   if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
    else alert("Sorry we're closed!"); */

  return <footer className="footer">{new Date().toLocaleTimeString()} We're currently open!</footer>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);