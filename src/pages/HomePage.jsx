import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      <main className="flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-600">AWB Travels and Tours</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl">
          Your one-stop solution for travel and visa consultancy. We help you navigate your global journey
          with ease, professionalism, and speed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/consultation"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow transition"
          >
            Book Visa Consultation
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
