import { useState } from 'react';

import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;

/* App.jsx */

// This is our root component for the project

// Notice that we're not using the imported PostsList function\component as a function (like we would do in vanilla JS), but as an "HTML-like" element
