/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';

const CustomSelect = ({ width, options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`${width}`}>
      <div className="relative">
        <button
          className="space-x-2 btn btn-neutral btn-sm"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="listbox-label"
          onClick={toggleDropdown}
        >
          <span className="flex items-center">
            <img
              src={selectedOption.img}
              alt=""
              className="flex-shrink-0 w-5 p-1"
            />
            <span className="block ml-3 truncate">{selectedOption.text}</span>
            <span className="block ml-3 truncate">
              <FaChevronDown />
            </span>
          </span>
        </button>
        {isOpen && (
          <ul
            className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base shadow-lg ronded-full bg-base-100 max-h-56 "
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant={`listbox-option-${selectedOption.value}`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`
                ${
                  selectedOption.value === option.value
                    ? 'bg-indigo-600 text-white'
                    : 'text-white hover:bg-indigo-100 hover:text-indigo-600'
                } relative cursor-pointer select-none py-2 pl-3 pr-9`}
                id={`listbox-option-${option.value}`}
                role="option"
                onClick={() => handleOptionChange(option)}
              >
                <div className="flex items-center">
                  <img
                    src={option.img}
                    alt=""
                    className="flex-shrink-0 w-5 p-1"
                  />
                  <span
                    className={`font-${
                      selectedOption.value === option.value
                        ? 'semibold'
                        : 'normal'
                    } ml-3 block truncate`}
                  >
                    {option.text}
                  </span>
                </div>
                {selectedOption.value === option.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                    <FaCheck />
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
