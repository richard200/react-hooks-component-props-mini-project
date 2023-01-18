
import React from "react";
// import blogData from "../data/blog";
// import ArticleItem from "../components/ArticleList"



function Article({title, date="January 1, 1970", preview, minutes}) {
   
  return (
    <div className="Header">
        <article className="article">
            <h3>{title}</h3>
            <small>{date}{minutes} minutes read</small>
            <p>{preview}</p>
        </article>
     
    </div>
  );
}

export default Article;
