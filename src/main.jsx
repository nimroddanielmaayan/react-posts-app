import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Course Section #29 ("Summary Course") */

// To activate the live preview, we need to run the dev NPM script (using the bottom left dropdown or by writing npm run dev in the console)

// This project is created using Vit, not using Create React App - so it's compiled a little differently

// Vit requires all JSX files to have the .jsx file extention

// All React components must begin with a capital letter

// All JSX files are compiled as JS modules, do they don't need 'use strict' at the beginning

// To use JS syntax inside the returned JSX HTML-like syntax, we use the special react operator {}

// All JSX files are regular JS file + extra features. So of course, we can use any JS syntax outside of the HTML-like syntax

// It's allowed to return an "empty" element in a react component, instead of returning a div (such as: <> </>). This is also called a "React Fragment"

// All React components (both custom and built-in) must have a closing tag (or be a self-closing tag)

// To set inline CSS inside JSX, we can use double curly braces (for example: <div style={{color: 'red'}})></div>)

// Another way to set CSS in JSX is with the className property. CSS classes for JSX can be set either in the primary index.css file, or in component-specific CSS files (that have to be imported). The disadvantage of using a single index.css file in large projects, however, is that class clashes\duplications may occur. Therefore, it's considered best practice to "scope" the CSS to component-specific files

// The component-specific CSS files must end with module.css. Also, there's a special syntax for importing them to the component, and they will be passed to the component as an object. Also, they need to be applied in the JSX using {}. Behind the scenes, React will create uniquely named global classes and apply them in the component

// There are also other ways of applying CSS styles in React, that are shown in the full course

// The HTML for attribute is written as htmlFor when used inside JSX (similar to the case of class\className)

// It's a convention in React to call a function "somethingHandler" when it's intended to be called when an event occures, like when a button is clicked

/* State and React Hooks */

// The concept of state in React: We want React to update a part of the site whenever specific changes occur - that's React's biggest advantage. To do that, we need an event listener and we need to know what a "state change" is

// To listen for a change, we use a property like onChange

// To define what happens, we use a function inside of the component

// To get React to react to state changes, we need to use the useState hook

// React hooks are functions that are "hooked" to React's processes. We can create custom hooks, if we want to

// useState has a special syntax. It has to be assigned an initial value, and it returns an array with 2 values - the first is the present state, and the second is the new state

// The present state is a value (string, number, array, object, etc.). The new state is a function, that recieves the new state's value as an argument

// The present state is the variable that we can use inside the React component. Once the present state changes, React will update only the parts of the DOM that need to be updated

// The state piece that we are changing is called a "state slice". A state slice can be any kind of variable (string, number, array, object, etc.)

// Whenever useState is called, React re-renders the component (re-runs the function) that contains it, whenever any change is made (React uses the "virtual DOM" methodology to know if a change was made). In other words - whenever a variable that was created by useState changes, it's component is re-rendered by React

// The useState hook function should be saved as a const (and not as a let), because it's always re-created when the component function is called again

// Lifting the state: The idea here is to set the commands for the state change inside an "upper" component, that includes both the input and the output. We can pass functions from component to component down the component tree, just like we pass properties

// We can create and use as many onState functions as we need in one component. React will listen for all of the status changes, simultaneously

// The state is "component specific" memory. It persists between renders (but not between site reloads) and it's hooked to React's processes. It is "locally scoped" memory - it's scoped to the component that it belongs to

// It's a convention to start a (custom) prop name with "on" (for example: onCreatePost) whenever that prop passes a function

// Some built-in props also begin with "on"

// Usually when we pass a function down the component tree, it's in order to link that function to an event listener, down the component tree

/* Adding a Backend to the Project */

// There's a seperate project with a very simple Node.js server that can be run locally, and can listen to a local port for HTTP calls. In order to use it in this project, we need to open thr Node project, run the NPM script: start, and keep it running as long as we're using the back end

// A few reminders about the Fetch API: It's a vanilla JS API\function, which allows us to both get and send data to a backend server. It's default method is FETCH, so if we want to change it to POST we need to state it specifically

// Fetch API in this project is used in the PostsList.jsx component

// Using Fetch API to get data from a server and then to update the front end using useState, will lead to an infinite loop - because useState will get the data and then trigger a new check for changes, then get the data again, then update again, etc. To avoid this, we have "side effects"\useEffect, which gives us a more fine-tuned control over when we want to trigger a DOM update and when not to

/* useEffect */

// We have an example for useEffect in the PostsList.jsx component

// The useEffect() function is somewhat similar to the useState() function. It takes 2 parameters: A function and an array

// useEffect() uses a "trick" in order to get async data without it's parameter function itself being async. The trick is to wrap a function inside the main function, and to call it immediately. This works in React (I'm not sure if it would work in vanilla JS...). In PostsList.jsx this general "pattern" for writing a useEffect() function can be seen

// How does useEffect() know when to be triggered and run? That's what it's second parameter (the array) is for. The array contains any "dependency" (variable\array\object\function\etc.), which exists anywhere in the current component (either if it was defined in the component or passed down as a prop), and then whenever this dependency changes - that useEffect() function will be executed. If the array is empty, that useEffect() will only be run once, when the page loads (which is a common use case)
