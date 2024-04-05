import { Button } from "@mui/material";
import React, { useState } from "react";
// import { useEffect } from "react";

const Addtocart = () => {
  const values = JSON.parse(localStorage.getItem("values")) || [];

  const [value, setValue] = useState(values);

  // useEffect(() => {
  //   const values = JSON.parse(localStorage.getItem("values")) || [];
  //   if (values) {
  //     setValue(values);
  //   } else {
  //     console.log("error");
  //   }
  // }, []);

  const handleQuantityChange = (event, id) => {
    let data = values?.filter((item) => {
      return item?.id === id?.id;
    });
    // console.log(data[0],"data");

    if (data && data.length > 0) {
      data[0].quantity = event.target.value;
      localStorage.setItem("values", JSON.stringify(values));
      let updateddata = JSON.parse(localStorage.getItem("values"));
      setValue(updateddata);
    }
  };

  const handleDelete = (itemId) => {
    const storedData = JSON.parse(localStorage.getItem("values")) || [];
    const updatedData = storedData.filter((item) => item.id !== itemId);
    localStorage.setItem("values", JSON.stringify(updatedData));
    setValue(updatedData);
  };

  return (
    <div>
      {value.map((val) => {
        return (
          <div key={val.id}>
            <img style={{ width: "200px" }} src={val.image}></img>
            <h3>{val.title}</h3>
            <p>{val.description}</p>
            {/* <span>{show.id}</span> */}
            <h4>M.R.P {val?.price * val?.quantity}$</h4>
            <div>
              <label for="cars">quantity</label>
              &nbsp;
              <select
                name="number"
                id="num"
                value={val?.quantity}
                defaultValue={val?.quantity}
                onChange={(event) => handleQuantityChange(event, val)}
              >
                <option value={1} selected>
                  1
                </option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
            <Button onClick={() => handleDelete(val.id)}>remove</Button>
          </div>
        );
      })}
    </div>
  );
};

export default Addtocart;
