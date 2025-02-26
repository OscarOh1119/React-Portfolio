import React from "react";

const Home: React.FC = () => {
  return (
    <div
      className="container p-5 mt-5 min-vh-100 d-flex flex-column justify-content-start align-items-center"
      style={{ backgroundColor: "#43aa8bff", border: "4px solid #254441ff" }}
    >
      <h1
        className="display-2 text-center mb-3"
        style={{
          backgroundColor: "#ff6f59ff",
          color: "#254441ff",
          border: "4px solid #254441ff",
          padding: "10px 20px",
          width: "100%", 
          textAlign: "center",
        }}
      >
        Oscar Oh
      </h1>
      
      <p
        className="text-center"
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px", 
          marginTop: "0px", 
        }}
      >
        Hello, my name is Oscar Oh and this is an example Personal Portfolio built with REACT. Additional Features will be added in the future.
      </p>
    </div>
  );
};

export default Home;
