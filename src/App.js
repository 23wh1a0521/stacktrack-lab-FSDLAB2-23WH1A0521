import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<Home />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>

      {/* TODO: Replace this placeholder with Routes */}
    </BrowserRouter>
  );
}

export default App;
