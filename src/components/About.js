import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function About({about, image = "https://via.placeholder.com/215"}) {
  return (
    <div className="About">
        <aside>
            <img src={image} alt="blog logo" className="image"/>
            <p>{about}</p>
        </aside>
     
    </div>
  );
}

export default About;
