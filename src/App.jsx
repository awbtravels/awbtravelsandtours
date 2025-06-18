import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsultationPage from './pages/ConsultationPage';
import ConsultationSuccess from './pages/ConsultationSuccess';

function App() {
  return (
    <Router>
      <header>
        <h1>AWB Travels and Tours</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/consultation">Book Visa</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/consultation-success" element={<ConsultationSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
