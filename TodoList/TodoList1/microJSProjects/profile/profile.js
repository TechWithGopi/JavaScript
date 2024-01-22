let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "GOPIKRISHNA",
    age: 23
};

let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");
let imgContainerElement = document.getElementById("imgContainer");
let profileImageElement = document.createElement("img");
profileImageElement.setAttribute("src", profileDetails.imgSrc);
imgContainerElement.appendChild(profileImageElement);


let h1Element = document.createElement("h1");
h1Element.textContent = profileDetails.name;
h1Element.classList.add("profile-name", "mt-4");
imgContainerElement.appendChild(h1Element);

let ageElement = document.createElement("p");
ageElement.classList.add("age-details");
ageElement.textContent = "Age : " + profileDetails.age;
imgContainerElement.appendChild(ageElement);