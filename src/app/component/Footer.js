import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🌍 TravelVibe</h2>
          <p className="text-sm text-gray-300">
            Discover top destinations, share your adventures, and plan your next
            journey with ease.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Trip Planner
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Photo Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social & Language */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white">
              🌐
            </a>
            <a href="#" className="hover:text-white">
              📸
            </a>
            <a href="#" className="hover:text-white">
              🐦
            </a>
            <a href="#" className="hover:text-white">
              📘
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-blue-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TravelVibe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
