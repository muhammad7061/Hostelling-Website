import React from "react";
import { Link } from "react-router-dom";

const Groups = () => {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Groups</h1>
          <p className="text-xl md:text-2xl">
            Special rates and services for group travel
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">
            Group Bookings
          </h2>
          <p className="text-xl mb-6 leading-relaxed">
            Planning a trip for a school, organization, or large group? HI hostels offer special
            rates and services for groups, making it easy and affordable to travel together.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-500">
            Group Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Special Rates",
                text: "Groups of 10 or more receive discounted rates. The larger your group, the better the savings.",
              },
              {
                title: "Dedicated Support",
                text: "Our group booking team helps you plan your stay and ensures everything runs smoothly.",
              },
              {
                title: "Flexible Options",
                text: "Choose from shared dormitories, private rooms, or a mix to suit your group size.",
              },
              {
                title: "Custom Packages",
                text: "Create packages including meals, activities, and tours tailored to your group.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-orange-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Group?
          </h2>
          <p className="text-xl mb-8">
            Contact our group booking team to get a customized quote.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
          >
            Contact Group Booking
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Groups;
