"use strict";
// Favorite items management block
{
    // This selects all image elements with the class "star" (representing favorite icons) and store them in 'stars'
    const stars = document.querySelectorAll(".star");
    // This declares an empty array to store the events (HTML strings representing the parent elements of the stars)
    let events = [];
    // Function to update localStorage with the current state of favorite events
    const changeLocalStorage = () => {
        // Reset the events array
        events = [];
        // Loop through each star element
        stars.forEach(star => {
            var _a, _b;
            // Add the HTML content of the grandparent element of the star to the events array
            events.push(((_b = (_a = star === null || star === void 0 ? void 0 : star.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.outerHTML) || "");
        });
        // Save the updated events array in localStorage as a JSON string
        localStorage.setItem("events", JSON.stringify(events));
    };
    // Loop through each star element to set up click listeners and initialize the events array
    stars.forEach(star => {
        var _a, _b;
        // Adds a click event listener to each star element
        star.addEventListener("click", () => {
            // Checks if the star's alt attribute indicates that the item is not favorited
            if (star.alt === "click to favorite") {
                // Change the star's image source to a "full star" icon and mark it as favorited
                star.src = "../img/Icons/full star icon.svg";
                star.alt = "favorited item";
            }
            // If the star is already favorited, unfavorite it
            else if (star.alt === "favorited item") {
                // Change the star's image source to an "empty star" icon and mark it as not favorited
                star.src = "../img/Icons/star icon.svg";
                star.alt = "click to favorite";
            }
            // After toggling the favorite status, update localStorage with the new state
            changeLocalStorage();
        });
        // Add the HTML content of the star's grandparent element to the events array (for initial setup)
        events.push(((_b = (_a = star === null || star === void 0 ? void 0 : star.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.outerHTML) || "");
    });
    // After setting up the events array, store it in localStorage
    localStorage.setItem("events", JSON.stringify(events));
}
