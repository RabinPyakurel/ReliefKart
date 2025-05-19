import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Khalti = () => {
  const location = useLocation();
  const {
    id = "N/A",
    amount: prodAmt = "0",
    name = "n/a",
  } = location.state || {};

  useEffect(() => {
    const data = {
      return_url: "http://localhost:5173/khalti",
      website_url: "https://localhost:5173/home",
      amount: prodAmt * 100,
      purchase_order_id: id,
      purchase_order_name: name,
      customer_info: {
        name: "Rabin",
        email: "rabin1372gmail.com",
        phone: "9800000001",
      },
    };

    axios
      .post("https://dev.khalti.com/api/v2/epayment/initiate/", data, {
        headers: {
          Authorization: "key 9007967c150e43de91cd9cced12f58b3",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.payment_url);
        // Optional: redirect to Khalti payment page
        // window.location.href = response.data.payment_url;
      })
      .catch((error) => {
        console.error(error.response?.data || error.message);
      });
  }, [prodAmt, id, name]);

  return <div>Khalti</div>;
};

export default Khalti;
