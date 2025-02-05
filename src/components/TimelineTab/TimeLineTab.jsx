import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Tab2024 from "@/assets/About/2024.webp";
import Tab2023 from "@/assets/About/2024.webp";
import Tab2022 from "@/assets/About/2024.webp";
import Tab2021 from "@/assets/About/2024.webp";
import Tab2020 from "@/assets/About/2024.webp";
import Tab2019 from "@/assets/About/2024.webp";
import Tab2018 from "@/assets/About/2024.webp";
import Tab2015 from "@/assets/About/2024.webp";
import Tab2011 from "@/assets/About/2024.webp";
import Tab1995 from "@/assets/About/2024.webp";
import Tab1985 from "@/assets/About/2024.webp";

const timelineData = [
  {
    year: "2024",
    title: "Sudha Women Care And Fertility Centre",
    description: "Was Inaugurated At Thiruvanmamulai Nagercoil And Ramanathapuram.",
    img: Tab2024
  },
  {
    year: "2023",
    title: "Recent Achievement",
    description: "Example description for 2023",
    img: Tab2023
  },
  {
    year: "2022",
    title: "Major Milestone",
    description: "Example description for 2022",
    img: Tab2022
  },
  {
    year: "2021",
    title: "Expansion Phase",
    description: "Example description for 2021",
    img: Tab2021
  },
  {
    year: "2020",
    title: "New Development",
    description: "Example description for 2020",
    img: Tab2020
  },
  {
    year: "2019",
    title: "Growth Period",
    description: "Example description for 2019",
    img: Tab2019
  },
  {
    year: "2018",
    title: "Achievement",
    description: "Example description for 2018",
    img: Tab2018
  },
  {
    year: "2015",
    title: "Milestone",
    description: "Example description for 2015",
    img: Tab2015
  },
  {
    year: "2011",
    title: "Early Days",
    description: "Example description for 2011",
    img: Tab2011
  },
  {
    year: "1995",
    title: "Foundation",
    description: "Example description for 1995",
    img: Tab1995
  },
  {
    year: "1985",
    title: "Beginning",
    description: "Example description for 1985",
    img: Tab1985
  }
];

const TimelineTabs = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [scrollPosition, setScrollPosition] = useState(0);
  const timelineContainerRef = useRef(null);

  useEffect(() => {
    const timelineContainer = timelineContainerRef.current;
    if (timelineContainer) {
      const containerWidth = timelineContainer.offsetWidth;
      const scrollWidth = timelineContainer.scrollWidth;
      setScrollPosition(timelineContainer.scrollLeft);
    }
  }, [selectedYear]);

  const handleScroll = (direction) => {
    const timelineContainer = timelineContainerRef.current;
    const scrollAmount = 200;
    if (direction === 'left') {
      timelineContainer.scrollLeft -= scrollAmount;
    } else {
      timelineContainer.scrollLeft += scrollAmount;
    }
    setScrollPosition(timelineContainer.scrollLeft);
  };

  const shouldShowScrollButtons = () => {
    const timelineContainer = timelineContainerRef.current;
    if (timelineContainer) {
      const containerWidth = timelineContainer.offsetWidth;
      const scrollWidth = timelineContainer.scrollWidth;
      return scrollWidth > containerWidth;
    }
    return false;
  };

  return (
    <div className="w-full relative">
      {/* Image section */}
      <div className="mb-8">
        <Image
          src={timelineData.find(item => item.year === selectedYear).img}
          alt={timelineData.find(item => item.year === selectedYear).title}
          className="w-full  object-cover"
          width={1920}
          height={1080}
        />
      </div>

  {/* Content section */}
  <div className="mt-8 text-center">
        {timelineData.find(item => item.year === selectedYear) && (
          <div className="space-y-2">
            <h3 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              {timelineData.find(item => item.year === selectedYear).title}
            </h3>
            <p className="text-gray-600">
              {timelineData.find(item => item.year === selectedYear).description}
            </p>
          </div>
        )}
      </div>


      {/* Timeline container */}
      <div
        ref={timelineContainerRef}
        id="timeline-container"
        className="overflow-x-auto flex gap-4 px-12 py-4 scroll-smooth no-scrollbar"
      >
        {timelineData.map((item) => (
          <button
            key={item.year}
            onClick={() => setSelectedYear(item.year)}
            className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedYear === item.year
                ? 'bg-blue-900 text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>

    

    
    </div>
  );
};

export default TimelineTabs;