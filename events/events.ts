// Favorite items
{
    const stars:NodeListOf<HTMLImageElement> = document.querySelectorAll(".star")
    let events:string[] = []
    const changeLocalStorage = ()=> 
    {
        events = []
        stars.forEach(star => {
            events.push(star?.parentElement?.parentElement?.outerHTML ||"")
        })
        localStorage.setItem("events",JSON.stringify(events))
    }

    stars.forEach(star => {
        star.addEventListener("click",()=>{
            if (star.alt==="click to favorite"){
                star.src="../img/Icons/full star icon.svg";
                star.alt="favorited item";
            }
            else if (star.alt==="favorited item"){
                star.src="../img/Icons/star icon.svg";
                star.alt="click to favorite";
            }
            changeLocalStorage ()
        })
        events.push(star?.parentElement?.parentElement?.outerHTML ||"")
     
    })
    localStorage.setItem("events",JSON.stringify(events))
    }
