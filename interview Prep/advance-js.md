# JavaScript Coding Questions

## 1. Serialize JavaScript Value to JSON String
**Description:** Implement a function that serializes a JavaScript value into a JSON string.

**Input:**
```js
const obj = { name: "John", age: 30 };
```
**Output:**
```js
'{"name":"John","age":30}'
```

**Hint:** Use `JSON.stringify()`.

---

## 2. Deep Copy with Circular Reference Handling
**Description:** Implement a function that performs a deep copy of a value, handling circular references.

**Input:**
```js
const obj = { a: 1 };
obj.b = obj;
```
**Output:** A new deeply cloned object without circular references.

**Hint:** Use a WeakMap to track visited objects.

---

## 3. Construct Table of Contents from HTML Document
**Description:** Implement a function that constructs a table of contents from an HTML document.

**Input:**
```html
<h1>Title</h1>
<h2>Subtitle</h2>
```
**Output:**
```js
[
  { level: 1, text: "Title" },
  { level: 2, text: "Subtitle" }
]
```

**Hint:** Use `document.querySelectorAll()`.

---

## 4. Memoization for Functions with Any Number of Arguments
**Description:** Implement a function that returns a memoized version of a function that accepts any number of arguments.

**Input:**
```js
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
memoizedAdd(2, 3);
```
**Output:**
```js
5 (cached on subsequent calls)
```

**Hint:** Use a Map to store computed results.

---

## 5. Implement a Cancellable Interval
**Description:** Implement a function that acts like `setInterval` but returns a function to cancel the interval.

**Input:**
```js
const cancel = mySetInterval(() => console.log("Hello"), 1000);
```
**Output:** Logs "Hello" every second until `cancel()` is called.

**Hint:** Use `setInterval()` and return a function that calls `clearInterval()`.

---

## 6. Merge Two Objects
**Description:** Implement a function that merges two objects together.

**Input:**
```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
```
**Output:**
```js
{ a: 1, b: 2 }
```

**Hint:** Use `Object.assign()` or the spread operator.

---

## 7. Recursively Transform Values
**Description:** Implement a function that recursively transforms values in an object.

**Input:**
```js
const obj = { a: "hello", b: { c: "world" } };
```
**Output:** A new object with transformed values.

**Hint:** Use recursion to traverse nested objects.

---

## 8. Deep Equality Check
**Description:** Implement a function that determines if two values are deep equal.

**Input:**
```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
```
**Output:**
```js
true
```

**Hint:** Use recursion to compare nested properties.

---

## 9. Resumable Interval Object
**Description:** Implement a function that creates a resumable interval object.

**Hint:** Use `setInterval()` and `clearInterval()` with state tracking.

---

## 10. Memoization for Single Argument Functions
**Description:** Implement a function that returns a memoized version of a function accepting a single argument.

**Hint:** Use an object as a cache.

---

## 11. Event Emitter Class
**Description:** Implement a class that can subscribe to and emit events that trigger attached callback functions.

**Hint:** Use an object to store event listeners.

---

## 12. Debounce Function with Cancel Method
**Description:** Implement a debounce function that comes with a cancel method to cancel delayed invocations.

**Hint:** Use `setTimeout()` and `clearTimeout()`.

---

## 13. Merge User Rows
**Description:** Implement a function to merge rows of data from the same user.

**Hint:** Use `reduce()`.

---

## 14. Recursively Flatten Array
**Description:** Implement a function that recursively flattens an array into a single level deep.

**Hint:** Use recursion or `flat(Infinity)`.

---

## 15. Remove Falsey Values from Object
**Description:** Implement a function that returns an object with all falsey values removed.

**Hint:** Use `Object.entries()` and `filter()`.

---

## 16. Execute Async Tasks in Series
**Description:** Implement a function to execute N async tasks in series.

**Hint:** Use `reduce()` with async/await.

---

## 17. Promisify Function with Override
**Description:** Implement a promisify function that allows the original function to override the return value.

**Hint:** Wrap function execution in a `Promise`.

---

## 18. Convert Object Keys to Camel Case
**Description:** Implement a function to convert all the keys in an object to camel case.

**Hint:** Use regex and recursion.

---

## 19. Filter Data Rows by Requirement
**Description:** Implement a function to filter rows of data matching a specified requirement.

**Hint:** Use `filter()`.

---

## 20. Insertion Sort
**Description:** Implement a function that performs insertion sort.

**Hint:** Use nested loops.

---

## 21. Deep Equality Check (Repetition of #8)

---

## 22. Highlight Search Term in Text
**Description:** Implement a function to highlight text if a searched term appears within it.

**Hint:** Use regex or `replace()`.

---

## 23. Squash Input Object
**Description:** Implement a function that returns a new object after squashing the input object.

**Hint:** Use recursion.

---

## 24. Format List into Readable String
**Description:** Implement a function that formats a list of items into a single readable string.

**Hint:** Use `join()`.

---

## 25. Convert JavaScript Value to JSON String (Repetition of #1)

---

## 26. Resolve Value to Promise
**Description:** Implement a function to resolve a given value to a Promise.

**Hint:** Use `Promise.resolve()`.

---

## 27. Turtle Class for 2D Movement
**Description:** Implement a Turtle class that moves a turtle on a 2D plane.

**Hint:** Use x, y coordinates and movement methods.

---

## 28. Deserialize JSON String
**Description:** Implement a function to deserialize a JSON string.

**Hint:** Use `JSON.parse()`. 

