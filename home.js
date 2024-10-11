"use strict";
const news = document.getElementById("favorites-container");
const events = JSON.parse(localStorage.getItem("events") || "");
events.forEach((event) => {
    const container = document.createElement("div");
    container.innerHTML = event;
    const star = container.querySelector(".star") || document.createElement("img");
    const alt = star.alt;
    const singlenews = container.querySelector(".news");
    if (alt === "favorited item" && singlenews) {
        news === null || news === void 0 ? void 0 : news.appendChild(singlenews);
    }
});
