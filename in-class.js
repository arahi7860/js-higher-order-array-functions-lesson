const numbers = [1,2,3,4,5]

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

for (const item of numbers) {
    console.log(item);
}

const res1 = numbers.forEach((element) => {
    console.log(element);
    return 1
})

console.log(res1);

const mappedItems = numbers.map(el => {
    return el + 1
})

console.log(mappedItems);

const filteredItems = numbers.filter(el => {
    return el % 2 === 0
})

console.log(filteredItems);

const sum = numbers.reduce((acc, second) => {
    return acc + second
})

console.log(sum)

const chainedResult = numbers
    .map(el => el + 7)
    .filter(el => el % 2 === 0)
    .reduce((acc, curr) => acc + curr)

const res = numbers.map(el => el + 1)
const res2 = res.filter(el => el % 2 === 0)
const finalRes = res2.reduce((acc, curr) => acc + curr)

console.log(chainedResult);
