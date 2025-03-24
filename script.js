document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX - 10 + "px"; /* Center 20px spider */
    cursor.style.top = e.pageY - 10 + "px";
    cursor.style.display = "block";

    // Scroll page based on cursor Y position
    const windowHeight = window.innerHeight;
    const scrollRange = document.body.scrollHeight - windowHeight;
    const cursorYPercent = e.pageY / windowHeight; // 0 to 1 based on cursor position
    const scrollPosition = scrollRange * cursorYPercent;
    window.scrollTo(0, scrollPosition); // Scroll page dynamically
});

document.addEventListener("mouseleave", () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
});
