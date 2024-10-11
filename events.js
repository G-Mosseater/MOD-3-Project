"use strict";
//favorite items//
{
    const stars = document.querySelectorAll(".star");
    const events = [];
    stars.forEach(star => {
        var _a, _b;
        events.push(((_b = (_a = star === null || star === void 0 ? void 0 : star.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.outerHTML) || "");
        star.addEventListener("click", () => {
            if (star.alt === "click to favorite") {
                star.src = "./img/full star icon.svg";
                star.alt = "favorited item";
            }
            else if (star.alt === "favorited item") {
                star.src = "./img/star icon.svg";
                star.alt = "click to favorite";
            }
        });
        localStorage.setItem("events", JSON.stringify(events));
    });
    console.log(events);
    localStorage.setItem("events", JSON.stringify(events));
}
