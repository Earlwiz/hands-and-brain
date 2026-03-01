const products = [
  {
    id: 1,
    name: "Luxury Modern Sofa",
    price: "$1,200",
    image:
      "https://images.unsplash.com/photo-1616628182507-0e7c6dfe2c6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Premium Orange Couch",
    price: "$950",
    image:
      "https://images.unsplash.com/photo-1582582494700-5b4a8a6b2f9c?auto=format&fit=crop&w=800&q=80",
  },
];            borderRadius: "10px",
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
