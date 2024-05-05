// components/subscribe/Subscribe.tsx
"use client";

import React, { useState } from 'react';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(true);  // New state to manage visibility

  const handleSubmit = async () => {
    console.log("Subscribed with:", email);
    // Assuming you have an API endpoint or external service setup
    try {
      const response = await fetch('https://api.resend.com/subscribe', {  // Replace with the actual endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log('Response from Resend:', data);  // Log or handle the response as needed

      setIsVisible(false);  // Hide the subscription form
    } catch (error) {
      console.error('Failed to subscribe:', error);
      // Optionally handle errors, e.g., show an error message
    }
  };

  if (!isVisible) {
    return null;  // Do not render anything if not visible
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <div className="relative w-60 h-36 p-5 bg-white rounded-md shadow-xl flex flex-col items-center justify-between" style={{ boxShadow: '0px 0px 60px 5px rgba(0, 0, 0, 0.4)' }}>
        <p className="text-lg font-bold tracking-widest text-gray-800">SUBSCRIBE</p>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail"
          className="w-full border-none border-b-2 border-gray-300 py-2 px-10 bg-transparent transition-all outline-none focus:border-blue-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          className="absolute bottom-0 right-0 mb-[-20px] mr-[-10px] bg-blue-800 text-white py-2 px-5 rounded-l-full cursor-pointer shadow-lg transition-all hover:bg-blue-700"
          onClick={handleSubmit}
          style={{ boxShadow: '-5px 6px 20px 0px rgba(26, 26, 26, 0.4)' }}
        >
          SUBMIT
        </div>
        <div className="absolute -right-2.5 bottom-4 w-0 h-0 border-l-transparent border-r-10 border-b-10 border-b-blue-900" style={{ borderRightColor: 'transparent' }}></div>
      </div>
    </div>
  );
};

export default Subscribe;
