import React, { useState, useEffect, useRef } from "react";
import { GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  const handleOptionClick = (option) => {
    handleClick();
    onChange(option);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if(divRef.current && !divRef.current.contains(event.target)){
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    }
  }, [])

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divRef} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronLeft className={`text-lg transition-transform duration-50 ${isOpen ? "-rotate-90" : ""}`} />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
