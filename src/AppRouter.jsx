//AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';
import ServiceCatalog from './ServiceCatalog';
import SubCategoryPage from './SubCategoryPage';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/portal" element={<MainPage />} />
                <Route path="/portal/sc" element={<ServiceCatalog />} />
                <Route path="/portal/sc/:categoryId" element={<SubCategoryPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
