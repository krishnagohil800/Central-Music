import { useState, useEffect } from "react";
import ProductCard from "./productCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Remove from wishlist
  const handleRemoveFromWishlist = (productName) => {
    const updatedWishlist = wishlist.filter((item) => item.name !== productName);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Move item from Wishlist to Cart
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product); // ✅ Add to cart
    localStorage.setItem("cart", JSON.stringify(cart));

    handleRemoveFromWishlist(product.name); // ✅ Remove from wishlist
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <ProductCard
              key={item.name}
              name={item.name}
              price={item.price}
              images={item.images}
              description={item.description}
              onButtonClick={() => handleAddToCart(item)} // ✅ Move to cart
              showRemoveButton={false} // ❌ Hide remove from cart button
              showRemoveButtonList={true} // ✅ Show remove from wishlist
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
