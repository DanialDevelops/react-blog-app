import React from "react";
import earrings from '../images/earings.png'; // Import the earrings image

const style = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "20px",
  },
  card: {
    width: "calc(25% - 20px)", // Set card width to fit 4 cards per row with spacing
    border: "1px solid #ccc",
    margin: "10px", // Add spacing around each card
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px 8px 0 0",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
    padding: "10px",
  },
  content: {
    fontSize: "14px",
    lineHeight: "1.5",
    padding: "10px",
  },
};

const jewelryItems = [
  {
    id: 1,
    title: "Elegant Necklace",
    description: "A beautiful necklace that adds charm to your outfit.",
    image: earrings, // Use the imported earrings image
  },
  {
    id: 2,
    title: "Sparkling Earrings",
    description: "Shine bright with these stunning earrings.",
    image: earrings, // Use the imported earrings image
  },
  {
    id: 3,
    title: "Diamond Bracelet",
    description: "A dazzling bracelet that complements any look.",
    image: earrings, // Use the imported earrings image
  },
  {
    id: 4,
    title: "Golden Ring",
    description: "A classic golden ring that stands the test of time.",
    image: earrings, // Use the imported earrings image
  },
  // Add more jewelry items here
];

const Home = () => {
  return (
    <div style={style.container}>
      {jewelryItems.map((item) => (
        <div key={item.id} style={style.card}>
          <img src={item.image} alt={item.title} style={style.image} />
          <h2 style={style.title}>{item.title}</h2>
          <p style={style.content}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;