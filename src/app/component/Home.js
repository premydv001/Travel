import React from 'react'

function Home() {
  return (
    <div className="bg-blue-700 text-white">
      {/* Title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900">Travel Agency</h1>
      </div>

      {/* Divider */}
      <div className="h-2 bg-blue-400"></div>

      {/* Breadcrumb */}
      <div className="bg-blue-800 py-4 text-center text-sm">
        <span className="text-blue-300">
          <a href="#" className="hover:underline">
            Home
          </a>{" "}
          &raquo;{" "}
          <a href="#" className="hover:underline">
            Website Templates
          </a>{" "}
          &raquo;{" "}
          <span className="text-white font-semibold">Travel Agency</span>
        </span>
      </div>
    </div>
  );
}

export default Home