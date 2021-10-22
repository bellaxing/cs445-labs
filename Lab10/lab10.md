# CS445 - Lab 10 Design Pattern 2

## Exercise 01
Implement Factory Method pattern to create two types of light bulbs: regular bulbs and energy saver bulbs. 
* Regular bulbs have a range of lumens between 50 and 100 and last for 1 year. 
* Energy saver bulbs have a range of lumens between 5 and 40 and last for 10 years and comes in multiple colors.

**When you finish, you can use the code below to test:**
```javascript
const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}
```
  
## Exercise 02
Implement Decorator pattern to add a logger to any object (additional class is needed). A logger method will log a message to the `console`.

**When you finish, you can use the code below to test:**
```javascript
const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();
```
  
## Exercise 03
Implement Strategy pattern to choose between different logging algorithms, choosing between:
* `console.info()`
* `console.warn()`
* `console.error()`
* `console.table()`  *accepts an array of objects*


**When you finish, you can use the code below to test:**
```javascript
const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);
```
  
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