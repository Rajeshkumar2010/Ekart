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
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const [value, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [searched, setSearched] = useState("");
  const [search, setSearch] = useState([]);

  // const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      // setData1(res.data.title);
      console.log(res.data);
      // console.log(value1);
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
  const HandleClick1 = () => {
    console.log("hello bhai");
  };
  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    const filteredProducts = value.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setSearched(filteredProducts);
    console.log(setSearched(filteredProducts));
    setFlag(true);
  };

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

              <div className="collapse navbar-collapse " id="navbarNav">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Form.Control
                    placeholder="search"
                    className="mb-3"
                    type="search"
                    value={search}
                    onChange={handleChange}
                  />
                  <i
                    onClick={HandleClick1}
                    className="fas fa-search"
                    style={{ marginLeft: "5px" }}
                  ></i>
                </div>

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
          {/* {flag? :} */}

          <Grid
            container
            // spacing={0}
            style={{
              backgroundColor: "#012",

              gap: "10px",
              display: "flex",
              // flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {flag
              ? searched.map((result, id) => (
                  <Grid
                    item={true}
                    xs={12}
                    ms={4}
                    sm={3}
                    key={id}
                    style={{ margin: "20px" }}
                  >
                    <Card
                      sx={{ maxWidth: 400 }}
                      style={{
                        // marginLeft: "20px",
                        // marginBottom: "10px",
                        // color: "white",
                        color: "white",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="Product Image"
                        height="250"
                        image={result.image}
                        style={{
                          objectFit: "contain",
                          // backgroundRepeat: "no-repeat  ",
                        }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          color="black"
                          component="div"
                        >
                          {`${result.title.slice(0, 15)}...`}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
              {`${result.description.slice(0, 25)}..`}
            </Typography> */}
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
                ))
              : value.map((result, id) => (
                  <Grid
                    item={true}
                    xs={12}
                    ms={4}
                    sm={3}
                    key={id}
                    style={{ margin: "20px" }}
                  >
                    <Card
                      sx={{ maxWidth: 400 }}
                      style={{
                        // marginLeft: "20px",
                        // marginBottom: "10px",
                        // color: "white",
                        color: "white",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="Product Image"
                        height="250"
                        image={result.image}
                        style={{
                          objectFit: "contain",
                          // backgroundRepeat: "no-repeat  ",
                        }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          color="black"
                          component="div"
                        >
                          {`${result.title.slice(0, 15)}...`}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
            {`${result.description.slice(0, 25)}..`}
          </Typography> */}
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
