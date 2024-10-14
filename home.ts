const newscontainer = document.getElementById("favorites-container")
const events = JSON.parse(localStorage.getItem("events")||"")
const unfavorite= (star:HTMLImageElement)=>{
    star.src="./img/star icon.svg";
    star.alt="click to favorite";
    showFavorite()
}

const post = (singlenews: HTMLElement) => {
        newscontainer?.appendChild(singlenews)
}
const showFavorite = () => {
    if (!newscontainer)
        return 0
    newscontainer.innerHTML = ""
    events.forEach ((event:string, i)=> {
        const container = document.createElement ("div")
        container.innerHTML = event
        const singlenews = container.querySelector(".news") as HTMLElement
        const star:HTMLImageElement= container.querySelector(".star") ||document.createElement("img")
        if (star.alt ==="favorited item"&&singlenews){
            post(singlenews)
        }
        star.addEventListener("click",()=>{
            unfavorite(star);
            events[i] = star.parentElement?.parentElement?.outerHTML
        })
    })
    localStorage.setItem("events", JSON.stringify(events))
}
showFavorite()
