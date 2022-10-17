## JS

JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:

Browser Application Programming Interfaces (APIs) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.
Third-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Twitter or Facebook.
Third-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.

## React.js
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

## Hooks 
Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.

This new function useState is the first “Hook” we’ll learn about, but this example is just a teaser. Don’t worry if it doesn’t make sense yet!

You can start learning Hooks on the next page. On this page, we’ll continue by explaining why we’re adding Hooks to React and how they can help you write great applications.

Do Hooks cover all use cases for classes?
Our goal is for Hooks to cover all use cases for classes as soon as possible. There are no Hook equivalents to the uncommon getSnapshotBeforeUpdate, getDerivedStateFromError and componentDidCatch lifecycles yet, but we plan to add them soon.

## UseState

The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.

## UseEffect 

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.

## UseContext

When do you need context? The main idea of using the context is to allow your components to access some global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children

## useRef

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

What Are Serverless Functions?
Serverless functions enable frontend developers to add powerful “backend” logic to our apps just by writing JavaScript — no DevOps, no servers, just results. — Jason Lengstorf

Using Serverless Functions allows you to “post” data from your frontend to your “backend” in the same project. The Serverless Function can then securely “post” to a Database to store data.

Since all the business logic is on the “backend”, the API keys or secrets required to make the database connection are never exposed to the frontend/user/(the browser).

The way to achieve this differs slightly between the frameworks, but the general idea is to have a “Page” that handles sending the request to the “API”.
