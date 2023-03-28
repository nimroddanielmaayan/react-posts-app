import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    onAddPost(postData);

    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;

/* The NewPost Component */

// Notice that for the props.onBodyChange function, we don't need to import React into this component, and we don't need to set the default useState in this component either. All of these things are defined in the parent component, and are passed down the component tree through the props. All that is needed in this component is the props.onBodyChange function

// The "Cancel" button has a type='button' attribute, because by default a button in a form is a submit button (like the second button, for which we don't need to set type='button' because it's the default)

// Remember, that by default, a submit button in a form generates and submits an HTTP request and then reloads the page, after it's pressed (because JS assumes that a back-end action will take place). We don't want this to happen here (because data is handled in the front end by React), so we disable it using the event.preventDefault() function. This function is contained inside the submitHandler() function, which automatically receives the event data from the built-in onSubmit React attribute. This is a common React pattern

// React forms is a subject of it's own, and there's information about it online

// NOTE: onAddPost() and onCancel() are actually props, not functions. But since they are props that pass down a function, they can be called as functions, with parentheses ()
