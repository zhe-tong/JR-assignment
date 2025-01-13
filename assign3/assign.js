// initialize a shopping list
let shoppingList = ["Milk","Eggs","Bread"]

// 数组应用
// add two items to the shopping list
shoppingList.push("Chicken","Beef");
console.log(shoppingList);
// delete the last item from the shopping list
shoppingList.pop();
console.log(shoppingList);

//条件与循环
// the function should print "your shopping list is full" when the shopping list has more than 5 items
function checkShoppingList() {
    if (shoppingList.length > 5) {
        console.log("your shopping list is full");
    }
}
// using loop to list the items
for (let i = 0; i < shoppingList.length; i++) {
    console.log(i + "." +shoppingList[i]);
}

//函数与对象
// the function could return if a item is in the shopping list
function checkItem(item) {
    if (shoppingList.includes(item)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkItem("Lamp"));
console.log(checkItem("Bread"));
// an object to store the shopping list
let shoppingListItem = [
    { name: "Milk", price: 5, quantity: 10},
    { name: "Eggs", price: 2, quantity: 5},
    { name: "Bread", price: 3, quantity: 5},
    { name: "Chicken", price: 4, quantity: 1},
    { name: "Beef", price: 4, quantity: 1}
];
console.log(shoppingListItem);