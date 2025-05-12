import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { v4 as uuid4 } from "uuid";
import { useLocation } from "react-router-dom";

const EsewaPayment = () => {
  const location = useLocation();
  const { amount: prodAmt = "0", name = "n/a" } = location.state || {};
  const [formData, setformData] = useState({
    amount: prodAmt,
    tax_amount: "0",
    total_amount: prodAmt,
    transaction_uuid: uuid4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "http://localhost:5173/success",
    failure_url: "http://localhost:5173/failure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  // generate signature function
  const generateSignature = (
    total_amount,
    transaction_uuid,
    product_code,
    secret
  ) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashString, secret);
    const hashedSignature = CryptoJS.enc.Base64.stringify(hash);
    return hashedSignature;
  };

  // useeffect
  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formData;
    const hashedSignature = generateSignature(
      total_amount,
      transaction_uuid,
      product_code,
      secret
    );
    setformData((prev) => ({ ...prev, signature: hashedSignature }));
  }, [formData.total_amount, formData.transaction_uuid, formData.product_code]);

  return (
    <form
      action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      method="POST"
      className="max-w-xs mx-auto mt-10 p-6 bg-white shadow-lg rounded-md"
    >
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Checkout
      </h1>

      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Amount
        </label>
        <input
          type="text"
          readOnly
          id="amount"
          name="amount"
          autoComplete="off"
          value={formData.amount}
          // onChange={({ target }) =>
          //   setformData({
          //     ...formData,
          //     amount: target.value,
          //     total_amount: target.value,
          //   })
          // }
          // required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Hidden fields remain untouched */}
      <input
        type="hidden"
        id="tax_amount"
        name="tax_amount"
        value={formData.tax_amount}
        required
      />
      <input
        type="hidden"
        id="total_amount"
        name="total_amount"
        value={formData.total_amount}
        required
      />
      <input
        type="hidden"
        id="transaction_uuid"
        name="transaction_uuid"
        value={formData.transaction_uuid}
        required
      />
      <input
        type="hidden"
        id="product_code"
        name="product_code"
        value={formData.product_code}
        required
      />
      <input
        type="hidden"
        id="product_service_charge"
        name="product_service_charge"
        value={formData.product_service_charge}
        required
      />
      <input
        type="hidden"
        id="product_delivery_charge"
        name="product_delivery_charge"
        value={formData.product_delivery_charge}
        required
      />
      <input
        type="hidden"
        id="success_url"
        name="success_url"
        value={formData.success_url}
        required
      />
      <input
        type="hidden"
        id="failure_url"
        name="failure_url"
        value={formData.failure_url}
        required
      />
      <input
        type="hidden"
        id="signed_field_names"
        name="signed_field_names"
        value={formData.signed_field_names}
        required
      />
      <input
        type="hidden"
        id="signature"
        name="signature"
        value={formData.signature}
        required
      />

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <input
          type="text"
          value={name}
          readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed text-gray-700"
        />
      </div>

      <div className="mt-6">
        <input
          type="submit"
          value="Pay via E-Sewa"
          className="w-50 bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition cursor-pointer"
        />
      </div>
    </form>
  );
};

export default EsewaPayment;
