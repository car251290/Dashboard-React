## JS

JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:

Introducing JavaScript objects

In JavaScript, most things are objects, from core JavaScript features like arrays to the browser APIs built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages and act as handy data containers. The object-based nature of JavaScript is important to understand if you want to go further with your knowledge of the language, therefore we've provided this module to help you. Here we teach object theory and syntax in detail, then look at how to create your own objects.

What do you think about this?

The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions, there is no binding of this.

In regular functions, this keyword represented the object that is called the function, which could be the window, the document, a button, or whatever.

With arrow functions, this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

## React.js
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.


<div>
 <img style="width: 15%;height:15%;" src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png"> 
</div>


 
## React Component Design
Based on the screen design, we can break down components as shown in the diagram below. The idea is to make things organized and create components that are reusable and easily maintainable for possible new features in the future.

## Hooks 
Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.

This new function Usestate is the first “Hook” we’ll learn about, but this example is just a teaser. Don’t worry if it doesn’t make sense yet!

You can start learning Hooks on the next page. On this page, we’ll explain why we’re adding Hooks to React and how they can help you write great applications.

Do Hooks cover all use cases for classes?
Our goal is for Hooks to cover all use cases for classes as soon as possible. There are no Hook equivalents to the uncommon getSnapshotBeforeUpdate, getDerivedStateFromError, and componentDidCatch lifecycles yet, but we plan to add them soon.

## UseState

The useState() is a Hook that allows you to have state variables in functional components. so basically useState is the ability to encapsulate local state in a functional component.

## UseEffect 

The effect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.

The effect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. use effect(<function>, <dependency>

## UseContext

When do you need context? The main idea of using the context is to allow your components to access some global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children

## useRef

The userRef Hook allows you to persist values between renders. It can store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

What Are Serverless Functions?
Serverless functions enable frontend developers to add powerful “backend” logic to our apps just by writing JavaScript — no DevOps, no servers, just results. — Jason Lengstorf

Using Serverless Functions allows you to “post” data from your front end to your “back end” in the same project. The Serverless Function can then securely “post” to a Database to store data.

Since all the business logic is on the “backend”, the API keys or secrets required to make the database connection are never exposed to the frontend/user/(the browser).

The way to achieve this differs slightly between the frameworks, but the general idea is to have a “Page” that handles sending the request to the “API”.

## UseReducer

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

## JSX
Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.
