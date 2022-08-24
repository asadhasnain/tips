import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <div className="n-list">
      <ul>
        <li><Link to="app" spy={true} smooth={true}>
            Home
          </Link></li>
        <li>
          <Link to="destinations" offset={-100} spy={true} smooth={true}>
            Destinations
          </Link>
        </li>
        <li><Link to="guide" spy={true} smooth={true}>
            Guide
        </Link>
        </li>
        <li><Link to="booking" spy={true} smooth={true}>
            Booking
        </Link>
        </li>
        <li><Link to="contact" spy={true} smooth={true}>
          Contact us
        </Link>
        </li>
      </ul>
    </div>
  );
}
