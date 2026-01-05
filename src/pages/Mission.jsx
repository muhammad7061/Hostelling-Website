import React from "react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl">
            Building bridges between cultures and creating a more peaceful world
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">
            Mission & Values
          </h2>

          <p className="text-xl mb-6 leading-relaxed">
            With more than 100 years of experience, we believe that hostelling is not just about having a place to stay; 
            it's about having fun, experiencing different cultures and meeting new people, whilst loving and respecting our world.
          </p>

          <p className="text-lg leading-relaxed">
            Hostelling International (HI) is a non-profit organisation dedicated to sustainable travel that connects people across borders.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-500">
            Our Story
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Over 100 Years of Hostelling</h3>
              <p className="mb-4 leading-relaxed">
                Since 1909, Hostelling International has been providing affordable accommodation around the world.
              </p>
              <p className="leading-relaxed">
                Today, we operate over 2,300 hostels in more than 80 countries and welcome millions of travellers each year. :contentReference[oaicite:2]{index=2}
              </p>
            </div>

            <div className="bg-orange-500 rounded-lg h-64 flex items-center justify-center text-white text-6xl font-bold">
              100+
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-500">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-semibold mb-4">Cultural Exchange</h3>
              <p className="leading-relaxed">
                We believe in the power of travel to bring people together and foster understanding.
              </p>
            </div>

            <div className="rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-semibold mb-4">Environmental Responsibility</h3>
              <p className="leading-relaxed">
                We support sustainable practices and responsible travel for future generations.
              </p>
            </div>

            <div className="rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-4">Community & Peace</h3>
              <p className="leading-relaxed">
                We work towards a more peaceful world through cultural connections and shared experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Hostelling */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">
            Sustainable Hostelling
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
              <p className="leading-relaxed">
                At HI we support eco-friendly tourism practices and sustainability efforts around the world. :contentReference[oaicite:3]{index=3}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Energy-efficient lighting and appliances</li>
                <li>Waste reduction and recycling programs</li>
                <li>Water conservation measures</li>
                <li>Local food sourcing</li>
              </ul>
            </div>

            <div className="rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">How You Can Help</h3>
              <p className="leading-relaxed">
                As a traveller, support sustainable travel with your choices.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use public transport</li>
                <li>Reduce water and energy use</li>
                <li>Support local communities</li>
                <li>Respect cultural practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Become part of a global community working towards a better world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
            >
              Become a Member
            </Link>

            <Link
              to="/blog"
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mission;
