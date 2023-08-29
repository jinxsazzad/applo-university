import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 sm:py-16">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-base sm:text-lg text-center text-gray-600 mb-4 sm:mb-8">
              Stay updated with our latest news, events, and promotions.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <input
              type="email"
              className="w-full sm:w-60 py-3 px-4 mb-4 sm:mb-0 placeholder-gray-400 focus:outline-none rounded-md"
              placeholder="Enter your email address"
            />
            <button className="bg-primary text-white py-3 px-6 rounded-md hover:bg-secondary focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
