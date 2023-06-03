//radno vreme - da li je trenutno otvoreno ili zatvoreno
let d = new Date;
let dan = d.getDay();
let sati = d.getHours();

let radno_vreme = document.getElementById("radno_vreme");

function RadnoVreme(dan, sati) {
    if(dan == 6 || dan == 0) {
        radno_vreme.innerHTML = `trenutno je zatvoreno`;
    }
    else if(sati >= 8 && sati < 16) {
        radno_vreme.innerHTML = `otvoreno`;
    }
    else {
        radno_vreme.innerHTML = `trenutno je zatvoreno`;
    }
}

RadnoVreme(dan, sati);

//forma - salnje poruke
let ime = document.getElementById("ime");
let email = document.getElementById("email");
let telefon = document.getElementById("telefon");
let poruke = document.getElementById("poruka");
let dugme = document.getElementById("dugme");

dugme.addEventListener("click", (event) => {
    if(ime.value == '' || email.value == '' || telefon.value == '') {
        alert("Niste uneli sve podatke!");
        event.preventDefault();
    }
    else if(poruka.value == '') {
        alert("Morate napisati neku poruku");
        event.preventDefault();
    }
    else {
        alert("Vaša poruka je uspešno poslata!")
    }
})