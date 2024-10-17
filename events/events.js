"use strict";
// Favorite items
{
    const stars = document.querySelectorAll(".star");
    let events = [];
    const changeLocalStorage = () => {
        events = [];
        stars.forEach(star => {
            var _a, _b;
            events.push(((_b = (_a = star === null || star === void 0 ? void 0 : star.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.outerHTML) || "");
        });
        localStorage.setItem("events", JSON.stringify(events));
    };
    stars.forEach(star => {
        var _a, _b;
        star.addEventListener("click", () => {
            if (star.alt === "click to favorite") {
                star.src = "/img/Icons/full star icon.svg";
                star.alt = "favorited item";
            }
            else if (star.alt === "favorited item") {
                star.src = "/img/Icons/star icon.svg";
                star.alt = "click to favorite";
            }
            changeLocalStorage();
        });
        events.push(((_b = (_a = star === null || star === void 0 ? void 0 : star.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.outerHTML) || "");
    });
    localStorage.setItem("events", JSON.stringify(events));
}
