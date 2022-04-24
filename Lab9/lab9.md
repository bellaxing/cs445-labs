# CS445 - Design Pattern 1

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
Once you're done, use the following code to test:
```javascript
const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309
```  

## Exercise 02
Write an implementation for the Observer Pattern where observers have the following format: `{'event': [observers]}`  
For example:
```javascript
{
   'eat': [function1, function2],
   'study': [function3, function4, function5]
}
```
This Observable/Subject has two methods:

`on(event, fn)`: register an observer

`emit(event, message)`: when this method is called, all observers should be invoked

Once you finish, use the following code to test:
```javascript
const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445
```
