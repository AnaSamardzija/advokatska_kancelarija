//dugme za scroll na pocetak stranice

let btn_scrol = document.getElementById("scroll");

//dugme se ne vidi, ali kada se skroluje 20px dugme postaje vidljivo
function ScrollFunkcija() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn_scrol.style.display = "block";
    } 
    else {
        btn_scrol.style.display = "none";
    }
}

//kada se klikne na dugme, skroluje se na pocetak stranice
btn_scrol.addEventListener("click", () => {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, Opera
})

window.addEventListener("scroll", ScrollFunkcija);