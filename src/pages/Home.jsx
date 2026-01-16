import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Say HI",
    subtitle: "to the world",
    text:
      "From hikes in the wild, lazy days at the beach and urban getaways to discovering a new culture, food or people… we've got experiences for everyone.",
    button: "DISCOVER",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Say HI",
    subtitle: "to adventure",
    text:
      "We have over 2,300 hostels around the world. Find your next unforgettable journey.",
    button: "EXPLORE",
  },
  {
    image: "assets/rest.jpg",
    title: "Say HI",
    subtitle: "to people",
    text:
      "Join a global community of travellers and experience the world together.",
    button: "JOIN NOW",
  },
];
const hostelCards = [
  { title:"Top Danish Destinations You Can't Miss", img: "/assets/image.png", btn: "READ MORE" },
  { title:"Hamburg Auf dem Stintfang, Germany", img: "/assets/image11.jpg", btn: "VISIT" },
  { title:"Say Hi To Belgium, One Hostel At A Time", img: "/assets/image2.jpg", btn: "READ MORE" },
  { title:"HI Lake Louise Alpine Centre, Canada", img: "/assets/image3.jpg", btn: "VISIT" },
  { title:"East To West USA Adventures", img: "/assets/image4.jpg", btn: "READ MORE" },
  { title:"YHA Sydney Central, Australia", img: "/assets/image12.jpg", btn: "VISIT" },
  { title:"Discover Hostels In Italy", img: "/assets/image6.jpg", btn: "READ MORE" },
  { title:"Explore Japan With HI", img: "/assets/image7.jpg", btn: "VISIT" },
  { title: "Backpacking Through Spain", img: "/assets/image8.jpg", btn: "READ MORE" },
  { title: "Mountain Adventures In Switzerland", img: "/assets/image9.jpg", btn: "VISIT" },
  { title: "Budget Travel In Portugal", img: "/assets/image10.jpg", btn: "READ MORE" },
  { title: "Hostelling Across New Zealand", img: "/assets/image11.jpg", btn: "VISIT" },
];

