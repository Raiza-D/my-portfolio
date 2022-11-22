import React from "react";
import "../styles/Navigation.css";

export default function Navigation() {

  const categories = [
    {
      name: "Home",
      href: "#home",
      id: 1,
    },
    {
      name: "About",
      href: "#about",
      id: 2,
    },
    {
      name: "Skills",
      href: "#skills",
      id: 3,
    },
    {
      name: "Projects",
      href: "#projects",
      id: 4,
    },
    {
      name: "Contact",
      href: "#contact",
      id: 5,
    },
  ];


  return (
    <div>
      <nav class="menu">
        <span>Raiza De Guzman</span>
        <span>
          {categories.map((category) => {
            return (
              <a key={category.id} href={category.href}>
                {category.name}
              </a>
            );
          })}
        </span>
      </nav>
    </div>
  );
}