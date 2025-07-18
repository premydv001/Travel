"use client";
import React, { useState } from "react";

function Logo() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // You can integrate your actual search logic here
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-2xl font-semibold dark:text-white">
            Hazaribagh
          </span>
        </a>

        {/* Desktop Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center mx-6 flex-grow max-w-md"
        >
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <svg
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z"
              />
            </svg>
          </div>
        </form>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-200 items-center">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:text-blue-600 flex items-center"
            >
              Dropdown
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full bg-white dark:bg-gray-800 shadow-md rounded w-40 z-10">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </li>
          <li>
            <div id="google_translate_element" className="text-sm relative" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900">
          <form onSubmit={handleSearch} className="mt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </form>
          <a href="#" className="block py-2 text-gray-800 dark:text-white">
            Home
          </a>
          <div>
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="w-full text-left py-2 text-gray-800 dark:text-white flex justify-between"
            >
              Dropdown
              <svg
                className="w-4 h-4 ml-2 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="pl-4 mt-1 space-y-1">
                <li>
                  <a
                    href="#"
                    className="block text-gray-600 dark:text-gray-300"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-600 dark:text-gray-300"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-600 dark:text-gray-300"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
            )}
          </div>
          <a href="#" className="block py-2 text-gray-800 dark:text-white">
            Services
          </a>
          <a href="#" className="block py-2 text-gray-800 dark:text-white">
            Pricing
          </a>
          <a href="#" className="block py-2 text-gray-800 dark:text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Logo;
