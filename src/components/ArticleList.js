import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

console.log(blogData);

function ArticleList({ posts }) {
    console.log(posts);
    let postItem = posts.map((post) => (
      <Article 
      key = {post.id}
      title = {post.title}
      date = {post.date}
      preview = {post.preview}/>
    ))
    
    
    return (
      <div id="projects">
        <h2>My Projects</h2>
        <div id="project-list">
         {postItem}
        </div>
      </div>
    );
  }

// function ArticleList({name}) {
//   return (
//     <div className="Header">
//         <main className="header">
//             <h1>{name}</h1>
//         </main>
     
//     </div>
//   );
// }

export default ArticleList;
