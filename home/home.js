"use strict";
const newscontainer = document.getElementById("favorites-container");
const events = JSON.parse(localStorage.getItem("events") || "");
const unfavorite = (star) => {
    star.src = "/img/Icons/star icon.svg";
    star.alt = "click to favorite";
    showFavorite();
};
const post = (singlenews) => {
    newscontainer === null || newscontainer === void 0 ? void 0 : newscontainer.appendChild(singlenews);
};
const showFavorite = () => {
    if (!newscontainer)
        return 0;
    newscontainer.innerHTML = "";
    events.forEach((event, i) => {
        const container = document.createElement("div");
        container.innerHTML = event;
        const singlenews = container.querySelector(".news");
        const star = container.querySelector(".star") || document.createElement("img");
        if (star.alt === "favorited item" && singlenews) {
            post(singlenews);
        }
        star.addEventListener("click", () => {
            var _a, _b;
            unfavorite(star);
            events[i] = (_b = (_a = star.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.outerHTML;
        });
    });
    localStorage.setItem("events", JSON.stringify(events));
};
showFavorite();