const Home = () => {
  // Hooks for hero slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hooks for search form
  const [searchForm, setSearchForm] = useState({
    country: "",
    city: "",
    feature: "",
  });

  // Hooks for member counter
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  // Hero slider auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animated member counter
  useEffect(() => {
    if (inView) {
      setCount(0); // Always reset to zero when in view
      let start = 0;
      const end = 2630000;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / end), 1);
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / stepTime));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView]);

  const handleChange = (e) => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
  };

  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen mt-6 flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-8xl md:text-7xl font-normal"
          style={{ fontFamily: '"Londrina Sketch", sans-serif' }}>
            {heroSlides[currentSlide].title}
          </h1>
          <h2 className="text-8xl md:text-7xl font-normal text-orange-400 mb-6"
           style={{ fontFamily: '"Londrina Sketch", sans-serif' }}>
            {heroSlides[currentSlide].subtitle}
          </h2>
          <p className="text-lg animate-bounce [animation-delay:1s] md:text-xl mb-8">
            {heroSlides[currentSlide].text}
          </p>
          <Link
            to="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-full font-semibold"
          >
            {heroSlides[currentSlide].button}
          </Link>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl px-7 py-7 w-[90%] max-w-5xl z-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Country */}
            <select
              name="country"
              value={searchForm.country}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-full border focus:outline-none"
            >
              <option value="">Select Country</option>
              <option value="malaysia">Malaysia</option>
              <option value="germany">Germany</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
            </select>
            {/* City */}
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={searchForm.city}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-full border focus:outline-none"
            />
            {/* Features */}
            <select
              name="feature"
              value={searchForm.feature}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-full border focus:outline-none"
            >
              <option value="">Select Features</option>
              <option value="urban">Urban</option>
              <option value="beach">Beach</option>
              <option value="mountain">Mountain</option>
              <option value="family">Family Friendly</option>
            </select>
            {/* Button */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-full"
            >
              SEARCH
            </button>
          </div>
        </form>
      </section>

      {/* SPACER FOR SEARCH BAR */}
      <div className="h-32" />

     {/* HOSTELS & INSPIRATION */}
<section className="pb-8 bg-white">
  {/* TITLE */}
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-orange-500">
    HOSTELS & INSPIRATION
  </h2>

  {/* CENTERED GRID */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-1">
    {hostelCards.map((card, idx) => (
      <div
        key={idx}
        className="hostel-card relative h-[240px] rounded-2xl overflow-hidden shadow-md cursor-pointer group"
      >
        {/* IMAGE */}
        <img
          src={card.img}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* CONTENT */}
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <h3 className="text-lg font-semibold leading-snug mb-3">
            {card.title}
          </h3>

          <Link
            to="#"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-md text-sm font-semibold transition"
          >
            {card.btn}
            <span>→</span>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* MEMBERS COUNTER SECTION */}
<section
  ref={ref}
  className="w-full flex flex-col md:flex-row h-auto md:h-[430px]"
>
  {/* LEFT SIDE */}
  <div className="w-full md:w-1/2 bg-blue-500 flex items-center justify-center">
    <div className="px-1 py-10 md:py-0 md:pl-8 text-white max-w-md text-center md:text-left">
      <h2 className="text-[45px] font-bold mb-4">
        {count.toLocaleString()} Members
      </h2>

      <p className="text-sm md:text-[30px] mb-6 leading-relaxed">
        Join our community of travellers with more than 2.63 million members
        from around the world.
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 transition px-7 py-3 rounded-full font-semibold text-sm">
        BECOME A MEMBER
      </button>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="w-full md:w-1/2 h-64 md:h-full">
    <img
      src="/assets/ourmember.jpg"
      alt="Community"
      className="w-full h-full object-cover"
    />
  </div>
</section>



      {/* OUR MISSION */}
<section className="w-full py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-orange-500 tracking-wide">
      OUR MISSION
    </h2>

    <p className="text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed">
      With more than 100 years of experience, we believe that hostelling is not just about
      having a place to stay; it's about having fun, experiencing different cultures and
      meeting new people, whilst loving and respecting our environment.
    </p>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">

      {/* CARD 1 */}
      <div
        className="group relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-md cursor-pointer
        transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
      >
        <img
          src="assets/image11.jpg"
          alt="Sustainable Hostelling"
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute bottom-5 left-5 right-5 text-white">
          <h3 className="text-lg font-semibold mb-4">
            Sustainable Hostelling
          </h3>

          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-md text-sm font-semibold transition">
            LEARN MORE →
          </button>
        </div>
      </div>

      {/* CARD 2 */}
      <div
        className="group relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-md cursor-pointer
        transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
      >
        <img
          src="assets/rest.jpg"
          alt="Sustainable Travel Tips"
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute bottom-5 left-5 right-5 text-white">
          <h3 className="text-lg font-semibold mb-4">
            Top Tips For Sustainable Travel
          </h3>

          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-md text-sm font-semibold transition">
            LEARN MORE →
          </button>
        </div>
      </div>

      {/* CARD 3 */}
      <div
        className="group relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-md cursor-pointer
        transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
      >
        <img
          src="assets/why.jpg"
          alt="Why Travel With HI"
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* BLUE overlay */}
        <div className="absolute inset-0 bg-blue-900/60"></div>

        <div className="absolute bottom-5 left-5 right-5 text-white">
          <h3 className="text-lg font-semibold mb-4">
            Why Travel With HI?
          </h3>

          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-md text-sm font-semibold transition">
            LEARN MORE →
          </button>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* OUR PARTNERS HERO */}
      <section
        className="relative h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            style={{
              WebkitTextStroke: "2px #f97316",
              color: "transparent",
            }}
          >
            Our partners
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Find out more about partners and join us!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full transition">
            LEARN MORE
          </button>
        </div>
        {/* Scroll to top button (optional) */}
        <button className="absolute bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg">
          ↑
        </button>
      </section>
    </div>
  );
};

export default Home;





