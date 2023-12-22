// Header.Components.jsx
import React from "react";
import SideComponent from "../SideComponent/SideComponent.Components";
import { Link } from "react-router-dom"; // Update the import

const Header = () => {
  return (
    <nav
      className="navbar text-white text-l p-3 sticky-top"
      style={{
        borderBottom: "1px solid whitesmoke",
        backgroundColor: "rgba(33, 37, 41, 0.9)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ color: "#fff" }}>
          Valkyrie
        </Link>
        <SideComponent />
      </div>
    </nav>
  );
};

export default Header;
