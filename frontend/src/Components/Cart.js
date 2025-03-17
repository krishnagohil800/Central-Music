import { useState, useEffect } from "react";
import ProductCard from "./productCard";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Remove from cart
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Move item from Cart to Wishlist
  const handleMoveToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(product); // ✅ Add to wishlist
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    handleRemoveFromCart(product.id); // ✅ Remove from cart
  };

  return (
    <div className="p-4 bg-white mt-20">
      {/* <h2 className="text-3xl font-bold">Shopping Cart</h2> */}
      {cart.length === 0 ? (
        <p className=" text-4xl  font-bold text-grey-200 text-center mt-48 ">Oops! you got no items in your cart</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cart.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              images={item.images}
              description={item.description}
              onButtonClick={() => handleRemoveFromCart(item.id)} // ✅ Remove from cart
              showRemoveButton={true} // ✅ Show remove from cart button
              showRemoveButtonList={false} // ❌ Hide remove from wishlist
              moveToWishlist={() => handleMoveToWishlist(item)} // ✅ Move to wishlist
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
