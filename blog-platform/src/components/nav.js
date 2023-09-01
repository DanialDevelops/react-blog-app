import React from "react";

const navStyle = {
  backgroundColor: "#333",
  padding: "10px 0",
  width: "100%", // Make the navbar span the entire width
  position: "fixed", // Fix the navbar at the top
  top: 0, // Position it at the top
  marginBottom: '15px',
};

const brandStyle = {
  color: "#fff",
  fontSize: "40px",
  textDecoration: "none",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginRight: "10px",
  fontSize: "24px"
};
const container = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start'
};

const Nav = () => {
  return (
    <nav style={navStyle}>
      <a href="/" style={brandStyle}>Yodin</a>
      <div style={container}>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        <li style={{ display: "inline" }}>
          <a href="/" style={linkStyle}>Home</a>
        </li>
        <li style={{ display: "inline" }}>
          <a href="/about" style={linkStyle}>About</a>
        </li>
        <li style={{ display: "inline" }}>
          <a href="/contact" style={linkStyle}>Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Nav;