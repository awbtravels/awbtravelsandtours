import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import Booking from './pages/BookingPage';

function App() {
  return (
    <Router>
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">AWB Travels and Tours</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-sm hover:underline">Home</Link>
          <Link to="/bookings" className="text-sm hover:underline">Book Travel</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Booking />} />
      </Routes>

      <footer className="bg-white mt-auto py-4 text-center text-sm text-gray-600 border-t">
        &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
