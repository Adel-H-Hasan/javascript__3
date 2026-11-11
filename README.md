<<<<<<< HEAD
# Exercise 1 - Answers

## Predicted output
```
undefined      <- console.log(name) before assignment (in a browser it prints "" because window.name already exists)
20             <- console.log(y) inside test()
```
`// console.log(x)` is commented out; if enabled it would throw `ReferenceError: x is not defined`, because x is local to test().

## How hoisting works with var
The engine moves var declarations (not their values) to the top of their scope before running. `var name = "Jone"` becomes `var name;` at the top and `name = "Jone"` stays in place, so reading it earlier gives `undefined`, not an error. Function declarations are hoisted completely (name and body).

## Function scope vs block scope
- var is function scoped: it ignores `{ }` blocks such as if/for, so `y` is visible in all of test().
- let and const are block scoped: they exist only inside the nearest `{ }`. They are hoisted but sit in the temporal dead zone until declared, so using them early throws ReferenceError.

## Rewrite
See ex01-hoisting.js (the let/const version at the bottom).

# How to run
- `node exNN-xxx.js` for the .js files
- Open the .html files in a browser
- ex12-modules needs a local server: `cd ex12-modules && npx serve` (or `python3 -m http.server`) then open the shown URL
=======
>>>>>>> 2b9196ab88c62893d6e573d9a97b2a2899732a92
"# javascript__3" 
