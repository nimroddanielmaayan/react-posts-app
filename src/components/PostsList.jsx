import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
  // Declaring the component's state variables
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;

  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Manuel' body='Check out the full course!' />
      </ul>
    </>
  );
}

export default PostsList;

/* The PostList Component */

// In this component we use, for the first time, the technique of wrapping components inside each other. Unlike wrapping regular HTML elements, this requires using the built-in "children" prop (because React doesn't know by default where to put the wrapped component\s)
// Wrapping components inside each other is a key concept of React
// NOTE: The PostsList() function is the component itself. Nested inside of this component\main function, we have "internal" functions, that act like regular JS functions which are scoped to the component
// NOTE: In React, all objects (state, functions, variables and everything else) is scoped to the current component ONLY. The only way to transfer anything from one component to another is using props, and such transfer can only happen DOWN the component chain, not up
