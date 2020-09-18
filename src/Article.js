import React from 'react';

const Article = ({ item }) => {
  return (
    <article>
      <h2>{item.title}</h2>
      <ul>
        <li>Author: <i>{item.by}</i>, Karma: <i>{item.author?.karma}</i></li>
        <li>Score: <i>{item.score}</i></li>
        <li>Time: <i>{new Date(item.time * 1000).toLocaleString()}</i></li>
        <li>URL: <i>{item.url}</i></li>
      </ul>
    </article>
  );
}
export default Article;