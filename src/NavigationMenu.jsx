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
        <div>
            <div className='navigation-menu-title'>Service Catalog</div>
            <div className="navigation-menu">
                {cards.map(card => (
                    <div className="navigation-menu-item-container" key={card._id}>
                        <div className="navigation-menu-element">
                            <Link to={card.link}>
                                {card.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavigationMenu;
