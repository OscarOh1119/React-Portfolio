import React from "react";
import Navigation from "./Navigation";


const Header: React.FC = () => {
  

  return (
    <header
    className="d-flex justify-content-between align-items-center w-100 p-0 m-0" style={{ backgroundColor: "#ff6f59ff",  borderBottom: "4px solid #254441ff" }}
    >
       <a
        href="/exampleresume.pdf"
        className="btn btn-primary"
        download="exampleresume.pdf"
        style={{ backgroundColor: '#b2b09bff', color: '#254441ff', border: '#254441ff', top:"0"}}
      >
        Download Resume
      </a>
      <Navigation />
   
    </header>
  );
};

export default Header;