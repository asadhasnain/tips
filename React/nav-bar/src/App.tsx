import React from "react";
import './App.css';
import { Bookings } from "./components/booking/Bookings";
import { ContactUs } from "./components/contact/ContactUs";
import { Destinations } from "./components/destination/Destinations";
import { Guide } from "./components/guide/Guide";
import { NavBar } from "./components/navbar/NavBar";

export default function App() {
  return (
    <div className="app">
        <NavBar />
        <Destinations />
        <Guide />
        <Bookings />
        <ContactUs />
    </div>
  );
}
