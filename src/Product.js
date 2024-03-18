import React, { useEffect, useState } from "react";
import { Grid, CardContent, Typography } from "@mui/material";
// import Container from "@mui/material";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
// import AddKart from "./AddKart";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Product = () => {
  const [value, setData] = useState([]);

  const [jewelery, setJewelery] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  // const Id = useParams();
  // let Id1 = Id.id;
  // console.log(Id1);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://fakestoreapi.com/products/${Id1}`
  //     );
  //     // console.log(response.data);
  //     setData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const navigate = useNavigate();

  const HandleClick = (id) => {
    navigate("/Addcart", { state: { id: id } });
    // navigate(`/AddKart/${id}`);
    return console.log(id);
  };
  let Handleelectronics = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/electronics`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  };
  let Handlejewelery = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/jewelery`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  };

  let Handlewomenclothing = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  };
  let Handlemenclothing = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  };
  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  return (
    <div>
      <>
        <div>
          <nav className="navbar navbar-expand-lg  bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand fs-1">
                <i className="fa-brands fa-pied-piper-alt"></i>
              </a>
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-5" style={{ cursor: "pointer" }}>
                  <li className="nav-item mx-5">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" onClick={Handleelectronics}>
                      Electronics
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" onClick={Handlejewelery}>
                      Jewelery
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" onClick={Handlewomenclothing}>
                      Womenclothing
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" onClick={Handlemenclothing}>
                      Menclothing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Grid
            container
            // spacing={0}
            style={{
              backgroundColor:"#012",
             
              gap: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {value.map((result, id) => (
              <Grid
                item={true}
                // xs={12}
                // ms={4}
                sm={3}
                key={id}
                style={{ margin:'20px' ,overflow: "hidden" }}
              >
                <Card
                  sx={{ maxWidth: 400, maxHeight:600 }}
                  style={{ marginLeft: "20px", marginBottom: "1`0px",color:"white", display:"flex",alignItems:'center',position:'relative' }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image={result.image}
                    style={{
                      // backgroundColor: "black",
                      // borderRadius: "10px",
                      objectFit: "contain",
                      backgroundRepeat: "no-repeat  ",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {`${result.title.slice(0, 15)}...`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`${result.description.slice(0, 25)}...`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        HandleClick(result.id);
                      }}
                      // key={result.id}
                      size="small"
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* </Container> */}
        </div>
      </>
    </div>
  );
};

export default Product;
