import React, { useState } from 'react';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    passportNumber: '',
    travelDate: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment + redirect
    window.location.href = '/consultation-success';
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Visa Consultation Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="passportNumber"
            value={formData.passportNumber}
            onChange={handleChange}
            placeholder="Passport Number"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Pay ₦50,000 and Book Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPage;
