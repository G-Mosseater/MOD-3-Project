const chatContainer = document.querySelector(
  ".chat_container"
) as HTMLElement | null;
const chatForm = document.querySelector(".chat_form") as HTMLFormElement | null;
const chatInput = document.querySelector(
  ".chat_input"
) as HTMLInputElement | null;

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  return jokeObj;
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

const postJoke = async () => {
  if (!chatInput) return 0;
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat_left");
  const jokeObject = await getJoke();
  const chatText = jokeObject.joke;
  chatDiv.innerHTML = `<p>${chatText}</p>`;
  if (!chatContainer) return 0;
  chatContainer.appendChild(chatDiv);
  chatInput.value = "";
  chatContainer.scrollTop = chatContainer.scrollHeight;
};
postJoke();

setInterval(postJoke, 15000);

const getPerfectTime = (time: Date = new Date()) => {
  const minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  const seconds = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
  const hours = (time.getHours() < 10 ? "0" : "") + time.getHours();
  return hours + ":" + minutes +  ":" + seconds
};

console.log(getPerfectTime());
