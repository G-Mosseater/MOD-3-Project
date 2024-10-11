//favorite items//
{
const stars:NodeListOf<HTMLImageElement> = document.querySelectorAll(".star")
const events:string[] = []
stars.forEach(star => {
    star.addEventListener("click",()=>{
        if (star.alt==="click to favorite"){
            star.src="./img/full star icon.svg";
            star.alt="favorited item";
        }
        else if (star.alt==="favorited item"){
            star.src="./img/star icon.svg";
            star.alt="click to favorite";
        }
    })
    events.push(star?.parentElement?.parentElement?.outerHTML ||"")
    localStorage.setItem("events",JSON.stringify(events))
})

localStorage.setItem("events",JSON.stringify(events))
}