# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```
const fibonacci = function(number) {
    let oldNumb = 1;
    let newNumb = 0;
    let i = number;
    while (i) {
        newNumb += oldNumb
        oldNumb -= oldNumb 
        oldNumb += newNumb 

        i--;
    }
    return newNumb
};
