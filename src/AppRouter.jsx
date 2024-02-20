//AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';
import ServiceCatalog from './ServiceCatalog';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/portal/:categoryId" element={<ServiceCatalog />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
