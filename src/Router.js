import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// jihyun's 컴포넌트
import LoginJiHyun from './pages/Login/Login';
import MainJiHyun from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginJiHyun />} />
        <Route path="/main" element={<MainJiHyun />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
