import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Sidebar = () => {
  return (
    <>
      <nav className ="sidebar-menu">
        <ul>
          <li className="nav-text">
            <Link to="/"><span>Home</span></Link>
          </li>
          <li className="nav-text">
            <Link to="/destinations"><span>Destinations</span></Link>
          </li>
          <li className="nav-text">
            <Link to="/booking"><span>Booking</span></Link>
          </li>
          <li className="nav-text">
            <Link to="/contact"><span>Contact</span></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
