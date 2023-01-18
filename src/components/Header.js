

import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function Header({name}) {
  return (
    <div className="Header">
        <header className="header">
            <h1>{name}</h1>
        </header>
     
    </div>
  );
}

export default Header;
