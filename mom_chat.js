"use strict";
// variables getting html elements by class
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const chatContainer = document.querySelector(".chat_container");
const chatForm = document.querySelector(".chat_form");
const chatInput = document.querySelector(".chat_input");
//adding event listener on the chat form
if (chatForm && chatInput) {
    chatForm.addEventListener("submit", function (event) {
        event.preventDefault(); // prevents page from refreshing when sending a message
        if (!chatInput)
            return 0;
        const chatText = chatInput.value; // stores data of chatinput  variable into a new one called chatText
        if (!chatText)
            return 0;
        const chatDiv = document.createElement("div"); //creates new variable that stores a new div element
        chatDiv.classList.add("chat_right"); // adds a class to that element
        chatDiv.innerHTML = `<p>${chatText} </p>`; //setting new html content to the div
        if (!chatContainer)
            return 0;
        chatContainer.appendChild(chatDiv); // appending chatDiv to chatContainer
        chatInput.value = ""; //reseting chat input
        chatContainer.scrollTop = chatContainer.scrollHeight; // auto scrolls to the bottom of chat container
        chatDiv.innerHTML += `<div class="time_left"><p>${getPerfectTime()}</p></div>`;
    });
}
// declares  new asynchronous function
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeResponse = yield fetch("https://icanhazdadjoke.com/", {
            //variable that stores the response from the link into a json file
            headers: {
                Accept: "application/json",
            },
        });
        const jokeData = yield jokeResponse.json(); //parsing the response into a json format
        return jokeData; // returns the processed data
    });
}
getJoke();
//declares a asynchronous function
const postJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!chatInput)
        return 0; // if chat input is null or undefined returns 0 preventing further execution
    const chatDiv = document.createElement("div"); //creates new chat bubble
    chatDiv.classList.add("chat_left"); // assigns class to the chat
    const jokeObject = yield getJoke(); //variable stores result from the getJoke function
    const chatText = jokeObject.joke; //extracting the joke text
    chatDiv.innerHTML = `<p>${chatText} </p>`; //sets the content of chatdiv with joke text
    if (!chatContainer)
        return 0;
    chatContainer.appendChild(chatDiv); //appends the new chatDiv to the contianer
    chatInput.value = ""; //clears the chat input
    chatContainer.scrollTop = chatContainer.scrollHeight; //scrolls to the bottom of the page
});
postJoke(); //calls the function to trigger the whole process
setInterval(postJoke, 10000); //executes the code every 10 seconds
const getPerfectTime = (time = new Date()) => {
    const minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    const hours = (time.getHours() < 10 ? "0" : "") + time.getHours();
    const seconds = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
=======
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeData = yield fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });
        const jokeObj = yield jokeData.json();
        return jokeObj;
    });
}
if (chatForm && chatInput) {
    chatForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!chatInput)
            return 0;
        const chatText = chatInput.value;
        if (!chatText)
            return 0;
        const chatDiv = document.createElement("div");
        chatDiv.classList.add("chat_right");
        chatDiv.innerHTML = `<p>${chatText}</p>`;
        if (!chatContainer)
            return 0;
        chatContainer.appendChild(chatDiv);
        chatInput.value = "";
        chatContainer.scrollTop = chatContainer.scrollHeight;
        const time = new Date();
        chatDiv.innerHTML += `<div class="time_left"><p>${getPerfectTime()}</p></div>
`;
    });
}
const postJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!chatInput)
        return 0;
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat_left");
    const jokeObject = yield getJoke();
    const chatText = jokeObject.joke;
    chatDiv.innerHTML = `<p>${chatText}</p>`;
    if (!chatContainer)
        return 0;
    chatContainer.appendChild(chatDiv);
    chatInput.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;
});
postJoke();
setInterval(postJoke, 15000);
const getPerfectTime = (time = new Date()) => {
    const minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    const seconds = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
    const hours = (time.getHours() < 10 ? "0" : "") + time.getHours();

    return hours + ":" + minutes + ":" + seconds;
};
console.log(getPerfectTime());
