import React, { useState } from 'react';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', country: '', date: '', time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const paystackURL = `https://paystack.com/pay/YOUR_PAYMENT_SLUG?amount=5000000&email=${formData.email}&metadata.full_name=${formData.fullName}&metadata.phone=${formData.phone}&metadata.country=${formData.country}&metadata.date=${formData.date}&metadata.time=${formData.time}&callback_url=https://www.awbtravelsandtours.com/consultation-success`;
    window.location.href = paystackURL;
  };

  return (
    <div className="min-h-screen bg-white text-center px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Book a Visa Consultation Appointment</h2>
      <div className="max-w-md mx-auto space-y-4">
        <input name="fullName" placeholder="Full Name" className="w-full p-2 border" onChange={handleChange} />
        <input name="email" placeholder="Email" className="w-full p-2 border" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" className="w-full p-2 border" onChange={handleChange} />
        <input name="country" placeholder="Country of Interest" className="w-full p-2 border" onChange={handleChange} />
        <input type="date" name="date" className="w-full p-2 border" onChange={handleChange} />
        <input type="time" name="time" min="09:00" max="17:00" className="w-full p-2 border" onChange={handleChange} />
        <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded">Pay ₦50,000 & Book</button>
      </div>
    </div>
  );
};

export default ConsultationPage;