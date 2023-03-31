import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;

/* The Modal Component */

// The special "children" prop: If we want to nest components inside each other, we have to use the special children prop.

// This is because React elements are usually built of more than one HTML element, and react needs to know where the nested component needs to be placed, inside of the inesting component

// Destructuring the props: Since props is always an object, it can be immediately destructured to the properties that we want to use, and then we don't need to use {props.property} when using that property, just {property}, like we do here with {children}

// "children" is a reserved prop name. We can't use it for any custom-made props

// The "open" prop is a built-in React prop for the HTML <dialog> element, when it's used inside JSX. It's required in order to set the dialogue to "visible", and it's defined by default to: open={true}, but ={true} can be omitted

// Techniaclly, we could have just replaced the <div /> element here with a <Link /> component, but we wanted to show how to initiate a navigation action dynamically\conditionally, within code, using the useNavigate() React function

// navigate('..') takes us up one level in the URL
