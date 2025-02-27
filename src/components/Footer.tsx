import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-center"
      style={{
        padding: "20px", 
        backgroundColor: "#ff6f59ff", 
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center", 
          gap: "30px", 
          padding: "0",
          listStyle: "none", 
        }}
      >
        <li
          style={{ fontSize: "1.2rem", fontWeight: "bold" }} 
        >
          <a
            href="https://github.com/Oscaroh1119/"
            className="contact-link"
            style={{ color: "#254441ff", textDecoration: "none" }}
          >
            Github Link
          </a>
        </li>
        <li
          style={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          <a
            href="https://www.google.com/"
            style={{ color: "#254441ff", textDecoration: "none" }}
          >
            oscarisaacoh@gmail.com
          </a>
        </li>
        <li
          style={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          <a
            href="https://www.google.com/"
            style={{ color: "#254441ff", textDecoration: "none" }}
          >
            Phone Number: 123-456-7890
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
