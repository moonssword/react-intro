//MainPage.jsx
import React, { useEffect, useState } from 'react';
import './MainPage.modules.css';
import { Link } from 'react-router-dom';
import logo from './logo512.png'

function MainPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/main-cards')
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
          {categories.map(category => (
            <Link to={category.link} key={category._id} className="main-page-cards__item">
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;