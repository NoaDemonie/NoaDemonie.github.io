const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();
}


window.addEventListener("load", setup);








const update = () => {
    let red = document.getElementById("sldRed").value; //input always value
    let green = document.getElementById("slGreen").value;
    let blue = document.getElementById("slBlue").value;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor= "rgb(" +red+ "," +green+ "," +blue+ ")";
}