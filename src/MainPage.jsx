//MainPage.jsx
import React, { useEffect, useState } from 'react';
import './MainPage.modules.css';
import { Link } from 'react-router-dom';
import logo from './logo512.png'

function MainPage() {
  const [cards, setCategories] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3001/api/main-cards`;
    fetch(url)
      .then(response => response.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className='header'>
        <img src={logo} alt="logo" />
        React App
      </div>
      <div className="main-page">
        <div id="cards" className="main-page-cards">
          {cards.map(card => (
            <Link to={card.link} key={card._id} className="main-page-cards__item">
              {card.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;