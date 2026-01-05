import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JoinHI = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    country: '',
    membershipType: 'annual'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Membership signup:', formData);
    alert('Thank you for joining HI!');
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-orange-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Join HI
          </h1>
          <p className="text-xl md:text-2xl">
            Become a member of our global travel community
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">
            Membership Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-orange-500 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Save Money
              </h3>
              <p className="text-blue-700">
                Enjoy discounts of up to 10% on hostel stays worldwide.
              </p>
            </div>

            <div className="border-2 border-blue-800 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Global Access
              </h3>
              <p className="text-blue-700">
                Access 2,300+ hostels across 80+ countries.
              </p>
            </div>

            <div className="border-2 border-orange-500 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Exclusive Offers
              </h3>
              <p className="text-blue-700">
                Member-only deals, events, and travel benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Choose Your Membership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-blue-800 rounded-xl p-8 border-4 border-orange-500">
              <h3 className="text-3xl font-bold mb-4">
                Annual Membership
              </h3>
              <div className="text-4xl font-bold text-orange-500 mb-2">$25</div>
              <p className="mb-6">per year</p>
              <ul className="space-y-3">
                <li>✔ 10% hostel discount</li>
                <li>✔ Global access</li>
                <li>✔ Partner offers</li>
                <li>✔ Member updates</li>
              </ul>
            </div>

            <div className="bg-white text-blue-800 rounded-xl p-8 border-4 border-orange-500">
              <h3 className="text-3xl font-bold mb-4">
                Lifetime Membership
              </h3>
              <div className="text-4xl font-bold text-orange-500 mb-2">$250</div>
              <p className="mb-6">one-time payment</p>
              <ul className="space-y-3">
                <li>✔ All annual benefits</li>
                <li>✔ Never expires</li>
                <li>✔ Priority booking</li>
                <li>✔ Lifetime events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
            Become a Member
          </h2>

          <div className="border-2 border-blue-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-blue-800 rounded-md"
                required
              />

              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-blue-800 rounded-md"
                required
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600 transition"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JoinHI;
