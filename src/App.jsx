import { useState } from "react";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Luxury Modern Sofa",
      price: "$1,200",
      image:
        "https://images.unsplash.com/photo-1616628182507-0e7c6dfe2c6c",
    },
    {
      id: 2,
      name: "Premium Orange Couch",
      price: "$950",
      image:
        "https://images.unsplash.com/photo-1582582494700-5b4a8a6b2f9c",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Hand’s & Brain Interior Furniture</h1>
      <p>Custom Luxury Furniture Built for Modern Spaces.</p>

      <h2>Our Designs</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>{product.name}</h3>
          <p>{product.price}</p>

          <button onClick={() => setSelectedProduct(product)}>
            Request This Design
          </button>
        </div>
      ))}

      {selectedProduct && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "2px solid black",
          }}
        >
          <h2>Request: {selectedProduct.name}</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Request Submitted!");
              setSelectedProduct(null);
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{ display: "block", marginBottom: "10px" }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{ display: "block", marginBottom: "10px" }}
            />
            <textarea
              placeholder="Describe your custom needs"
              required
              style={{ display: "block", marginBottom: "10px" }}
            />

            <button type="submit">Submit Request</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
