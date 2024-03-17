import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Fab } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite

const Addcart = () => {
  const [addKart, setAddKart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // const { Id } = useParams();
  // let Id1 = Id.id;
  // console.log(Id);
  const location = useLocation();
  // console.log(location.state.id
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${location.state.id}`
      );
      console.log(response.data);
      setAddKart(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const navigate1 = useNavigate();

  const handleOrderNow = (id) => {
    navigate1("/OderNow", { state: { Oder: id } });
    console.log(id);
  };
  const handleQuantityChange = (event) => {
    const selectedQuantity = event.target.value;
    console.log(selectedQuantity);

    setQuantity(selectedQuantity);
    // setPrice(selectedQuantity * show.price);
    console.log(parseInt(quantity));
    console.log(addKart.price);
  };

  return (
    <>
      {/* <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
      <Card sx={{ maxWidth: 1000 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={addKart.image}
          style={{
            marginTop: "50px",
            borderRadius: "10px",
            objectFit: "contain",
            backgroundRepeat: "no-repeat  ",
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
        <CardActions>
          <Button variant="outlined" size="small">
            Order Now
          </Button>
          <Typography>
            <li>
              <img style={{ width: "200px" }}></img>
              <h3></h3>
              <p></p>
              <h4>M.R.P ${addKart.price * quantity}</h4>
              <label for="cars">quantity</label>
              &nbsp;
              <select
                name="number"
                id="num"
                value={quantity}
                onChange={handleQuantityChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </li>
          </Typography>
          <Button
            onClick={() => {
              handleOrderNow(addKart.id);
            }}
            variant="contained"
            size="small"
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Addcart;
