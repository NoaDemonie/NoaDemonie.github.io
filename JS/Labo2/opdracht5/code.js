const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let button = document.getElementById("btnWelkom");

    // Voeg een event listener toe aan de button
    button.addEventListener("click", function() {
        pElement.innerHTML = "Welkom!";
    });
}
window.addEventListener("load", setup);