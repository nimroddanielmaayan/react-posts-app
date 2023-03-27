import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;

/* The NewPost Component */

// Notice that for the props.onBodyChange function, we don't need to import React into this component, and we don't need to set the default useState in this component either. All of these things are defined in the parent component, and are passed down the component tree through the props. All that is needed in this component is the props.onBodyChange function
