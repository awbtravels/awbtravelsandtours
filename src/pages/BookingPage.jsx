import React from 'react';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Book Flights & Hotels</h2>

      <div className="max-w-3xl mx-auto grid gap-6">
        <a
          href="https://tp.media/r?marker=640264&trs=426469&p=4114&u=https%3A%2F%2Faviasales.com&campaign_id=100"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">✈️ Book Flights</h3>
          <p>Find the best airfare deals from top agencies. Powered by Aviasales.</p>
        </a>

        <a
          href="https://tp.media/r?marker=640264&trs=426469&p=4114&u=https%3A%2F%2Fhotellook.com&campaign_id=100"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-xl font-semibold text-green-600 mb-2">🏨 Book Hotels</h3>
          <p>Explore thousands of hotels at the best prices globally. Powered by Hotellook.</p>
        </a>
      </div>
    </div>
  );
};

export default BookingPage;
