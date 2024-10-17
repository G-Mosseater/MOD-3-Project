// variables getting html elements by class

const chatContainer = document.querySelector(
  ".chat_container"
) as HTMLElement | null;
const chatForm = document.querySelector(".chat_form") as HTMLFormElement | null;
const chatInput = document.querySelector(
  ".chat_input"
) as HTMLInputElement | null;

//adding event listener on the chat form
if (chatForm && chatInput) {
  chatForm.addEventListener("submit", function (event: Event) {
    event.preventDefault(); // prevents page from refreshing when sending a message
    if (!chatInput) return 0;
    const chatText = chatInput.value; // stores data of chatinput  variable into a new one called chatText
    if (!chatText) return 0;
    const chatDiv = document.createElement("div"); //creates new variable that stores a new div element
    chatDiv.classList.add("chat_right"); // adds a class to that element
    chatDiv.innerHTML = `<p>${chatText} </p>`; //setting new html content to the div
    if (!chatContainer) return 0;
    chatContainer.appendChild(chatDiv); // appending chatDiv to chatContainer
    chatInput.value = ""; //reseting chat input

    chatContainer.scrollTop = chatContainer.scrollHeight; // auto scrolls to the bottom of chat container
    chatDiv.innerHTML += `<div class="time_left"><p>${getPerfectTime()}</p></div>`;
  });
}

// declares  new asynchronous function

    //variable that stores the response from the link into a json file
async function getJoke() {
  const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const jokeData = await jokeResponse.json(); //parsing the response into a json format
  return jokeData; // returns the processed data
}
getJoke();

//declares a asynchronous function
const postJoke = async () => {
  if (!chatInput) return 0; // if chat input is null or undefined returns 0 preventing further execution
  const chatDiv = document.createElement("div"); //creates new chat bubble
  chatDiv.classList.add("chat_left"); // assigns class to the chat
  const jokeObject = await getJoke(); //variable stores result from the getJoke function
  const chatText = jokeObject.joke; //extracting the joke text
  chatDiv.innerHTML = `<p>${chatText} </p>`; //sets the content of chatdiv with joke text
  if (!chatContainer) return 0;
  chatContainer.appendChild(chatDiv); //appends the new chatDiv to the contianer
  chatInput.value = ""; //clears the chat input

  chatContainer.scrollTop = chatContainer.scrollHeight; //scrolls to the bottom of the page
};
postJoke(); //calls the function to trigger the whole process

setInterval(postJoke, 10000); //executes the code every 10 seconds

const getPerfectTime = (time: Date = new Date()) => {
  const minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  const hours = (time.getHours() < 10 ? "0" : "") + time.getHours();
  const seconds = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
  return hours + ":" + minutes + ":" + seconds;
 
}

if (chatForm && chatInput) {
  chatForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    if (!chatInput) return 0;
    const chatText = chatInput.value;
    if (!chatText) return 0;
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat_right");
    chatDiv.innerHTML = `<p>${chatText}</p>`;
    if (!chatContainer) return 0;
    chatContainer.appendChild(chatDiv);
    chatInput.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;
    const time = new Date();
    chatDiv.innerHTML += `<div class="time_left"><p>${getPerfectTime()}</p></div>
`;
  });
}

