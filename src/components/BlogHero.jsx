import React from "react";

const BlogHero = () => {
  return (
    <div className="h-[35.5vh] w-full relative bg-[url('https://res.cloudinary.com/hostelling-internation/image/upload/v1689068121/For%20website%20-%20Erin/Blog/Hero_Image_Blog.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <h1 className="relative z-10 text-[71px] font-bold text-white font-['M_PLUS_1'] sans-serif">
    HI Hostels Blog
  </h1>
    </div>
  );
};

export default BlogHero;
