"use strict";
// First, we make sure your element exists in the DOM and grab it using `document.getElementById` or another selector.
const element = document.getElementById('buttonCreate');
if (element) {
    // Add a click event listener to the element.
    element.addEventListener('click', () => {
        // When the element is clicked, show a message.
        alert('Meetup created');
    });
}
