import React from "react";
import blogData from "../data/blog";
// import ArticleItem from "../components/ArticleList"

console.log(blogData);

function Article({title, date="January 1, 1970", preview}) {
   
  return (
    <div className="Header">
        <article className="article">
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
     
    </div>
  );
}

export default Article;
