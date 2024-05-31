import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Addcart = () => {
  const [addKart, setAddKart] = useState([{}]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(addKart.price);

  const location = useLocation();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${location.state.id}`
      );
      setAddKart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleOrderNow = (id) => {
    // Redirect to Order Now page
    // navigate("/Quanties", { state: { order: id } });
    navigate(`/Quanties/${id}`);
  };

  const handleAddToCart = (id) => {
    // Implement add to cart functionality here
    console.log("Product added to cart:", addKart);
    // You can redirect to the cart page or display a success message
  };

  // const handleQuantityChange = (event) => {
  //   setQuantity(event.target.value);
  // };
  function handleClick() {
    const values = JSON.parse(localStorage.getItem("Carts") || "[]");

    values.push({
      image: addKart.image,
      title: addKart.title,
      description: addKart.description,
      price: quantity === 1 ? addKart.price : price,
      quantity: quantity,
    });
    // console.log(Raju);
    localStorage.setItem("Carts", JSON.stringify(values));
    navigate("/OrderNow");
  }
  const handleQuantityChange = (event) => {
    const selectedQuantity = parseInt(event.target.value);
    setQuantity(selectedQuantity);
    setPrice(selectedQuantity * addKart.price);
  };
  // const values = JSON.parse(localStorage.getItem("Carts") || "[]");
  // const existingUser = values.find((user) => user.title === inputData.title);
  // if (existingUser) {
  //   toast.error("Email already exists");
  //   return;
  // }
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{
          maxWidth: 800,
          width: "90%",
          my: 4,
          border: "2px solid #64b5f6",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          alt="Product Image"
          height="250"
          image={addKart.image}
          style={{
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {addKart.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {addKart.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button
            onClick={() => handleOrderNow(addKart.id)}
            variant="outlined"
            size="small"
          >
            Order Now
          </Button>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" mr={2}>
              M.R.P ${addKart.price * quantity}
            </Typography>
            <FormControl sx={{ minWidth: 80, flexGrow: 1 }}>
              lo <InputLabel id="quantity-label">Quantity</InputLabel>
              <Select
                labelId="quantity-label"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                // onChange={handleQuantityChange1}
                native // Use native select to prevent overflow
              >
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            onClick={() => handleClick(addKart.id)}
            variant="contained"
            size="small"
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Addcart;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// // import "./product.css";
// // import { useNavigate } from 'react-router-dom';

// function Addcart() {
//   // const values = JSON.parse(localStorage.getItem("values")) || [];

//   const [cart, setCart] = useState([]);
//   const [count, setCount] = useState(1);
//   // const [add, setAdd] = useState("");
//   const location = useLocation();

//   // const [Id, setId] = useState([]);
//   // const navigate = useNavigate();
//   // let {id} =  useParams()
//   // console.log(param,"aa")
//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${location.state.id}`)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data, "kkk");
//         setCart([data]);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   // console.log(values);

//   //   const handleClick = (id) => {
//   //     navigate(/addtocart/${id});
//   // }

//   const handleQuantityInc = () => {
//     setCount(count + 1);
//   };

//   const handleQuantityDec = () => {
//     setCount(count - 1);
//   };

//   const handleRemove = (id) => {
//     setCart(cart.filter((Id) => Id !== id));
//     // navigate(/fake)
//   };
//   // const handleAdd = (id) => {
//   //   navigate(/fake)
//   // }
//   return (
//     <div className="test">
//       <div className="">
//         {cart.map((val) => (
//           <li key={val.id}>
//             <h1> {val.id}</h1>
//             <img
//               //onClick={() => handleClick(val.id)}
//               src={val.image}
//               width={100}
//             />
//             <h3> {val.title}</h3>
//             <h3 style={{ color: "red" }}>Price:{val.price * count}</h3>
//             {/* <h3>About:{val.description}</h3> */}
//             {/* <h3 style={{color: "teal"}}>Rating:{val.rating.rate}</h3>
//         <h3>count:{val.rating.count}</h3> */}
//             <h3> Quantity: {count} </h3>
//             <button onClick={handleQuantityInc}> + </button>
//             <button onClick={handleQuantityDec}> - </button>
//             <button
//               style={{ color: "green" }}
//               //onClick={() => handleClick(val.id)}
//             >
//               Proceed to buy
//             </button>
//             <button
//               style={{ color: "red" }}
//               onClick={() => handleRemove(val.id)}
//             >
//               Remove
//             </button>
//             {/* <button style={{color:"blue"}} onClick={()=>handleAdd(val.id)}>Add items</button> */}
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Addcart;
