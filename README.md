# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# Higher Order Functions

## Objectives

1. Explain what a Higher order function in JavaScript is.
2. Recap at the parts of a for loop
3. Talk about built-in JS Higher Order Array methods

### With food first!

![map, filter, reduce with emoji](https://i.redd.it/yf7rw3pjiapx.jpg)


## What it is

In JavaScript, functions are first-class citizens, which means we can pass functions around as values. Higher Order Functions pass a function as an argument or return a function as a value.

A Higher-Order function is a function that receives a function as an argument or returns the function as output.

```JS
// accepts a function as an argument
document.addEventListener('click', ()=> {
  alert('Clicked This page!')
});
```

Used very often in DOM manipulation, the addEventListener function takes an action to listen for as the first argument and a function for the second argument.

You will use many different types of Higher Order Functions, but today, we will focus on the built-in Array callback methods.



## Review: [for loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)!


```Js
const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
// 1 2 3 4 5
```

## [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


- The forEach() method executes a provided function once for each array element.

```javascript
const numbers = [1, 2, 3, 4, 5]

numbers.forEach((element) => {
  console.log(element);
})
// 1 2 3 4 5
```

### Building JS forEach from scratch

Looking at the forEach() method, it may seem like a lot is going on behind the scenes, but in reality, the code is not all that complex.

```JS
let numbers = [1,2,3,4,5];

Array.prototype.loop = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this);
  }
}

numbers.loop((item, i) => console.log(item, i));
```
## [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`.map()` will take an array and produce a new array with new values. In a function, you define what each value in the array should be based on an existing item.

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordLengths = words.map((word) => { return word.length })
// wordLengths = [ 3, 5, 2, 5, 4, 2, 6 ]
```

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordsWrappedInX = words.map((word) => { 
  const newWord = 'x' + word + 'x'
  return newWord
})
// wordsWrappedInX = [ 'xthex', 'xworldx', 'xisx', 'xroundx', 'xlikex', 'xanx', 'xorangex' ]
```

### Building JS .map from scratch

```JS
let numbers = [1,2,3,4,5];

Array.prototype.mapper = function(callback){
  let arr = [];
  for(let i = 0; i < this.length; i++){
    arr.push(callback(this[i], i, this));
  }
  return arr;
}

let biggerNumbers = numbers.mapper(item => item + 3);
console.log(buggerNumbers);
```

As with the forEach method before our new custom map method, 'mapper' is not all that complex.


## [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

`.filter()` will take an array and produce a new array that only contains some of the items. Each item in the array runs through a function. If the function returns true, the item is included in the new array.

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const shortWords = words.filter((word) => { return word.length <= 3 })
// shortWords = [ 'the', 'is', 'an' ]
```


```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordsThatStartWithR = words.filter((word) => { return word[0] === 'r' })
// wordsThatStartWithR = ['round']
```


## [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((accumulator, value) => {
  return accumulator + value
}, 0)
console.log(sum)
// 15
```

__NOTE__ The single value returned can be an object or array. Often in examples, it's a number or string, but you can return anything. Reduce is extremely powerful, and all other iterators can be written using it. It's tough to wrap one's mind around, so don't worry if this one is inscrutable for now. We'll revisit it now and again...and again and again.

### Method chaining & using declared functions

- When using these array methods, we can method chain. So instead of doing:

```javascript
const numbers = [1, 2, 3, 4, 5];

const mappedNumbers = numbers.map((element) => {
  return element + 1;
});

console.log(mappedNumbers)
// [ 2, 3, 4, 5, 6 ]

const filteredNumbers = mappedNumbers.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredNumbers)
// [ 2, 4, 6 ]
```

We can do:

```javascript
const numbers = [1, 2, 3, 4, 5];

const filteredAndMappedNumbers = numbers.map((element) => {
  return element + 1;
}).filter((element) => {
  return element % 2 === 0;
});
console.log(filteredAndMappedNumbers)
[ 2, 4, 6 ]
```

Furthermore, we don't have to inline the anonymous functions, we can declare them elsewhere:

```javascript
const numbers = [1, 2, 3, 4, 5];

const add1 = (num) => {
  return num + 1;
}

const isEven = (num) => {
  return num % 2 === 0;
}

const result = numbers.map(add1).filter(isEven);

console.log(result)
[ 2, 4, 6 ]
```

### Bonus Challenge

Write your own `map` and `filter` using only `reduce` (i.e. no for loops)






