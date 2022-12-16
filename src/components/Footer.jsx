import React from "react";
import "../styles/Footer.css"

export default function Footer () {
  const thisYear = new Date().getFullYear();

  return (
    <div className="bg-orange d-flex justify-content-center align-items-center">
      <p>© {thisYear} Raiza De Guzman</p>
    </div>
  );
};