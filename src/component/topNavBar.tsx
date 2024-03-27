import React from "react";
import "../styling/navBar.css";
export function NavBar() {
  return (
    <div className="NavBarMain">
      <div className="NameHospital">
        <h2>Bãi Cháy Hospital</h2>
      </div>
      <div className="navBar">
        <a href="Home">Home</a>
        <a href="About_us">About us</a>
        <a href="Service">Service</a>
        <a href="News">News</a>
        <a href="Medicine">Medicine</a>
        <a href="Contact_us">Contact us</a>
      </div>
    </div>
  );
}
