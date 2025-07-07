import axios from "axios";
import React, { useState } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formKoData = new FormData();
    formKoData.append("name", name);
    formKoData.append("amount", amount);
    formKoData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:8000/test.php",
        formKoData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res);
      setPreviewUrl(res.data.imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="pName">Product Name:</label>
        <input
          id="pName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <br />
        <label htmlFor="image"></label>
        <input
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <button type="submit">Submit</button>
        {previewUrl && (
          <div>
            <img src={previewUrl} alt="upload" width="200" />
          </div>
        )}
      </form>
    </>
  );
};

export default Test;
