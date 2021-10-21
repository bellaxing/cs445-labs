# CS445 - Lab 9 Design Pattern 1

## Exercise 01
Use the Module pattern to create a shopping cart that has one **private** member: `basket` which is an Array, and the following public methods: 
* `upsertItem(item)` add an item to basket if doesn't exist, or update if exist.
* `getItemsCount()` returns the total number of items in the basket.
* `getTotalPrice()` calculates the total price of items. Each item price is the product's price multiply item's count.
* `removeItemById(id)` removes an item from the basket.
Every product item has the following structure:
```javascript
Item = {id: 0, product: {id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5}, count: 1}
```
**Note:** One instance of this module should be allowed per application.  

## Exercise 02
Write an implementation for the Observer Pattern where observers have the following format: `{'event': [observers]}`  
For example:
```javascript
{
   'eat': [function1, function2],
   'study': [function3, function4, function5]
}
```
This Observable/Subject should be used as following:
```javascript
.on('eat', function1) // register an observer
.on('eat', function2) // register an observer
.emit('eat') // all observers (function1, and function2) should be invoked
```