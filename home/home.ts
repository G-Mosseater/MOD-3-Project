const newscontainer = document.getElementById("favorites-container")
const events = JSON.parse(localStorage.getItem("events")||"")
const unfavorite= (star:HTMLImageElement)=>{
    star.src="../img/Icons/star icon.svg";
    star.alt="click to favorite";
    showFavorite()
}

const post = (singlenews: HTMLElement) => {
        newscontainer?.appendChild(singlenews)
}
// Function to show favorite events in the news container
const showFavorite = () => {

    // If newscontainer is null or undefined, exit the function by returning 0
    if (!newscontainer)
        return 0

    // Clear the contents of the news container
    newscontainer.innerHTML = ""

    // Loop through each event in the events array
    events.forEach((event: string, i: number) => {
        
        // Create a new div element to hold the event's HTML content
        const container = document.createElement("div")
        
        // Set the container's innerHTML to the current event string (which is assumed to contain HTML)
        container.innerHTML = event

        // Find an element within the container that has the class "news" and cast it to HTMLElement
        const singlenews = container.querySelector(".news") as HTMLElement
        
        // Find an image element with the class "star", or create a new <img> element if it's not found
        const star: HTMLImageElement = container.querySelector(".star") || document.createElement("img")

        // If the star element's alt attribute is "favorited item" and singlenews exists, post singlenews
        if (star.alt === "favorited item" && singlenews) {
            post(singlenews) // Calls the post function with the singlenews element (assumed to be a favorite)
        }

        // Add a click event listener to the star element
        star.addEventListener("click", () => {
            // Calls the unfavorite function to remove the item from favorites
            unfavorite(star)
            
            // Updates the events array by replacing the current event with the updated HTML structure 
            // of the parent elements (star’s grandparent element)
            events[i] = star.parentElement?.parentElement?.outerHTML
        })
    })

    // Save the updated events array in local storage as a string
    localStorage.setItem("events", JSON.stringify(events))
}

// Call the showFavorite function to run it when the script is loaded
showFavorite()
