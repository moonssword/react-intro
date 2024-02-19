// NavigationMenu.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.modules.css';

function NavigationMenu() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/api/cards')
        .then(response => response.json())
        .then(data => setCards(data))
        .catch(error => console.error("There was a problem with fetching cards:", error));
    }, []);

    return (
        <div className="navigation-menu">
          {cards.map(card => (
            <div className="navigation-menu-element" key={card._id}>
              <Link to={card.link}>
                {card.title}
              </Link>
            </div>
          ))}
        </div>
    );
}

export default NavigationMenu;
