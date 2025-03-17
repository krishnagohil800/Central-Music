import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img1 from "./cdn/classical2.png"; // Default image
import img2 from "./cdn/classical.png"; // Side angle
import img3 from "./cdn/classical3.png"; // Back angle
import img4 from "./cdn/classical4.png";

const ProductCard = () => {
  const [rating, setRating] = useState(0); // Store selected rating
  const [wishlist, setWishlist] = useState(false); // Wishlist state
  const [currentIndex, setCurrentIndex] = useState(0); // Track displayed image index

  const images = [img1, img2, img3, img4]; // Store all angles

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative lg:relative w-80 lg:w-96 p-6 lg:p-6 lg:ml-[3vw] lg:mt-[3vw] bg-white/20 lg:bg-white/30 backdrop-blur-lg lg:backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-2xl lg:shadow-3xl border border-gray-200 lg:border-gray-300 transition-transform">
      
      {/* Image Container with Navigation Buttons */}
      <div className="relative flex justify-center items-center">
        <button 
          onClick={prevImage} 
          className="absolute left-0 bg-gray-300 hover:bg-gray-400 text-black p-2 rounded-full shadow-md transition"
        >
          <FaArrowLeft/>
        </button>
        
        <img
          src={images[currentIndex]}
          alt="Classical Guitar"
          className="w-64 lg:w-72 h-44 lg:h-48 object-contain transition-transform duration-300 hover:scale-110"
        />
        
        <button 
          onClick={nextImage} 
          className="absolute right-0 bg-gray-300 hover:bg-gray-400 text-black p-2 rounded-full shadow-md transition"
        >
          <FaArrowRight/>
        </button>
      </div>

      {/* Product Title */}
      <h2 className="text-lg lg:text-xl font-semibold lg:font-bold text-gray-900 leading-tight lg:leading-snug mt-4 lg:mt-5">
        Classical Guitar
      </h2>

      {/* ⭐ Star Rating Selector */}
      <div className="flex lg:flex items-center lg:items-center my-2 lg:my-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
          >
            ★
          </span>
          
        ))}
        <p className="text-sm text-gray-600 ml-2">({rating} stars rating)</p>
      </div>

      {/* Pricing */}
      <div className="mt-2">
        <p className="text-2xl font-extrabold text-black">
          ₹6,999
        </p>
      </div>

      {/* Buttons Container */}
      <div className="mt-5 flex items-center gap-4">
        {/* Add to Cart Button */}
        <button className="bg-gray-100 hover:bg-gray-800 text-black hover:text-white font-bold py-3 px-8 rounded-xl flex-grow transition-all shadow-lg">
          🛒 Add to Cart
        </button>

        {/* Wishlist Button */}
        <button
          className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all shadow-lg ${
            wishlist ? "text-white bg-red-500" : "bg-gray-300 text-gray-900"
          }`}
          onClick={() => setWishlist(!wishlist)}
        >
          {wishlist ? "❤" : "🤍"}
        </button>
      </div>

      {/* Buy Now Button */}
      <button className="mt-3 bg-black hover:bg-gray-100 text-white hover:text-black font-bold py-3 px-6 rounded-xl w-full transition-all shadow-lg">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;