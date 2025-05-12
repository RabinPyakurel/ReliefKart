import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import {
  Home,
  About,
  Cart,
  Account,
  Login,
  Register,
  Products,
  Contact,
} from "./pages";
import { EsewaPayement, Failure, Success } from "./eSewa";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/esewa" element={<EsewaPayement />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
