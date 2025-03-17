const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substringUitvoeren);
};
const substringUitvoeren = () => {
    let txtInput = document.getElementById("txtInput").value;
    let startIndex = parseInt(document.getElementById("startIndex").value);
    let endIndex = parseInt(document.getElementById("endIndex").value);
    let outputSpan = document.getElementById("txtOutput");

    // Gebruik substring() en toon de output
    let resultaat = txtInput.substring(startIndex, endIndex);
    outputSpan.innerHTML = `${resultaat}`;
};
window.addEventListener("load", setup);