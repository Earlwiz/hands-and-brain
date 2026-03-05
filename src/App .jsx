import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Luxury Modern Sofa",
    price: "$1,200",
    image: "/Sofa1.jpg",
  },
  {
    id: 2,
    name: "Premium Orange Couch",
    price: "$950",
    image: "/Sofa2.jpg",
  },
];const products = [
  {
    id: 1,
    name: "Luxury Modern Sofa",
    price: "$1,200",
    image: "Sofa1.jpg",
  },
  {
    id: 2,
    name: "Premium Orange Couch",
    price: "$950",
    image: "Sofa2.jpg",
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Premium Furniture Showcase</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", maxWidth: "300px" }}
          />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button onClick={() => setSelectedProduct(product)}>
            Request This Design
          </button>
        </div>
      ))}

      {selectedProduct && (
        <div style={{ border: "2px solid black", padding: "20px" }}>
          <h2>Request: {selectedProduct.name}</h2>
          <input placeholder="Your Name" />
          <br /><br />
          <input placeholder="Your Email" />
          <br /><br />
          <textarea placeholder="Describe your custom needs" />
          <br /><br />
          <button>Submit Request</button>
        </div>
      )}
    </div>
  );
      }
