console.log("test")

const buttons:NodeListOf<HTMLDivElement>=document.querySelectorAll(".button")

console.log("buttons",buttons)

buttons.forEach(button=>{
    button.addEventListener("click", event=>{


        if (button.style.backgroundColor==="rgb(255, 236, 197)" || button.style.backgroundColor === "#ffecc5"){
            button.style.backgroundColor="#FFFFFF"
        } else {
            button.style.backgroundColor="#FFECC5"
        }

    })
})
