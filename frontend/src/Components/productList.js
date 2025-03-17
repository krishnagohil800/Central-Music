import { useState } from "react";
import ProductCard from "./productCard";
import products from "../Components/products";

const ProductList = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Save to localStorage
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-black">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          images={product.images}
          description={product.description}
          onButtonClick={() => handleAddToCart(product)}
          showRemoveButton={false} // ✅ Show only "Add to Cart"
        />
      ))}
    </div>
  );
};

export default ProductList;
