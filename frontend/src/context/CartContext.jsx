import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getUserId = () => JSON.parse(localStorage.getItem("currentUser"))?.id;
  const [userId, setUserId] = useState(getUserId());
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async (uid) => {
    try {
      const res = await fetch(`http://localhost:8080/cart?userId=${uid}`);
      const data = await res.json();
      const converted = data.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        image: item.product.image,
        price: item.product.price,
        quantity: item.quantity,
      }));
      setCartItems(converted);
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  };

  const syncCartToBackend = async (items = cartItems) => {
    if (userId) {
      const backendPayload = items.map((item) => ({
        product: { id: item.id },
        quantity: item.quantity,
      }));

      try {
        await fetch(`http://localhost:8080/cart?userId=${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(backendPayload),
        });
      } catch (err) {
        console.error("Failed to sync cart to backend", err);
      }
    }
  };

  useEffect(() => {
    const handleLogin = () => {
      const uid = getUserId();
      setUserId(uid);
      if (uid) fetchCart(uid);
    };

    handleLogin(); // on initial mount
    window.addEventListener("user-logged-in", handleLogin);

    return () => {
      window.removeEventListener("user-logged-in", handleLogin);
    };
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      const updated = exists
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
      syncCartToBackend(updated); // 🔁 sync immediately
      return updated;
    });
  };

  const removeFromCart = async (productId) => {
    const updated = cartItems.filter((item) => item.id !== productId);
    setCartItems(updated);
    await fetch(`http://localhost:8080/cart/${productId}?userId=${userId}`, {
      method: "DELETE",
    });
  };

  const clearCart = async () => {
    setCartItems([]);
    if (userId) {
      await fetch(`http://localhost:8080/cart?userId=${userId}`, {
        method: "DELETE",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        setCartItems,
        syncCartToBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
