const setup = () => {
 let buttonKies = document.getElementById("buttonKies");
 buttonKies.addEventListener("click",keuzeUitvoeren);
 let buttonGeef = document.getElementById("buttonGeef");
 buttonGeef.addEventListener("input",geefLetter);
}
const keuzeUitvoeren = () => {
    let optie1 = true;
    optie1 = !optie1;
    button.textContent = optie1 ? "Met een ei" : "Zonder een ei";

}
const geefLetter = () => {

        }




window.addEventListener("load", setup);