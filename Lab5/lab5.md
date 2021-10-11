# CS445 - Lab 5 Intro to Asynchronous programming & Promise

## Question 01
Change `isPrime()` that takes in a single number parameter and returns a new promise.  
Using setTimeout and after 500 milliseconds, the promise will either resolove or reject.  
if the input is prime number, the promise resolves with `{prime: true}`.  
if the input is not a prime number, it rejects with `{prime: false}`.  
  
Write code and call your promisified function and test it for both scenarios (resolve and reject)
  
You may use the following function to determine if the number is prime or not
```javascript
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
```

## Question 02
Remember `removeDuplicates()` method that you wrote earlier? Currently this method runs synchronously. Rewrite an asynchronous version of it `removeDuplicatedAsync()` as following:
```javascript
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]
