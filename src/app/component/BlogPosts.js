"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const blogs = [
  {
    id: 1,
    title: "🏔 Explore the Mountains",
    image: "/images/mountain.webp",
    content: `# Discover the Mountains

Welcome to the breathtaking world of towering peaks and hidden trails.

## Why Visit?

- Fresh air and serenity
- Scenic hikes
- Unique wildlife

**Pack your boots and let's go!**`,
  },
  {
    id: 2,
    title: "🏖 Relax on the Beach",
    image: "/images/beach.jpg",
    content: `# Beachside Bliss

Unwind on golden sands and swim in crystal-clear waters.

## Essentials

- Sunscreen
- Hat
- Flip-flops

![Beach](https://source.unsplash.com/800x400/?beach)`,
  },
  {
    id: 3,
    title: "Grand Canyon, USA 🇺🇸",
    image: "/images/usa.jpg",
    content: `Discover the stunning natural wonder of the Grand Canyon. With layered red rock cliffs, panoramic views, and hiking trails, it's a symbol of American wilderness.`,
  },
];

// CSS classes for flip animation (you need to add these to your global CSS or tailwind config):
// .perspective { perspective: 1000px; }
// .preserve-3d { transform-style: preserve-3d; }
// .backface-hidden { backface-visibility: hidden; }
// .rotate-y-180 { transform: rotateY(180deg); }
// .hover-rotate-y-45:hover { transform: rotateY(45deg); }

const BlogCard = ({ blog, onClick }) => (
  <div
    className="w-full sm:w-[300px] h-[380px] cursor-pointer perspective"
    onClick={() => onClick(blog)}
  >
    <div className="relative w-full h-full transition-transform duration-700 preserve-3d hover:rotate-y-45">
      {/* Front */}
      <div className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Back */}
      <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center">
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <span className="text-blue-500 underline">Read Blog</span>
      </div>
    </div>
  </div>
);

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-4 text-xl text-gray-500 hover:text-black"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-60 object-cover rounded mb-4"
        />
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold mb-3" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-2 text-gray-700" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 space-y-1 mb-2" {...props} />
            ),
            li: ({ node, ...props }) => <li {...props} />,
            img: ({ node, ...props }) => (
              <img className="rounded-md my-4 w-full" alt="" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="font-semibold text-black" {...props} />
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>

        {/* Share Buttons */}
        <div className="mt-6 flex space-x-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              blog.title
            )}`}
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            rel="noreferrer"
          >
            Share on Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://yourblog.com/blog/${blog.id}`}
            target="_blank"
            className="bg-blue-700 text-white px-4 py-2 rounded"
            rel="noreferrer"
          >
            Share on Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">📚 Travel Blog</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onClick={setSelectedBlog} />
        ))}
      </div>

      <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </section>
  );
};

export default BlogSection;
