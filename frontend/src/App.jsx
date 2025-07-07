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
  Checkout,
  ProdcutDetail,
} from "./pages";
import { EsewaPayement, Failure, Success } from "./eSewa";
import Khalti from "./khalti/Khalti";
import Test from "./Test";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProdcutDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/insert" element={<Test />} />
        <Route path="/khalti" element={<Khalti />} />
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
