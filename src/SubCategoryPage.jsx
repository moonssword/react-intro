// SubCategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceCatalog.modules.css';
import NavigationMenu from './NavigationMenu';

function SubCategoryPage() {
  const { categoryId } = useParams();
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3001/api/cards/category/${categoryId}`;
    fetch(url)
      .then(response => response.json())
      .then(setSubCategories)
      .catch(console.error);
  }, [categoryId]);

  return (
    <div className="sc-page">
      <NavigationMenu subCategories={subCategories} />
      <div className="sc-content">
        <div className='navigation'>
          <Link to="/portal">Main Page</Link> {'>'} Создать запрос
        </div>
        <div id="cards" className="sc-page-cards">
          {subCategories.map(card => (
            <Link to={card.categories._id} key={card._id} className="sc-page-cards__item">
              {card.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubCategoryPage;