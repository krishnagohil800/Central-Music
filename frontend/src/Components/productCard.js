import { useState, useEffect } from "react";

const ProductCard = ({ name, price, images, description, onButtonClick, showRemoveButton, showRemoveButtonList, moveToWishlist }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [wishlist, setWishlist] = useState(false);

  // Load wishlist status from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist.some((item) => item.name === name));
  }, [name]);

  const handleWishlistToggle = () => {
    if (moveToWishlist) {
      moveToWishlist(); // ✅ Move item from cart to wishlist
    } else {
      let storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (wishlist) {
        storedWishlist = storedWishlist.filter((item) => item.name !== name);
      } else {
        storedWishlist.push({ name, price, images, description });
      }

      localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
      setWishlist(!wishlist);
    }
  };

  return (
    <div className=" ml-6 border p-4 rounded-3xl shadow-lg hover:shadow-xl transition bg-white mt-20 w-96 ">
      <img src={currentImage} alt={name} className="w-52 h-72 object-cover rounded-3xl ml-12" />
      <div className="flex gap-2 mt-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className="w-10 h-10 object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-blue-500"
            onClick={() => setCurrentImage(img)}
          />
        ))}
      </div>

      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-2xl font-bold text-blue-500 mt-2">${price}</p>

      <div className="mt-5 flex items-center gap-4">
        {/* Add to Cart / Remove from Cart Button */}
        <button
          className="bg-gray-300 hover:bg-black text-black hover:text-white font-bold py-3 px-8 rounded-xl flex-grow transition-all shadow-lg"
          onClick={onButtonClick}
        >
          {showRemoveButton ? "❌ Remove from Cart" : "🛒 Add to Cart"}
        </button>

        {/* Wishlist Button */}
        <button
          className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all shadow-lg ${
            wishlist ? "text-white bg-red-500" : "bg-gray-300 text-gray-900"
          }`}
          onClick={handleWishlistToggle}
        >
          {wishlist ? "❤" : "🤍"}
        </button>
      </div>

      <button className="mt-3 bg-black hover:bg-gray-100 text-white hover:text-black font-bold py-3 px-6 rounded-xl w-full transition-all shadow-lg">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
