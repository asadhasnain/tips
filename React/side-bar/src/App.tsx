import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./sideBar/Sidebar";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}
