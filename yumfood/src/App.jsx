import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import OurFood from "./Components/OurFood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import SignIn from "./Components/SignIn";
import Cart from "./Components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    });
    if (isPresent)
      return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) =>{
        if(data.id === item.id)
          ind = index;
    })
    console.log(ind);
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }

  return (
    <>
      <BrowserRouter>
        <Header size={cart.length} />
        <Routes>
          <Route path="/" element={<Home handleClick={handleClick} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourfood" element={<OurFood handleClick={handleClick}/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
