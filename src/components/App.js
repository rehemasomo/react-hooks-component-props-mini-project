import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Blog Articles</h1>
      </header>
      <ArticleList posts={blogData} />
    </div>
  );
}

export default App;
