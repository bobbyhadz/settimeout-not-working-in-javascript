// // setTimeout not working in JavaScript

// // EXAMPLE 1 - Pass a reference to a function to setTimeout

// setTimeout(callbackFn, 1000);

// function callbackFn() {
//   console.log('bobbyhadz.com');
// }

// ------------------------------------------------------------------

// // EXAMPLE 2 - Passing one or more arguments to the function

// setTimeout(() => greet('bobby hadz'), 1000);

// function greet(name) {
//   console.log(`hello ${name}`);
// }

// ------------------------------------------------------------------

// // clearTimeout not working in JavaScript

// // EXAMPLE 3 - Store the timeout ID in a variable

// // 👇️ store timeout ID in variable
// const timeoutID = setTimeout(callbackFn, 1000);

// // 👇️ this clears the timeout
// clearInterval(timeoutID);

// function callbackFn() {
//   console.log('bobbyhadz.com');
// }

// ------------------------------------------------------------------

// // setInterval not working in JavaScript

// // EXAMPLE 4 - Pass a reference to the function to `setInterval`

// // ✅ works as expected
// setInterval(callbackFn, 1000);

// function callbackFn() {
//   console.log('bobbyhadz.com');
// }

// ------------------------------------------------------------------

// clearInterval not working in JavaScript

// EXAMPLE 5 - store the interval ID in a variable

// 👇️ store interval ID in variable
const intervalID = setInterval(callbackFn, 1000);

// 👇️ this clears the interval
clearInterval(intervalID);

function callbackFn() {
  console.log('bobbyhadz.com');
}
