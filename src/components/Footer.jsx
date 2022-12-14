import React from "react";

export default function Footer () {
  const thisYear = new Date().getFullYear();

  return (
    <div>
      <p>©️ Raiza De Guzman {thisYear}</p>
    </div>
  );
};