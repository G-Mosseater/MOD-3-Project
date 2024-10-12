console.log("test")
const buttons:NodeListOf<HTMLDivElement>=document.querySelectorAll(".button")
console.log("buttons",buttons)
buttons.forEach(button=>{
    button.addEventListener("click", event=>{
        button.style.backgroundColor="#FFECC5"

    })
})