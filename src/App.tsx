import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { StartupsPage } from './pages/StartupsPage';
import { InvestorsPage } from './pages/InvestorsPage';
import { IncubatorsPage } from './pages/IncubatorsPage';
import { CoursesPage } from './pages/CoursesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/incubators" element={<IncubatorsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;