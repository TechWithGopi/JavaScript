let myArray = [1, 4, "Three", 0.5]; 
console.log(myArray); 
// creating an Array // 
console.log(myArray[0]);
console.log(myArray[1]);  
// Accessing an Array item //

myArray[2] = "Four"; 
console.log(myArray)  
// modifying an Array // 

let lengthOfAnArray = myArray.length; 
console.log(lengthOfAnArray); 
// finding the length of an Array // 

myArray.push(0.6); 
console.log(myArray); 
// push() method is used to add an item in the end of the Array // 
myArray.pop(0.6);
console.log(myArray);
// pop() method is used to remove the end of the item in the Array // 
myArray.pop(); 
console.log(myArray); 
// removed the end item of the Array simply using by pop() // 

function showMessage() {
    console.log('Hello'); 
}
showMessage(); 
// call a function by Function Declaration //

let showFullMessage = function() {
    console.log("Hello world!");
}
showFullMessage();
// call a function by function Expression. It is the another syntax for creating a function // 

let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";

console.log(h1Element);
