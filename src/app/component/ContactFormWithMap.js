"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

// Hazaribagh Coordinates
const position = [23.9952, 85.3616];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters"),
});

function ContactFormWithMap() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  // Dynamically load Leaflet only on client
  const [Map, setMap] = useState(null);
  useEffect(() => {
    (async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      await import("leaflet-defaulticon-compatibility");
      await import(
        "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
      );
      const { MapContainer, TileLayer, Marker, Popup } = await import(
        "react-leaflet"
      );

      setMap(() => () => (
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-72 w-full md:h-full rounded-xl shadow-md z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>We are located in Hazaribagh, Jharkhand 🏢</Popup>
          </Marker>
        </MapContainer>
      ));
    })();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-4 md:p-10 bg-gray-100 dark:bg-gray-900">
      <Toaster position="top-right" />

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              {...register("message")}
              rows="4"
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-1/2">
        {Map ? (
          <Map />
        ) : (
          <div className="h-72 w-full bg-gray-300 rounded animate-pulse" />
        )}
      </div>
    </div>
  );
}

export default ContactFormWithMap;
