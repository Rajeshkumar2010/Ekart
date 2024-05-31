import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState();

  const navigate = useNavigate();
  const navigator = () => {
    navigate("/product");
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("Carts")) || [];
    setCartItems(storedCartItems);
    // fetchData();
  }, []);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`https://fakestoreapi.com/products`);
  //     setAddKart(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="Card">
      <h2 style={{ fontStyle: "normal", color: "brown" }}>Cart</h2>
      {cartItems.map((item, index) => (
        <ul
          key={index}
          style={{ backgroundColor: "pink", fontStyle: "italic" }}
        >
          <img
            style={{ width: "200px", height: "200px" }}
            src={item.image}
            alt="image"
          />
          <li>{item.title}</li>
          <li>{item.price}</li>
          <li>{item.description}</li>

          <br />

          <button onClick={navigator} type="button">
            Home
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
