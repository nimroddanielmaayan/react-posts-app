import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to='..' className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}

/* The PostDetails.jsx Component */

// This component has a loader() function which, like all loader() functions and all action() functions, automatically receives an object that includes inside it a request object and a params object, which includes the ID of the fetched data. This params object is what we use here in the loader() function

// There's a use case in which a URL for a post that doen't exist is requested, in which case 'null' will be returned by the server. But we take care of that here with the if (!post) {} code block
