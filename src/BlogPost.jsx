import React from 'react';

const BlogPost = ({
  link, title, date, content,
}) => (
  <div>
    <h1><a href={link}>{title}</a></h1>
    <p>{date}</p>
    <br />
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);


export default BlogPost;
