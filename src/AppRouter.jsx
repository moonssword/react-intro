//AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import ServiceCatalog from './ServiceCatalog';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/portal/sc" element={<ServiceCatalog />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
