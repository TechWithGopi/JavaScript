let movieReviewsContainer = document.getElementById("movieReviewsContainer");
let titleInput = document.getElementById("titleInput");
let reviewTextarea = document.getElementById("reviewTextarea");
let addBtn = document.getElementById("addBtn");
let reviewsContainer = document.getElementById("reviewsContainer");


function onAddReview() {
    let getUserInput = titleInput.value;
    let getUserReview = reviewTextarea.value;
    if (getUserInput === "") {
        alert("Please enter a movie title")
        return;
    }

    let movieTitle = document.createElement("h1");
    movieTitle.textContent = "Movie Title: " + getUserInput;
    reviewsContainer.appendChild(movieTitle);

    let movieReview = document.createElement("p");
    movieReview.textContent = "Review: " + getUserReview;
    reviewsContainer.appendChild(movieReview);

    let horizontalLine = document.createElement("hr");
    reviewsContainer.appendChild(horizontalLine);

    titleInput.value = "";
    reviewTextarea.value = "";

}