//MainPage.jsx
import React from 'react';
import './MainPage.modules.css';
import logo from './logo512.png'

function MainPage() {
  return (
    <div>
      <div className='header'>
        <img src={logo} alt="logo" />
      </div>
      <div className="main-page">
        <div id="cards" className="main-page-cards">
          <a className="main-page-cards__item" href="/portal/sc">Service Catalog</a>
          <a className="main-page-cards__item" href="/portal/myTickets">My Tickets</a>
          <a className="main-page-cards__item" href="/portal/myTasks">My Tasks</a>
          <a className="main-page-cards__item" href="/portal/kb">Knowledge Base</a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;