"use client";
import React, { useState } from "react";

// Dummy destination data — add/modify fields as needed.
const destinationsData = [
  {
    id: 1,
    title: "Sunny Beach",
    region: "Europe",
    country: "Spain",
    type: "Beach",
    image: "/images/beach.jpg",
    description:
      "A beautiful sunny beach with golden sands and crystal-clear waters.",
  },
  {
    id: 2,
    title: "Mountain Retreat",
    region: "Asia",
    country: "Nepal",
    type: "Mountain",
    image: "/images/mountain.webp",
    description:
      "A peaceful mountain retreat surrounded by breathtaking peaks.",
  },
  {
    id: 3,
    title: "City Lights",
    region: "North America",
    country: "USA",
    type: "City",
    image: "/images/usa.jpg",
    description:
      "A vibrant city full of energy, lights, and exciting nightlife.",
  },
  // Add additional destination objects as needed...
];

// Modal component to display destination details.
const Modal = ({ destination, onClose }) => {
  if (!destination) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>
        <image
          src={destination.image}
          alt={destination.title}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-2xl font-bold mt-4">{destination.title}</h2>
        <p className="mt-2">{destination.description}</p>
        <p className="mt-1 text-gray-600">
          <strong>Region:</strong> {destination.region} |{" "}
          <strong>Country:</strong> {destination.country} |{" "}
          <strong>Type:</strong> {destination.type}
        </p>
      </div>
    </div>
  );
};

// Card component for each destination.
const DestinationCard = ({ destination, onClick }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-105"
      onClick={() => onClick(destination)}
    >
      <image
        src={destination.image}
        alt={destination.title}
        className="w-full h-64 object-cover"
      />
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 flex justify-center items-center opacity-0 hover:opacity-100">
        <span className="text-white text-lg font-semibold">View Details</span>
      </div>
    </div>
  );
};

const DestinationGallery = () => {
  // State for filtering by destination type.
  const [filter, setFilter] = useState("All");
  // State for the currently selected destination (for modal view).
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Filter categories (you can add or modify these as needed).
  const categories = ["All", "Beach", "Mountain", "City"];

  // Filter destinations according to the selected category.
  const filteredDestinations =
    filter === "All"
      ? destinationsData
      : destinationsData.filter((destination) => destination.type === filter);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Destination Gallery
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 m-2 rounded-full border transition-all ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid / Masonry Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onClick={setSelectedDestination}
          />
        ))}
      </div>

      {/* Modal for destination details */}
      {selectedDestination && (
        <Modal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </div>
  );
};

export default DestinationGallery;
