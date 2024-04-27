
import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
{Array.isArray(posts) && posts.map((post) => (
  <Article
    key={post.id}
    title={post.title}
    date={post.date}
     preview={post.preview}
  />
))}
    </main>
  );
}
export default ArticleList;
