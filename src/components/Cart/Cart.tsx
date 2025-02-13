import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext.tsx";
import { CartContainer } from "./Cart.styles.ts";

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});

  // Set initial input values when the cart changes
  useEffect(() => {
    const newInputValues = Object.fromEntries(
      cart.map((item) => [item.id, item.quantity.toString()])
    );
    setInputValues(newInputValues);
  }, [cart]);

  // Update input value immediately as user types
  const handleChange = (id: number, value: string) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));

    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(id, quantity); // Update price immediately
    }
  };

  // Reset to 1 if the input is empty or invalid when focus is lost
  const handleBlur = (id: number, value: string) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(id, quantity);
    } else {
      updateQuantity(id, 1);
    }

    setInputValues((prev) => ({
      ...prev,
      [id]: !isNaN(quantity) && quantity > 0 ? quantity.toString() : "1",
    }));
  };

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : null}

      {cart.map((item) => {
        const quantity = parseInt(inputValues[item.id] || "1", 10);

        return (
          <div key={item.id} className="cart-items">
            <div className="item-details">
              <h3>{item.title}</h3>
              <div className="price-container">
                <span>${item.price.toFixed(2)}</span>
                <span>x {quantity} =</span>
                <b>${(item.price * quantity).toFixed(2)}</b>
              </div>
            </div>
            <input
              type="number"
              value={inputValues[item.id] ?? "1"}
              min="1"
              onChange={(e) => handleChange(item.id, e.target.value)}
              onBlur={(e) => handleBlur(item.id, e.target.value)}
            />
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <h3 className="total-container">
            Total: $
            {cart
              ?.reduce((total, item) => {
                const inputValue = inputValues[item.id]; // Get user-typed value
                const quantity =
                  inputValue === "" ? 1 : parseInt(inputValue, 10) || 1; // If cleared, assume 1
                return total + item.price * quantity;
              }, 0)
              .toFixed(2)}
          </h3>
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
