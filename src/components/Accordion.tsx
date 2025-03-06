'use client'

// import { PromedikGreen, PromedikWhite } from "@/app/assets/colors";
import { useState } from "react";

const Accordion = ({ items }: any) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full relative">
      {items.map((item: any, index: any) => (
        <div key={index} className="relative mb-2">
          {/* Header - Background changes here */}
          <div
            style={{
              border: `1px solid`,
              borderColor: activeIndex === index ? '#45959B' : "#45959B",
              backgroundColor: activeIndex === index ? '#45959B' : "#FFFFFF",
              color: activeIndex === index ? '#FFFFFF' : "#45959B"
            }}
            className="border rounded-lg p-4 flex justify-between items-center cursor-pointer transition-all"
            onClick={() => toggleItem(index)}
          >
            <span
              className="font-medium text-left flex-10"
              style={{
                color: activeIndex === index ? '#FFFFFF' : "#45959B"
              }}
            >
              {item.title}
            </span>
            <div className="flex-1 flex justify-end">
              <svg
                style={{
                  color: activeIndex === index ? '#FFFFFF' : "#45959B"
                }}
                className={`w-5 h-5 transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 14.5l-5-5 1.5-1.5L12 11.5l3.5-3.5 1.5 1.5z" />
              </svg>
            </div>
            {/* Custom SVG for Arrow */}
          </div>

          {/* Content - Moves outside the parent */}
          <div
            className={`transition-all overflow-hidden duration-300 ${activeIndex === index ? "max-h-[500px] " : "max-h-0 "
              }`}
          >
            <div className="p-4 bg-white mt-1 text-start">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
