//ServiceCatalog.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceCatalog.modules.css';
import NavigationMenu from './NavigationMenu';

function ServiceCatalog() {
  const { categoryId } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3001/api/cards/`;
    fetch(url)
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error("There was a problem with fetching cards:", error));
  }, [categoryId]);

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