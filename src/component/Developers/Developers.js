import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleDeveloper from "../SingleDeveloper/SingleDeveloper";
import "./Developers.css";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  // cart use state
  const [cart, setCart] = useState([]);
  // data load to json file
  useEffect(() => {
    fetch("./developerdb.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  const handleDeveloper = (developer) => {
    const newCart = [...cart, developer];
    setCart(newCart);
  };
  return (
    <div>
      <div className="row">
        <h1 className="total-developer">Total Developers: 100 Million</h1>
        {/* display single developer call */}
        <div className="col-md-9 developers">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {developers.map((developer) => (
              <SingleDeveloper
                developer={developer}
                key={developer.key}
                handleDeveloper={handleDeveloper}
              ></SingleDeveloper>
            ))}
          </div>
        </div>
        {/* display cart and calculation */}
        <div className="col-md-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Developers;
