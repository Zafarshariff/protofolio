document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX - 7.5 + "px"; /* Center 15px cursor */
    cursor.style.top = e.pageY - 7.5 + "px";
    cursor.style.display = "block";
});

document.addEventListener("mouseleave", () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
});
