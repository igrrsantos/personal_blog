import React from 'react'

const Post = ({ user, content }) => {
  return (
    <div className="post">
      <h3>{user.name}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Post;