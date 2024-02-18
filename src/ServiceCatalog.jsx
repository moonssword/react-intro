//ServiceCatalog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCatalog.modules.css';

function ServiceCatalog() {
  return (
      <div className="sc-page">
        <div className='navigation'>
        <Link to="/" >Main Page</Link> {'>'} Service Catalog
        </div>
        <div id="cards" className="sc-page-cards">
          <a className="sc-page-cards__item" href="/portal/security">Security</a>
          <a className="sc-page-cards__item" href="/portal/report">Report an Issue</a>
        </div>
      </div>
  );
}

export default ServiceCatalog;