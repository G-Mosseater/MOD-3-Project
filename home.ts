const news = document.getElementById("favorites-container")
const events = JSON.parse(localStorage.getItem("events")||"")
events.forEach ((event:string)=> {
    const container = document.createElement ("div")
    container.innerHTML = event
    const star:HTMLImageElement= container.querySelector(".star") ||document.createElement("img")
    const alt = star.alt
    const singlenews = container.querySelector(".news")
    if (alt ==="favorited item"&&singlenews){
        news?.appendChild(singlenews)
    } 
})