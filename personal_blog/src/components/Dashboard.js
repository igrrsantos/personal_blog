import React, { useState, useEffect } from 'react';

// Supondo que você tenha um componente 'Tweet' que renderiza individualmente cada tweet
import Post from './post';
import useListPosts from '../hooks/useListPosts';

const Dashboard = () => {
  const { posts } = useListPosts();

  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Post user={post.user} content={post.content} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando tweets...</p>
      )}
    </div>
  );
};

export default Dashboard;
