import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import Consultation from './pages/ConsultationPage';
import ConsultationSuccess from './pages/ConsultationSuccess';

function App() {
  return (
    <Router>
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">AWB Travels and Tours</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-sm hover:underline">Home</Link>
          <Link to="/consultation" className="text-sm hover:underline">Book Visa</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/consultation-success" element={<ConsultationSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
