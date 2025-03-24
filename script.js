document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    const core = document.querySelector(".cursor-core");
    const trail = document.querySelector(".cursor-trail");

    core.style.left = e.pageX + "px";
    core.style.top = e.pageY + "px";
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    cursor.style.display = "block";
});

document.addEventListener("mouseleave", () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
});
