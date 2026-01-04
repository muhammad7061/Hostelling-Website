import React from "react";
import { Mail, Globe, Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have questions about our hostels, bookings, or partnerships? We’d
            love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h2>

            <div className="flex items-center gap-4">
              <Mail className="text-[#e57200]" />
              <span className="text-gray-700">info@hihostels.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="text-[#e57200]" />
              <span className="text-gray-700">Serving travelers worldwide</span>
            </div>

            <p className="text-gray-500 text-sm">
              Our platform connects travelers with hostels across the globe.
              Reach out anytime — we’re here to help wherever you are.
            </p>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Follow Us
              </h3>

              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-[#e57200] bg-gray-100 hover:text-white
hover:bg-[#1877F2]
 hover:scale-110 hover:shadow-lg transition-all duration-200"
                >
                  <Facebook size={25} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-[#e57200] bg-gray-100 hover:bg-linear-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#515BD4] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-200"  >
                  <Instagram size={25} />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-[#e57200] bg-gray-100 hover:bg-[#FF0000] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-200"
                >
                  <Youtube size={25} />
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-[#e57200] bg-gray-100 hover:bg-black hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-200"
                >
                  <FaTiktok size={23} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Mohamed Ali"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e57200]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="mohamed@example.com"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e57200]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Booking inquiry"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e57200]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e57200] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#e57200] text-white py-3 rounded-lg font-semibold hover:bg-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;