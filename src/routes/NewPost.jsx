import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' required rows={3} />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' name='author' required />
        </p>
        <p className={classes.actions}>
          <Link to='..' type='button'>
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();

  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}

/* The NewPost Component */

// Notice that for the props.onBodyChange function, we don't need to import React into this component, and we don't need to set the default useState in this component either. All of these things are defined in the parent component, and are passed down the component tree through the props. All that is needed in this component is the props.onBodyChange function

// The "Cancel" button has a type='button' attribute, because by default a button in a form is a submit button (like the second button, for which we don't need to set type='button' because it's the default)

// Remember, that by default, a submit button in a form generates and submits an HTTP request and then reloads the page, after it's pressed (because JS assumes that a back-end action will take place). We don't want this to happen here (because data is handled in the front end by React), so we disable it using the event.preventDefault() function. This function is contained inside the submitHandler() function, which automatically receives the event data from the built-in onSubmit React attribute. This is a common React pattern

// React forms is a subject of it's own, and there's information about it online

// NOTE: onAddPost() and onCancel() are actually props, not functions. But since they are props that pass down a function, they can be called as functions, with parentheses ()

// The method='post' attribute inside the <Form /> component is used to identify the form, in case that there are several forms (or several actions) in one component, and we need to know which one to hook to

// export async function action() automatically recieves a complex object when it's called, after an action (a form submit, in this case) happens in this component. This complex object contains inside it a request object which has a formData() method. This formData() method returns the data (again, as an object) that was passed by the <Form /> component. The formData() method returns a promise, so we need to call it using await (and we have to turn the action() function into an async function).

// The expression: const postData = Object.fromEntries(formData); is a way of processing the data, so that postData can be passed down to body: JSON.stringify(postData)

// The redirect() function is imported from react-router-dom, and it can be called inside both loader() function and inside action() function. It simply tells the router where to redirect to, and it's typically applied after loader() or action() are finished
