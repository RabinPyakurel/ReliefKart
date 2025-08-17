import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Success = () => {
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const encodedData = query.get("data");

    if (encodedData) {
      try {
        const jsonString = atob(encodedData);
        const parsedData = JSON.parse(jsonString);
        setReceipt(parsedData);
      } catch (error) {
        console.error("Error decoding data:", error);
      }
    }
  }, []);

  if (!receipt) {
    return (
      <p style={{ color: "#ccc", textAlign: "center", marginTop: "50px" }}>
        Loading receipt...
      </p>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2>eSewa Payment</h2>
          <p style={styles.date}>{new Date().toLocaleString()}</p>
          <span style={styles.success}>✓ Completed</span>
        </div>

        <div style={styles.section}>
          <Detail label="Transaction Code" value={receipt.transaction_code} />
          <Detail label="Transaction UUID" value={receipt.transaction_uuid} />
          <Detail label="Status" value={receipt.status} />
          <Detail label="Amount" value={`NPR ${receipt.total_amount}`} />
          <Detail label="Product Code" value={receipt.product_code} />
          <Detail label="Currency" value="NPR" />
          <Detail label="Payment Method" value="eSewa" />
          <Detail label="Processed By" value="Fonepay" />
        </div>

        <Link to="/" style={styles.homeLink}>
          ← Return to Home
        </Link>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <p style={styles.detail}>
    <strong>{label}:</strong> {value}
  </p>
);

const styles = {
  page: {
    color: "#e0e0e0",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(0,0,0,0.5)",
    width: "100%",
    maxWidth: "500px",
  },
  header: {
    marginBottom: "1.5rem",
  },
  success: {
    color: "#00c853",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  date: {
    color: "#999",
    fontSize: "0.9rem",
    marginTop: "4px",
  },
  section: {
    marginBottom: "1.5rem",
  },
  detail: {
    margin: "0.5rem 0",
  },
  homeLink: {
    color: "#64b5f6",
    textDecoration: "none",
    marginTop: "1rem",
    display: "inline-block",
  },
};

export default Success;
