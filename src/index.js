import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './brithday_card/card';
import GiftPage from './Gift/gift';
import './brithday_card/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/birthday-react" element={<Card />} />
        <Route path="/birthday-react/gift" element={<GiftPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
