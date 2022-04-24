# CS445 - async&await

## Exercise 01
Based on the `isPrime` function below which is the solution of yesterday's solution for Exercise 01, create a new function named `isPrimeAsync` which use async&await keywords to resolve the `isPrime` function.

```javascript
const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function() {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) reject({ prime: false });
        resolve({ prime: num > 1 });
    }, 500);
});
```
When you finish, test using the code below:
```javascript
console.log('start');
isPrimeAsync(7)
console.log('end');

// Output:
// start
// end
// { prime: true }
```

## Exercise 02
Create a method named `removeDuplicatesAsync` which works only for Array types and removes all duplicates for any array asynchornously. 
**You MUST use async & await**
When you finish, test using the code below:

```javascript
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]
