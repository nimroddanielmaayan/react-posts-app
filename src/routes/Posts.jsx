import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

/* The Posts.jsx Component */

// This is our root component for the project

// Notice that we're not using the imported PostsList function\component as a function (like we would do in vanilla JS), but as an "HTML-like" element
