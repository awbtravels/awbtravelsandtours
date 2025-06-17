// src/App.jsx import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Home from './pages/HomePage';

function App() { return ( <Router> <Routes> <Route path="/" element={<Home />} /> </Routes> </Router> ); }

export default App;

// src/pages/HomePage.jsx import React from 'react';

const HomePage = () => { return ( <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800"> <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center"> <h1 className="text-2xl font-bold text-blue-600">AWB Travels and Tours</h1> <nav className="space-x-4"> <a href="#services" className="text-sm hover:underline">Services</a> <a href="#contact" className="text-sm hover:underline">Contact</a> </nav> </header>

<main className="flex flex-col items-center justify-center text-center px-4 py-24">
    <h2 className="text-4xl font-bold mb-4">Welcome to AWB Travels and Tours</h2>
    <p className="text-lg mb-6 max-w-2xl">
      Your one-stop solution for travel and visa consultancy. We help you navigate your global journey with ease, professionalism, and trust.
    </p>
    <a
      href="#services"
      className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition"
    >
      Explore Services
    </a>
  </main>

  <footer className="bg-white mt-auto py-4 text-center text-sm text-gray-600 border-t">
    &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
  </footer>
</div>

); };

export default HomePage;
