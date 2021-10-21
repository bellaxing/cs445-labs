# CS445 - Lab 9 Design Pattern 2

## Exercise 01
Implement the Factory pattern and create two types of light bulbs, regular bulbs and energy saver bulbs. 
* Regular bulbs have a range of lumens between 50 and 100 and last for 1 year. 
* Energy saver bulbs have a range of lumens between 5 and 40 and last for 10 years and comes in multiple colors.  
  
## Exercise 02
Implement the Decorator pattern to add a logger to any object (add behavior). A logger method will log a message to the `console`.
  
## Exercise 03
Implement the Strategy pattern to choose between different logging algorithms, choosing between:
* `console.info()`
* `console.warn()`
* `console.error()`
* `console.table()`  *accepts an array of objects*
  
## Exercise 04
Create a memoized version of the following `fibonacci()` recursive method to improve its performance.
```javascript
function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```
You may use `console.time(label)` and `console.timeEnd(label)` to measure the difference in performance.