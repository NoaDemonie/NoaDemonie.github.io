const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", change)
}

const change = () => {
    let photo =document.getElementById("imgPhoto");
    photo.src ="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
    photo.className = "sizePhoto";
    document.getElementById("txtTekst").innerHTML = "landschap";
}
window.addEventListener("load", setup);