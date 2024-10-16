"use strict";
// Grab the element that will trigger the action (e.g., a button)
const element = document.getElementById('buttonCreate');
// Grab the container where the message will be shown
const messageContainer = document.getElementById('messageContainer');
if (element && messageContainer) {
    // Add a click event listener to the element
    element.addEventListener('click', () => {
        // Create a new paragraph element
        const message = document.createElement('p');
        // Set the text content to "Meetup created"
        message.textContent = 'Meetup created!';
        // Append the message to the message container in the DOM
        messageContainer.appendChild(message);
    });
}
