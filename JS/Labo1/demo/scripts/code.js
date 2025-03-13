const setup = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);
    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

    const show = () =>{
    let txtName = document.getElementById("txtName");
    if(txtName.value !==""){
        alert("Jouw naam is " + txtName.value);

        console.log("Jouw naam is " + txtName.value);
        console.log('Jouw naam is  + $txtName.value}');
    }
    else{
        alert("gelieve jouw naam in te geven")
    }

    }

    window.addEventListener("load", setup);
    const change = () => {
        let lblCursus = document.getElementById("lblCursus");
        lblCursus.className = "cursus";

}