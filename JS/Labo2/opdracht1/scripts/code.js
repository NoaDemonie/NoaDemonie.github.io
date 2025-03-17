const setup = () => {
    // 1. Alert popup
    window.alert("Dit is een mededeling.");

// 2. Confirm popup en log de return value
    let bevestiging = window.confirm("Weet u het zeker?");
    console.log("Return value van confirm:", bevestiging);

// 3. Prompt popup en log de return value
    let invoer = window.prompt("Wat is uw naam?", "onbekend");
    console.log("Return value van prompt:", invoer);

}
window.addEventListener("load", setup);