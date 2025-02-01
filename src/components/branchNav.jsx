import React, { useEffect, useState } from 'react';

function Navbar({ sections }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false; // Prevents excessive function calls
  
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const middleScreen = window.innerHeight / 3; // Adjusted for better accuracy
          
          sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              
              if (rect.top <= middleScreen && rect.bottom >= middleScreen) {
                setActiveSection(section.id);
              }
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav className="sticky top-[140px] w-full bg-white z-10 max-h-screen overflow-y-auto">
      <ul className="flex md:flex-row flex-nowrap gap-4 justify-between items-center overflow-x-auto md:space-x-6 text-lg font-semibold border-b-2 border-gray-500">
        {sections.map((section) => (
          <li key={section.id} className="my-2 md:my-0">
            <a
              href={`#${section.id}`}
              className={`hover:text-[#173366] text-nowrap smooth-scroll transition-colors duration-300 ${
                activeSection === section.id ? 'text-[#173366] font-bold' : 'text-[#838383]'
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
