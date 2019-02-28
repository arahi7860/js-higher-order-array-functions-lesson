# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  WEB DEVELOPMENT IMMERSIVE

# Map, Filter, Reduce


# Review: [for loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)!

```javascript
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

In JavaScript, functions are first-class citiziens, which means, we can pass functions around like values. 
Higher Order Functions are functions that pass a function as an argument or return a function as a value.

## [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- You can call the forEach method on any array and pass it a function to execute on each item in the array.

```javascript
const arr = [1, 2, 3, 4, 5];

arr.forEach(function(element) {
  console.log(element);
});
```

## [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`.map()` will take an array, and produce a new array with new values. In a function you define what each value in the array should be based on an existing item.

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange'];
const wordLengths = words.map(function(word) { return word.length });
// wordLengths = [ 3, 5, 2, 5, 4, 2, 6 ];
```

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange'];
const wordsWrappedInX = words.map(function(word) { 
  const newWord = 'x' + word + 'x';
  return newWord;
});
// wordLengths = [ 'xthex', 'xworldx', 'xisx', 'xroundx', 'xlikex', 'xanx', 'xorangex' ]
```

## Filter

`.filter()` will take an array, and produce a new array that only contains some of the items. Each item in the array runs through a function. If the function returns true, the item is included in the new array.

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange'];
const shortWords = words.filter(function(word) { return word.length <= 3 });
// shortWords = [ 'the', 'is', 'an' ];
```


```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange'];
const wordsThatStartWithR = words.filter(function(word) { return word[0] === 'r' });
// wordsThatStartWithR = ['round'];
```


## Reduce
- The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.reduce(function(accumulator, value) {
  return accumulator + value;
}, 0);
```

__NOTE__ The single value returned can be an object or array. Often in examples it's a number or string but you can return anything. Reduce is extremely powerful and all other iterators can be written using it. It's tough to wrap one's mind around so don't worry if this one is inscrutable for now. We'll revisit it now and again...and again and again.

### Method chaining & using declared functions

- When using these array methods we can method chain. So instead of doing:

```javascript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(element) {
  return element + 1;
});

const newerArr = newArr.filter(function(element) {
  return element % 2 === 0;
});
```

We can do:

```javascript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(element) {
  return element + 1;
}).filter(function(element) {
  return element % 2 === 0;
});
```

Furthermore, we don't have to inline the anonymous functions, we can declare them elsewhere:

```javascript
const arr = [1, 2, 3, 4, 5];

const add1 = function(num) {
  return num + 1;
}

const isEven = function(num) {
  return num % 2 === 0;
}

const newArr = arr.map(add1).filter(isEven);
```

### Bonus Challenge

Write your own `map` and `filter` using only `reduce` (i.e. no for loops)


## Exercises

Work through each exercise in the `exercises` folder. 

As you edit code, run them with `node 1.js`.

## Try watch when working on your exercises

Try using the `watch` command, to keep a terminal process open that will automatically rerun your code!

Install it with brew:

```bash
brew install watch
```

This command re-runs an exercise every 0.3 seconds:

```bash
watch -n 0.3 node 1.js
```
