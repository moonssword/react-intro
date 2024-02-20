// SubCategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceCatalog.modules.css';
import NavigationMenu from './NavigationMenu';

function SubCategoryPage() {
  const { categoryId } = useParams();
  const [cards, setSubCategories] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3001/api/sub-categories/`;
    fetch(url)
      .then(response => response.json())
      .then(setSubCategories)
      .catch(console.error);
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
export default SubCategoryPage;