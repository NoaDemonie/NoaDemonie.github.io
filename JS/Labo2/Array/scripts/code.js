let setup = () => {
    let familie = ["familielid1", "familielid2", "familielid3", "familielid4", "familielid5"];

    console.log (familie.length);

    for (let i=0; i<familie.length; i=i+2){
        console.log("familielid " + familie[i] );
    }
    // pass-by-reference
    voegNaamToe(familie);


    // vraag 5
    console.log(familie.join(" - "));
}

const voegNaamToe = (leden) => {

    let naam = prompt( "voeg een naam toe");
    // waarde toevoegen
    leden.push(naam);
    for (let i = 0; i < leden.lenght; i++){
        console.log("familielid " + leden[i] );
    }
}


window.addEventListener("load", setup);