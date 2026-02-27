export default function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Hand’s & Brain Interior Furniture</h1>
      <p>Premium interior furniture showcase.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px" }}>
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
            alt="Luxury Sofa"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3>Luxury Modern Sofa</h3>
          <p>$1,200</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px" }}>
          <img
            src="https://images.unsplash.com/photo-1567016432779-094069958ea5"
            alt="Wooden Table"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3>Minimal Wooden Table</h3>
          <p>$850</p>
        </div>
      </div>
    </div>
  );
          }
