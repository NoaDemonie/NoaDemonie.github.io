const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);

}
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let pElement = document.getElementById("txtOutput");

    let tekst = txtInput.value;
    pElement.innerHTML = tekst;
}

window.addEventListener("load", setup);