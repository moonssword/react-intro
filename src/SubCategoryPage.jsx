// SubCategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceCatalog.modules.css';
import NavigationMenu from './NavigationMenu';

function SubCategoryPage() {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/sub-categories`)
      .then(response => response.json())
      .then(setSubCategories)
      .catch(console.error);
  }, []);

  return (
    <div className="sc-page">
      <NavigationMenu />
      <div className="sc-content">
        <div className='navigation'>
          <Link to="/">Main Page</Link> {'>'} Создать запрос
        </div>
        <div id="cards" className="sc-page-cards">
          {subCategories.map(subCategory => (
            <Link to={subCategory.link} key={subCategory._id} className="sc-page-cards__item">
              {subCategory.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SubCategoryPage;