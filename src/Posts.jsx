import React from 'react';


import PostExcerpt from './PostExcerpt';

const Posts = ({ posts }) => posts.map(post => (
  <PostExcerpt
    id={post.id}
    title={post.title.rendered}
    date={post.date}
    excerpt={post.excerpt.rendered}
    key={post.id}
  />
));
export default Posts;
