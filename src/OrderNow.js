import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [residentialDetails, setResidentialDetails] = useState({
    address: "",
    city: "",
    postalCode: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("Carts")) || [];
    setCartItems(storedCartItems);
    calculateTotalPrice(storedCartItems);
  }, []);

  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCartItems = [...cartItems];
    updatedCartItems[index][name] = value;
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const handleDeleteItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const handlePlaceOrder = () => {
    console.log("Residential Details:", residentialDetails);
    setOrderPlaced(true);
    setCartItems([]);
    localStorage.removeItem("Carts");
  };

  return (
    <div className="Cart">
      <h2 style={{ fontStyle: "normal", color: "brown" }}>Cart</h2>
      <div>
        {cartItems.map((item, index) => (
          <div key={index} className="CartItem">
            <img
              style={{ height: "200px", width: "200px" }}
              src={item.image}
              alt="Product"
            />
            <div>
              <p>{item.title}</p>
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                min="1"
                onChange={(e) => handleInputChange(e, index)}
              />
              <p>${item.price * item.quantity}</p>
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="TotalPrice">
        <p>Total Price: ${totalPrice}</p>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
      {orderPlaced && (
        <div className="OrderPlacedAnimation">
          <p>Order Placed Successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
