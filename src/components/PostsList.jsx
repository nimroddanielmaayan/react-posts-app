import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;

/* The PostList Component */

// In this component we use, for the first time, the technique of wrapping components inside each other. Unlike wrapping regular HTML elements, this requires using the built-in "children" prop (because React doesn't know by default where to put the wrapped component\s)

// Wrapping components inside each other is a key concept of React

// NOTE: The PostsList() function is the component itself. Nested inside of this component\main function, we have "internal" functions, that act like regular JS functions which are scoped to the component

// NOTE: In React, all objects (state, functions, variables and everything else) is scoped to the current component ONLY. The only way to transfer anything from one component to another is using props, and such transfer can only happen DOWN the component chain, not up

// Whenever we update state, and the new state is based on the existing state (as is the case in setPosts()), we need to pass a function in order to update the state. The reason for this is that when a function is passed, React updates the data immediately after the internal function is run (setPosts() in this case) and not at the end of the external function (addPostHandler() in this case). This is important if we combine several actions in the external function which depend on each other (this is somewhat similar to async JS)

// When we use a state function (like setPosts()), it automatically recieves the current state as an optional parameter, as is done in addPostHandler(). So then, we can call the state function using an arrow function, like it's done here, rather than calling the state function with the current state (posts in this case) as a parameter, which is not ideal because it doesn't trigger a state update, as is described in the previous comment

// It's possible to output an array of JSX elements inside {} within a component's return expression, and then these elements will be rendered as seperate elements, one after the other. This is done here in the posts.map() function, and it's a useful technique for rendering "computed" content, in many use cases

// The "key" prop in the posts.map() function is not used by the application, but it's needed by React in order for it to work properly. It should ideally be a unique value. Whenever we output a list of items as React elements, each one of them needs to have a unique key

// The addPostHandler() function, after we've added the Fetch API, will both send data to the server and update the posts state using the setPosts() function

// The posts JSON data is passed to this component by useLoaderData(), which is activated when the current component's parent component (<Posts />) is loaded
