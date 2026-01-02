import React from "react";
import { Clock, MessageSquare } from "lucide-react";

const BlogCard = ({ data }) => {
  return (
    <div className="max-w-[33.33%] flex flex-col bg-white overflow-hidden px-3 py-4 font-['M_PLUS_1'] sans-serif">
      {/* Image */}
      <div className="relative w-full h-50 overflow-hidden mb-6 group">
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-[#333333] leading-s hover:text-orange-500 cursor-pointer transition-colors">
          {data.title}
        </h2>

        {/* Meta */}
        <div className="flex items-center gap-4 text-[#adadad] text-xs leading-[1.3]">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{data.date}</span>
          </div>

          <div className="flex items-center gap-1">
            <MessageSquare size={16} />
            <span>
              {data.comments === 0
                ? "No Comments"
                : `${data.comments} Comments`}
            </span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-[#5D5D5D] text-base leading-[1.5em]">
          {data.excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
