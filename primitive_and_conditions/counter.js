let counterElement = document.getElementById("counterValue");
// assign a variable called counterElement() for access the counter number // 
// by document.getElementById("counterValue") method // 
function onDecrement() {
    // create a function for drecrease the counter numbers by onclick event named onDecrement() //
    let previousCounterValue = counterElement.textContent;
    // call counterElement.textContent and assign into a variable named previousCounterValue //
    let updatedCounterValue = parseInt(previousCounterValue - 1); 
    // parseInt() function given to convert string to integer and given value -1 for decrement // 
    counterElement.textContent = updatedCounterValue;
    // Actions loaded into updatedCounterValue, updatedCounterValue assigned into counterElement.textContent //
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } 
    else {
        counterElement.style.color = "black";
    }
}   // This if condition is used for a particular condition true or false //

function onReset() {
    // create a function for reset the counter numbers by onclick event named onReset() //
    let updatedCounterValue = 0;
    // give value 0 to reset the counter app process into variable named  updatedCounterValue //
    counterElement.textContent = updatedCounterValue;
    // Actions loaded into updatedCounterValue, updatedCounterValue assigned into counterElement.textContent //

    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } 
    else {
        counterElement.style.color = "black";
    }
    // This if condition is used for a particular thing true or false //
}

function onIncrement() {
    // create a function for increase the counter numbers by onclick event named onIncrement() //
    let previousCounterValue = counterElement.textContent;
    // call counterElement.textContent and assign into a variable named previousCounterValue //
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
     // parseInt() function given to covert string to integer and given value + 1 for increment // 
    counterElement.textContent = updatedCounterValue;
    // Actions loaded into updatedCounterValue, updatedCounterValue assigned into counterElement.textContent //
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } 
    else {
        counterElement.style.color = "black";
    }
    // This if condition is used for a particular thing true or false //
}