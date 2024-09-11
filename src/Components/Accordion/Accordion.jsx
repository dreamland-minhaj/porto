import React, { useState } from "react";
import { FaChevronDown, FaChevronUp , FaRocketchat  } from "react-icons/fa"; // Import any icons
import { MdDiamond } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";

const Accordion = () => {
  // Accordion states (first accordion is open by default)
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample accordion data
  const accordionData = [
    {
      id: 1,
      icon: MdDiamond,
      title: "Creative Websites",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blanorem ipsum dolor sit amet, consecte.",
    },
    {
      id: 2,
      icon : FaRocketchat ,
      title: "Contact Forms",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blanorem ipsum dolor sit amet, consecte.",
    },
    {
      id: 3,
      icon : CiGrid41,
      title: "Portfolio Pages",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blanorem ipsum dolor sit amet, consecte.",
    },
  ];

  // Toggle function for accordions
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index); // Close if already open, otherwise open
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {accordionData.map((item, index) => (
        <div key={item.id} className="mb-2 border rounded-lg">
          {/* Accordion Header */}
          <div
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between p-4 cursor-pointer bg-gray-100"
          >
            <div className="flex items-center">
              {/* Icon on the left side */}
              {index === activeIndex ? (
                <item.icon className="mr-2 text-[#222529]" />
              ) : (
                <item.icon className="mr-2" />
              )}
              <h2 className="font-bold tracking-tighter text-[17px] text-[#222529]">{item.title}</h2>
            </div>
          </div>

          {/* Accordion Content */}
          {index === activeIndex && (
            <div className="p-4 bg-white">
              <p className="font-sans text-[14px] text-[#777777]">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
