const btnEl = document.querySelector(".btn");

// pergantian mouse
btnEl.addEventListener("mouseenter", (event) =>{
    const x = (event.pageX- btnEl.offsetLeft);
    const y = (event.pageY- btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")

});