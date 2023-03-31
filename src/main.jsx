import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts, { loader as postsLoader } from './routes/Posts';
import NewPost, { action as newPostAction } from './routes/NewPost';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';
import RootLayout from './routes/RootLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          {
            path: '/:postId',
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* Course Section #29 ("Summary Course") - Main Summary */

// The section's repo: https://github.com/academind/react-complete-guide-code/tree/zz-reactjs-summary-updated

// NOTE: It's recommended to use Figma in order to draw a flowchart of this project's components, and to have it open wile reviewing it. The structure is a little bit complex

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

// NOTE: All of the React functions start with "use", like useState, useEffect, useNavigate, etc.

/* ----------------------------------------------------------------------- */

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

/* ----------------------------------------------------------------------- */

/* Adding a Backend to the Project */

// There's a seperate project with a very simple Node.js server that can be run locally, and can listen to a local port for HTTP calls. In order to use it in this project, we need to open thr Node project, run the NPM script: start, and keep it running as long as we're using the back end

// A few reminders about the Fetch API: It's a vanilla JS API\function, which allows us to both get and send data to a backend server. It's default method is FETCH, so if we want to change it to POST we need to state it specifically

// Fetch API in this project is used in the PostsList.jsx component

// Using Fetch API to get data from a server and then to update the front end using useState, will lead to an infinite loop - because useState will get the data and then trigger a new check for changes, then get the data again, then update again, etc. To avoid this, we have "side effects"\useEffect, which gives us a more fine-tuned control over when we want to trigger a DOM update and when not to

/* ----------------------------------------------------------------------- */

/* useEffect */

// We have an example for useEffect in the PostsList.jsx component

// The useEffect() function is somewhat similar to the useState() function. It takes 2 parameters: A function and an array

// useEffect() uses a "trick" in order to get async data without it's parameter function itself being async. The trick is to wrap a function inside the main function, and to call it immediately. This works in React (I'm not sure if it would work in vanilla JS...). In PostsList.jsx this general "pattern" for writing a useEffect() function can be seen

// How does useEffect() know when to be triggered and run? That's what it's second parameter (the array) is for. The array contains any "dependency" (variable\array\object\function\etc.), which exists anywhere in the current component (either if it was defined in the component or passed down as a prop), and then whenever this dependency changes - that useEffect() function will be executed. If the array is empty, that useEffect() will only be run once, when the page loads (which is a common use case)

/* ----------------------------------------------------------------------- */

/* Routing - the Basics */

// Routing in React means "simulating" several web pages in one web page (since React Apps are SPAs - single page applications). We may want, for example, to link to a specific "simulated" page (like a product page). To achieve this, we have the React Router package

// To install React Router - in the terminal: npm i react-router-dom

// What React Router does, basically, is to resolve different URLs and to load different components based on the requested URL

// "Simulated pages" in React are called "routes"

// There's an example of React Router syntax in the main.jsx component (the current component), including importing RouterProvider and createBrowserRouter

// The createBrowserRouter() function takes in an array of objects,and each object contains the path and the corresponding element, and it returns an object that is used as the "router" prop in <RouterProvider />, which should be the app's main component, in order to enable routing

// The React Router library website: https://reactrouter.com/en/main

/* ----------------------------------------------------------------------- */

/* Layout Routes */

// Layout routes define shared "layout" components, like the site header. There's an example for layout routes syntax here in main.jsx

// Layout routes are like regular routes, but they nest other routes inside of them

// It's recommended (but not required) to organize our routes in their own folder

// Inside layout routes components, we need to import the Outlet component from the react-router-dom library. It's a special component that should be placed where the actual nested rout content should be rendered

// Another use case for layout routes is in a modal window like we have in this project. The <Posts /> element is not a shared "layout" component, but it technically is supposed to contain the <NewPost /> component inside it, so technically, if we want to use layout routes, then <Posts /> has to be a parent of <NewPost /> inside the layout router that we define using createBrowserRouter()

/* ----------------------------------------------------------------------- */

/* Linking Routes and Navigating */

// To be more accurate, this chapter talkes about "reactive links" (using a <Link /> component) and "programmatic navigation" (using the navigate() function)

// In React, both reactive links and programmatic navigation use hooks to React's processes in order to preform navigation actions without full-page reloading. The main difference is that <Link /> is used as a component inside the return () expression, and navigate() is used as a function. But they basically do the same thing - navigate without full-page reloading

// <Link /> requires import { Link } from 'react-router-dom'

// <Link /> has a different syntax then <a> - it uses "to" instead of "href"

/* ----------------------------------------------------------------------- */

/* An More Efficient Alternative for Getting Data - loader() */

// loader() is a method for getting data which is part of react-router-dom. It has a shorter and more readable syntax than using useState and useEffect to manage async actions. It allows us to "go up" one level of abstraction by taking care of several things in the background

// To use loader() we need to do several things:

// 1. Add a loader property in the router (in this case, inside main.jsx) which takes a function as it's value. This function has to be imported from the routed component, with an alias ("loader as postsLoader" in this case) to prevent a name clash in case that there are several different loaders

// 2. Inside the routed component (which is <Posts /> in this case) we need to define the async HTTP request as a function and to export it, and to return the recieved data. This function will then be available in the current component and in all it's child components

// 3. Inside the component that uses the loader() function (or inside it's child component that uses the loader() function, PostsList.jsx in this case), we need to import { useLoaderData } from 'react-router-dom', and then call useLoaderData() and store it's returned value inside a variable ("posts" in this case). If everythig was set up properly, the useLoaderData() function should recieve the resData.posts data that was returned in Posts.jsx and was routed through main.jsx

// The router will then load the data that it's loader property requires, and only then continue to load/to route the component

// After we do all that, we don't need to use useState and useEffect in order to make HTTP requests in an async way - loader() is all that we need

// There is a way to display something before the async data is loaded to the <Posts /> component, like a "loading data" message, but this is not covered in this crash course (only in the full course)

// NOTE: All React hooks need to be called (as functions) only inside of the component's main function

/* ----------------------------------------------------------------------- */

/* An More Efficient Alternative for Submitting Data - action() */

// action() is also part of react-router-dom.

// Just like loader(), action() doesn't let us do anything that we couldn't do without it, but it allows us to use easier syntax and to "go up" one level of abstraction by taking care of several things in the background

// Just like with loader(), there's a coding pattern that needs to be used in order to apply action(). The steps are:

// 1. Add an action property in the router

// 2. Inside the routed component (<NewPost /> in this case), we need to export function action()

// 3. Inside the component that uses the action() function, NewPost.jsx in this case), we need to get some data back that will be routed to where it's needed. In this case, we do that using the <Form /> component that's loaded from react-router-dom. the <Form /> component takes care of several things in the background, like returning data through the "name" parameter, returning a data boject with all of the form's input to to the action() function, and preventing a page reload when the form is submitted. Then, action() is hooked to the form submit action using the action attribute in the router, and it listens to form submission events. If a form is <Form /> component is submitted, the <Form /> component will activate the action attribute which is assigned to the relevant component in the router

// There's more information in the comments section of the NewPost.jsx component

/* ----------------------------------------------------------------------- */

/* Dynamic Routes */

//
