import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css'

import Home from './pages/Home.jsx';
import Garantia from './pages/Garantia.jsx';
import Catalog from './pages/Catalog.jsx';
import MainLayout from './layouts/MainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="garantia" element={<Garantia />} />
            <Route path="catalogo" element={<Catalog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
