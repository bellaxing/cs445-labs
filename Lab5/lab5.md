# CS445 - Intro to Asynchronous programming & Promise

## Exercise 01
Change `isPrime` function below that takes in a single number parameter and returns a new promise.  
Using setTimeout and after 500 milliseconds, the promise will either resolove or reject.  
if the input is prime number, the promise resolves with `{prime: true}`.  
if the input is not a prime number, it rejects with `{prime: false}`.  
  
You may use the following function to determine if the number is prime or not
```javascript
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
```
When you finish, test using the code below:
```javascript
console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');

// Output:
// start
// end
// { prime: true }
```

## Exercise 02
Create a method named `removeDuplicatesAsync` which works only for Array types and removes all duplicates for any array asynchornously. When you finish, test using the code below:

**NOTE: If you use Promise, the promise is already resolved inside the method which is different from previous exercise**

**Optional: You can try to implement use async&await**

```javascript
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]
