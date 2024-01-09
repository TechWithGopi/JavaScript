let imageElement = document.getElementById("image");
// get the image by id and assigned into imageElement //
let originalImageWidth = "200px";
// set the originalImageWidth as 200px //
imageElement.style.width = originalImageWidth;  
// take the image, go to style portion, go to width portion, and assign the originalImageWidth (200px) into width of the image // 
// Now, the image fits in 200px //
let warningMessageElement = document.getElementById("warningMessage");
// get the warningMessage by id and loaded into warningMessageElement //
let imageWidthElement = document.getElementById("imageWidth");
// get the imageWidth by id and assigned into imageWidthElement //
imageWidthElement.textContent = originalImageWidth; 
// set the default width as 200px by textContent property //


let minWidth = 100; 
// assign 100 into minWidth of the image // 
let defaultWidth = 200;
// assign 200 into defaultWidth of the image //
let maxWidth = 300;
// assign 300 into maxWidth of the Image //
let minWidthWarningMessage = "Can't Visible. Increase the Size of the Image"; 
// set the minimum warning message into minWidthWarningMessage // 
let maxWidthWarningMessage = "too big. Decrease the size of the image";
// set the maximum warning message into maxWidthWarningMessage // 

function onDecrement() {
// call the onDecrement() event by function //    
    if (defaultWidth <= minWidth) { 
        // write the condition if the condition satisfy, decrease warningMessage shown //
        warningMessageElement.textContent = minWidthWarningMessage; 
        // set the decrease warningMessage by textContent property //
    } else {
        warningMessageElement.textContent = "";
        // make disappear the decrease warning message //
        defaultWidth = defaultWidth - 5; 
        // decrease the defaultWidth by -5 in every click the (-) button//
        originalImageWidth = defaultWidth + "px"; 
        // add "px" string to defaultWidth and assign into originalImageWidth //
        imageElement.style.width = originalImageWidth;
        // apply +5px to the image by assigning originalImageWidth into width of the imageElement //
        imageWidthElement.textContent = originalImageWidth;
        // apply the changing image width size to imageWidthElement by textContent property //
    }
}

function onIncrement() {
// call the onIncrement() event by function //  
    if (defaultWidth >= maxWidth) {
        // write the condition if the condition satisfy, increase warningMessage shown //
        warningMessageElement.textContent = maxWidthWarningMessage;
         // set the increse warningMessage by textContent property //
    } else {
        warningMessageElement.textContent = "";
         // make disappear the increase warning message //
        defaultWidth = defaultWidth + 5;
        // increase the defaultWidth by +5 in every click the (+) button//
        originalImageWidth = defaultWidth + "px";
        // add "px" string to defaultWidth and assign into originalImageWidth //
        imageElement.style.width = originalImageWidth;
        // apply +5px to the image by assigning originalImageWidth into width of the imageElement //
        imageWidthElement.textContent = originalImageWidth;
        // apply the changing image width size to imageWidthElement by textContent property //
    }
}