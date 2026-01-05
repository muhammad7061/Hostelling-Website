import logo from "../assets/hostelling-international-logo.png";
import {
  Facebook,
  Instagram,
  Youtube,
  Music,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#EE7A00] pt-24">
      {/* WHITE NEWSLETTER CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Subscribe To The HI Newsletter
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="email"
            placeholder="Email*"
            className="flex-1 px-6 py-4 rounded-full border outline-none"
          />
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 px-6 py-4 rounded-full border outline-none"
          />
          <button className="bg-[#EE7A00] hover:bg-[#D96F00] transition text-white font-semibold rounded-full px-10">
            SUBSCRIBE
          </button>
        </div>

        <div className="flex items-start gap-3 mb-4 text-sm">
          <input type="checkbox" className="mt-1" />
          <p>
            Yes, I would like to receive news, offers and information from
            Hostelling International by email. (Required)
          </p>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">
          You can unsubscribe at any time by clicking the link in the footer of
          our emails. We use Mailchimp as our marketing platform. By clicking
          below to subscribe, you acknowledge that your information will be
          transferred to Mailchimp for processing.
          <span className="font-semibold">
            {" "}You can learn more about our privacy practices here.
          </span>
        </p>
      </div>

      {/* BOTTOM FOOTER */}
      {/* BOTTOM FOOTER */}
<div className="max-w-6xl mx-auto mt-16 pb-12 px-6 text-white">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
    
    {/* LOGO */}
    <div className="flex justify-center md:justify-start">
      <img src={logo} alt="HI Logo" className="w-24" />
    </div>

    {/* COLUMN 1 */}
    <ul className="space-y-2 text-center md:text-left">
      <li>About HI</li>
      <li>Discover Great Hostels</li>
      <li>YHA – Youth Hostel Association</li>
      <li>Join HI</li>
      <li>Benefits & Discounts</li>
      <li>Hostels & Membership FAQs</li>
    </ul>

    {/* COLUMN 2 */}
    <ul className="space-y-2 text-center md:text-left">
      <li>Jobs & Volunteering</li>
      <li>Advertise & Partner with HI</li>
      <li>Travel Insurance</li>
      <li>Privacy Policy</li>
      <li>Terms of use</li>
      <li>Contact Us</li>
    </ul>

    {/* SOCIAL ICONS */}
    <div className="flex justify-center md:justify-start gap-4">
      <div className="bg-white text-[#EE7A00] p-2 rounded-full">
        <Facebook size={18} />
      </div>
      <div className="bg-white text-[#EE7A00] p-2 rounded-full">
        <Instagram size={18} />
      </div>
      <div className="bg-white text-[#EE7A00] p-2 rounded-full">
        <Youtube size={18} />
      </div>
      <div className="bg-white text-[#EE7A00] p-2 rounded-full">
        <Music size={18} />
      </div>
    </div>

  </div>
</div>

    </footer>
  );
};

export default Footer;
