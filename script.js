document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX - 8 + "px"; /* Center 16px spider */
    cursor.style.top = e.pageY - 8 + "px";
    cursor.style.display = "block";
});

document.addEventListener("mouseleave", () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
});
