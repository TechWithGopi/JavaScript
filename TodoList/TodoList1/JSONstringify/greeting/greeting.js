let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let stringToParse = JSON.parse(greeting);


let nameContainer = document.getElementById("nameContainer");
nameContainer.textContent = "From: " + stringToParse.from;

let toContainer = document.getElementById("toContainer");
toContainer.textContent = "To: " + stringToParse.to;

let greetTextContainer = document.getElementById("greetTextContainer");
greetTextContainer.textContent = stringToParse.greetText;