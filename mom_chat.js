"use strict";
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
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jokeData = yield fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                },
            });
            const jokeObj = yield jokeData.json();
            console.log(jokeObj);
        }
        finally {
        }
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
    });
}
