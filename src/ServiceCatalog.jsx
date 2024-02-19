//ServiceCatalog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServiceCatalog.modules.css';
import NavigationMenu from './NavigationMenu';

function ServiceCatalog() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/cards')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error("There was a problem with fetching cards:", error));
  }, []);

  return (
    <div className="sc-page">
      <NavigationMenu cards={cards} />
      <div className="sc-content">
        <div className='navigation'>
          <Link to="/">Main Page</Link> {'>'} Создать запрос
        </div>
        <div id="cards" className="sc-page-cards">
          {cards.map(card => (
            <Link to={card.link} key={card._id} className="sc-page-cards__item">
              {card.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCatalog;